import { createSlice } from '@reduxjs/toolkit';
import { Employee } from 'pages/dashboard/employees/adapters/employee.adapter';

export const initialState: Employee = {
  _id: '',
  lastname: '',
  joined: '',
  name: '',
  payment: 0,
  role: ''
};

export const dashboardSlice = createSlice({
  name: 'dashboardEmployee',
  initialState: initialState,
  reducers: {
    createDashboardUser: (state, action) => action.payload,
    modifyDashboardUser: (state, action) => ({ ...state, ...action.payload }),
    resetDashboardUser: () => initialState,
  },
});

export const { createDashboardUser, modifyDashboardUser, resetDashboardUser } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
