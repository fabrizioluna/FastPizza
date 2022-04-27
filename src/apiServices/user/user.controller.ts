import { Request, Response } from 'express';
import { userDao } from './user.dao';
import { errorResponse, responseCreate, userTypes } from './user.types';

export const userController = {
  create: (req: Request, res: Response) => {
    userDao
      .createUser(req.body)
      .then((user: responseCreate) => res.status(200).send(user))
      .catch((err: any) => res.status(400).send(err));
  },
  get: (req: Request, res: Response) => {
    userDao
      .getUser(req.query.id as string)
      .then((user: { user: userTypes }) => res.status(200).send(user))
      .catch((err: errorResponse) => res.status(400).send(err));
  },
};
