import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { AddCronDiscount } from './cron/discount.cron';
import { Discount, DiscountDoc } from './schema/discount.schema';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount.name) private discountModel: Model<DiscountDoc>,
    private addCronDiscount: AddCronDiscount,
  ) {}

  private readonly logger = new Logger(DiscountService.name);

  create(discountObject: DiscountDoc) {
    // Create the cron to delete automatic discount.
    this.addCronDiscount.create(
      discountObject.discount_expiresIn,
      discountObject.discount_specialKey,
      // this.destroyDiscount,
    );

    return this.discountModel.create(discountObject);
  }

  getAll() {
    return this.discountModel.find();
  }

  get(discountId: ObjectId) {
    return this.discountModel.findById(discountId);
  }

  update(discountId: ObjectId, discountObject: DiscountDoc) {
    return this.discountModel.findByIdAndUpdate(discountId, discountObject);
  }

  delete(discountId: ObjectId) {
    return this.discountModel.findByIdAndDelete(discountId);
  }
}
