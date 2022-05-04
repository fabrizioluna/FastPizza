import { Request, Response } from 'express';
import { orderDao } from './order.dao';
import { orderTypes } from './order.types';

export const orderController = {
  create: (req: Request, res: Response) => {
    orderDao.create(req.body)
      .then((order: orderTypes) => res.status(200).send(order))
      .catch((err: string) => res.status(400).send(err));
  },
  get: (req: Request, res: Response) => {
    orderDao.get(req.body.id as string)
      .then((order: orderTypes) => res.status(200).send(order))
      .catch((err: string) => res.status(400).send(err));
  },
};
