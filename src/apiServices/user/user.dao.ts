import { User } from './user.model';
import { checkUserTypes, responseCreate, userTypes } from './user.types';

export const userDao = {
  find: (id: string) =>
    User.findById(id)
      .then((payload: userTypes) => {
        return { payload: payload, response: true };
      })
      .catch(() => {
        return { response: false };
      }),

  //   Create new user
  createUser: (props: userTypes) =>
    new Promise<responseCreate>(async (resolve, reject) => {
      const user = new User(props);
      user.user_createdAt = new Date();
      return await user
        .save()
        .then((user: userTypes) =>
          resolve({ message: 'El usuario fue creado correctamente.', user })
        )
        .catch(({ keyValue }: any) =>
          reject({
            message: 'Error: Estos campos ya se encuentran en uso.',
            keyValue,
          })
        );
    }),

  //   Get a specific user in the database.
  getUser: (id: string) =>
    new Promise<{ user: userTypes }>(async (resolve, reject) => {
      const checkUser: checkUserTypes = await userDao.find(id);
      return checkUser.response
        ? resolve({ user: checkUser.payload })
        : reject({ message: 'No se encontro ningún usuario con ese id.' });
    }),
};
