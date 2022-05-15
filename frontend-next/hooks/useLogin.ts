import { createUser } from '@/redux/states/user';
import { AppStore } from '@/redux/store';
import { authCookieStorage } from '@/utils/localStorage/localStorageHandler';
import { getUser } from 'pages/auth/singin/services/singin.service';
import {
  User,
  UserAdapted,
  UserAdapter,
} from 'pages/auth/singup/adapters/singup.adapter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Data {
  status: boolean;
  msg: string;
  data: UserAdapted;
}

export const useLogin = () => {
  const user = useSelector((store: AppStore) => store.user);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<Data>({
    status: true,
    msg: '',
    data: user,
  });

  if (user.hasOwnProperty('data')) {
    setUserData({ status: true, data: user, msg: 'User authenticate' });
    setLoading(false);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const cookie = authCookieStorage()?.get();

    const getDataUser = async () => {
      const User = await getUser(cookie?.data.id);
      const adaptedUser = UserAdapter(User.data, cookie?.data.jwt);
      dispatch(createUser(adaptedUser));
      setUserData({
        status: true,
        data: adaptedUser,
        msg: 'User authenticate',
      });
    };

    if (cookie?.status) getDataUser();
    if (!cookie?.status)
      setUserData({
        status: false,
        msg: 'No se encontro ningún token de acceso.',
        data: user,
      });

    setLoading(false);
  }, []);

  return [loading, userData] as const;
};
