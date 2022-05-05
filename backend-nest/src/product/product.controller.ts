import { Controller, Post } from "@nestjs/common";
import { ProductServices } from "./product.services";

@Controller('/product')
export class ProductController {
    constructor(private productServices: ProductServices) {}

    @Post('/create')
    create() {
        return this.productServices
    }
}