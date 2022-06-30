import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { AddCronDiscount } from './cron/discount.cron';
import { DiscountLog } from './discount.log';
import { Discount, DiscountDoc } from './schema/discount.schema';
import { DiscountObject } from './types/discount.types';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount.name) private discountModel: Model<DiscountDoc>,
    private addCronDiscount: AddCronDiscount,
    private discountLog: DiscountLog,
  ) {}

  private readonly logger = new Logger(DiscountService.name);

  async create(discountObject: DiscountDoc) {
    // Create the cron to delete automatic discount.
    this.addCronDiscount.create(
      discountObject.discount_expiresIn,
      discountObject.discount_specialKey,
    );

    this.discountLog.triggerLog(
      'INSERT',
      `Se creo un nuevo descuento con el nombre ${discountObject.discount_specialKey}. 
      Con fecha de expiración en ${discountObject.discount_expiresIn}`,
      discountObject,
    );

    return this.discountModel.create({
      ...discountObject,
      discount_status: false,
    });
  }

  getAll() {
    return this.discountModel.find();
  }

  get(discountId: ObjectId) {
    return this.discountModel.findById(discountId);
  }

  async validateDiscount(discountObject: DiscountObject) {
    const Discount = await this.discountModel.findOne({
      discount_specialKey: discountObject.discount_specialKey,
    });

    if (!Discount) return new HttpException('INVALID_DISCOUNT', 404);
    if (!Discount.discount_status)
      return new HttpException('DISCOUNT_EXPIRE', 400);
    if (Discount.discount_priceFloor > discountObject.order_amount)
      return new HttpException('DISCOUNT_PRICEFLOOR_NOT_VALID', 400);

    return {
      message: 'DISCOUNT_SUCCESS',
      amountWithDiscount:
        (Discount.discount_percentage / 100) * discountObject.order_amount,
    };
  }

  getByName(discountName: string) {
    return this.discountModel.findOne({ discount_specialKey: discountName });
  }

  async update(discountId: ObjectId, discountObject: DiscountDoc) {
    const Discount = await this.discountModel.findByIdAndUpdate(
      discountId,
      discountObject,
      {
        new: true,
      },
    );

    this.discountLog.triggerLog(
      'UPDATE',
      `Se realizo una modificación en el descuento ${discountObject.discount_specialKey}`,
      discountObject,
    );

    return Discount;
  }

  async delete(discountId: ObjectId) {
    const Discount = await this.discountModel.findByIdAndDelete(discountId);
    this.discountLog.triggerLog(
      'DELETE',
      `Se elimino el descuento con el nombre de ${Discount.discount_specialKey}`,
      null,
    );

    return Discount;
  }
}
