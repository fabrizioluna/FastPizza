import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validationFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({
        message: 'Hay errores en los siguientes campos',
        errors: errors.mapped(),
      });
  }

  next();
};

