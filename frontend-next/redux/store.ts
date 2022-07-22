import { configureStore } from '@reduxjs/toolkit';
import { UserAdapted } from 'pages/auth/singup/adapters/singup.adapter';
import { Employee } from 'pages/dashboard/employees/types/employee.types';
import dashboard from './states/dashboard';
import user from './states/user';

export interface AppStore {
  user: UserAdapted;
  employee: Employee
}

export default configureStore<AppStore>({
  reducer: {
    user: user,
    employee: dashboard,
  },
});
