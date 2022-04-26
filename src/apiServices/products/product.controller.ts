import { Request, Response } from 'express';
import {
  callProduct,
  callProducts,
  changeProduct,
  insertProduct,
  removeProduct,
} from './product.dao';
import { ProductTypes } from './product.types';

export const createProduct = (req: Request, res: Response) => {
  insertProduct(req.body)
    .then((product: ProductTypes) => {
      console.log(`New product has been inserted \nInformation: \n${product}`);
      res.status(200).json({
        status: true,
        product,
      });
    })
    .catch((error: string) =>
      res.status(200).json({
        status: false,
        error,
      })
    );
};

export const getProducts = (req: Request, res: Response) => {
  callProducts()
    .then((products: Array<ProductTypes>) => {
      res.status(200).json({
        status: true,
        products,
      });
    })
    .catch((error: string) => {
      res.status(200).json({
        status: false,
        error,
      });
    });
};

export const getProduct = (req: Request, res: Response) => {
  callProduct(req.query.nameProduct as string)
    .then((product: ProductTypes) => {
      res.status(200).json({
        status: true,
        product,
      });
    })
    .catch((error: string) => {
      res.status(200).json({
        status: false,
        error,
      });
    });
};

export const updateProduct = (req: Request, res: Response) => {
  changeProduct(req.query.nameProduct as string, req.body)
    .then((product: ProductTypes) => {
      res.status(200).json({
        status: true,
        product,
      });
    })
    .catch((error: string) => {
      res.status(200).json({
        status: true,
        error,
      });
    });
};

export const deleteProduct = (req: Request, res: Response) => {
  removeProduct(req.query.nameProduct as string)
    .then((message: string) => {
      res.status(200).json({
        status: true,
        message,
      });
    })
    .catch((error: string) => {
      res.status(200).json({
        status: false,
        error,
      });
    });
};
