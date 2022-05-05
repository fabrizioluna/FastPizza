import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDoc } from "./schema/product.schema";

@Injectable()
export class ProductServices {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDoc>) {}

    createProduct() {
        
    }
}