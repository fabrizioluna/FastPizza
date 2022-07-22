import { createSlice } from '@reduxjs/toolkit';
import { Employee } from 'pages/dashboard/employees/types/employee.types';

export const initialState: Employee = {
  _id: '',
  lastname: '',
  joined: '',
  name: '',
  payment: 0,
  image: '',
  role: {
    _id: '',
    name: '',
    permissionsOrders: false,
    permissionsDelivery: false,
    permissionsEmployees: false,
    permissionsInventory: false,
    permissionsFinance: false,
    permissionsStatustics: false,
    permissionsProducts: false,
    permissionsDiscounts: false,
    permissionsLogs: false,
    permissionsRoles: false,
  }
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
