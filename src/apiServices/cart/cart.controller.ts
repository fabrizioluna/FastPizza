import { Request, Response } from 'express';
import { cartDao } from './cart.dao';
import { cartTypes } from './cart.types';

export const cartController = {
  insert: (req: Request, res: Response) => {
    cartDao
      .insertElementCart(req.body.id, req.body.products)
      .then((cart: cartTypes) => res.status(200).send(cart))
      .catch((err: string) => res.status(400).send(err));
  },
};
