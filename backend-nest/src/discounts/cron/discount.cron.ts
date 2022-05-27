import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { Model } from 'mongoose';
import { Discount, DiscountDoc } from '../schema/discount.schema';

@Injectable()
export class AddCronDiscount {
  constructor(
    @InjectModel(Discount.name) private discountModel: Model<DiscountDoc>,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  private readonly logger = new Logger(AddCronDiscount.name);

  public create(expiresIn: string, jobKey: string) {
    const specificDate: Date = new Date(`${expiresIn}T00:00:01`);

    const discountCron = new CronJob(specificDate, () =>
      this.destroyDiscount(jobKey),
    );

    this.schedulerRegistry.addCronJob(jobKey, discountCron);
    this.logger.debug(
      `The discount key: ${jobKey} has been created. Programed delete in this date: ${specificDate} at midnight`,
    );
    return discountCron.start();
  }

  private async destroyDiscount(discountDestroy: string) {
    this.logger.debug(
      `The discount ${discountDestroy} has been disabled by cron tasks programmed`,
    );

    this.schedulerRegistry.deleteCronJob(discountDestroy);

    await this.discountModel.findOneAndUpdate(
      { discount_specialKey: discountDestroy },
      { discount_status: false },
    );
  }
}
