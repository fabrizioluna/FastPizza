import { createSlice } from '@reduxjs/toolkit';
import { UserAdapted } from 'pages/auth/singup/adapters/singup.adapter';

export const initialState: UserAdapted = {
  id: '',
  address: '',
  createdAt: new Date(),
  email: '',
  hasInitialDiscount: false,
  name: '',
  password: '',
  verifiedEmail: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    createUser: (state, action) => action.payload,
    modifyUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => initialState,
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
