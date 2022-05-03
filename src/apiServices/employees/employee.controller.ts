import { Request, Response } from 'express';
import { EmployeeDao } from './employee.dao';
import { employeeTypes } from './employee.types';

export const EmployeeController = {
  register: (req: Request, res: Response) => {
    EmployeeDao.create(req.body)
      .then((employe: employeeTypes) => res.status(200).send(employe))
      .catch((err: string) => res.status(400).send(err));
  },
  get: (req: Request, res: Response) => {
    EmployeeDao.get(req.body.id as string)
      .then((employe: employeeTypes) => res.status(200).send(employe))
      .catch((err: string) => res.status(400).send(err));
  },
};
