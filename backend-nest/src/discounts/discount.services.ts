import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Discount, DiscountDoc } from './schema/discount.schema';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount.name) private discountModel: Model<DiscountDoc>,
  ) {}

  create(discountObject: DiscountDoc) {
    const Discount = { ...discountObject, discount_expiresIn: new Date() };
    return this.discountModel.create(Discount);
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
