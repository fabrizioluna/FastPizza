import { cartDao } from '../cart/cart.dao';
import { User } from './user.model';
import { checkUserTypes, responseCreate, userTypes } from './user.types';
import { createVerificationCode } from './user.utils';
const bcrypt = require('bcryptjs/dist/bcrypt');

export const userDao = {
  find: (param: any) =>
    User.findOne(param)
      .populate('user_cart')
      .then((payload: userTypes) => {
        return { payload: payload, response: payload !== null ? true : false };
      })
      .catch(() => {
        return { response: false };
      }),

  //   Create new user
  createUser: (props: userTypes) =>
    new Promise<responseCreate>(async (resolve, reject) => {
      const user = new User(props);
      user.user_createdAt = new Date();
      // user.user_role = 'Client';
      user.user_verifiedEmail = createVerificationCode;
      user.user_password = bcrypt.hashSync(
        props.user_password,
        bcrypt.genSaltSync()
      );

      // Si dentro de las props viene un atributo 'user_cart'... ejecuta esto.
      if (props.hasOwnProperty('user_cart'))
        user.user_cart = await cartDao.create(user._id, props.user_cart);

      return await user
        .save()
        .then((user: userTypes) =>
          resolve({ message: 'El usuario fue creado correctamente.', user })
        )
        .catch((err: any) =>
          reject({
            message: 'Error: Estos campos ya se encuentran en uso.',
            err,
          })
        );
    }),

  loginUser: (name: string, password: string) => {
    return new Promise<userTypes>(async (resolve, reject) => {
      const { payload, response } = await userDao.find({ user_name: name });
      if (!response)
        return reject({ message: 'Este usuario no existe en la db.' });
      const passwordIsValid = bcrypt.compareSync(
        password,
        payload.user_password
      );

      if (!passwordIsValid)
        return reject({ message: 'Credenciales no validas.' });
      return resolve(payload);
    });
  },

  //   Get a specific user in the database.
  getUser: (id: string) =>
    new Promise<{ user: userTypes }>(async (resolve, reject) => {
      const checkUser: checkUserTypes = await userDao.find({ _id: id });
      return checkUser.response
        ? resolve({ user: checkUser.payload })
        : reject({ message: 'No se encontro ningún usuario con ese id.' });
    }),
};
