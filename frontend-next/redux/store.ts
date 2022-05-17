import { configureStore } from '@reduxjs/toolkit';
import { UserAdapted } from 'pages/auth/singup/adapters/singup.adapter';
import user from './states/user';

export interface AppStore {
  user: UserAdapted;
}

export default configureStore<AppStore>({
  reducer: {
    user: user,
  },
});
