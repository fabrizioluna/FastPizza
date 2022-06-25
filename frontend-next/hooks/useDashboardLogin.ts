import { createDashboardUser } from '@/redux/states/dashboard';
import { AppStore } from '@/redux/store';
import { authSessionCookieStorage } from '@/utils/sessionStorage/localSessionStorage';
import { refreshTokenEmployee } from 'pages/dashboard/auth/service/dashboardAuth.service';
import { employeeWithTokenAdapter } from 'pages/dashboard/employees/adapters/employee.adapter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Data {
  status: boolean;
  msg: string;
  data: any;
}

export const useDashboardLogin = () => {
  const employee = useSelector((store: AppStore) => store.employee);
  const [loading, setLoading] = useState(true);
  const [hasPayload, setHasPayload] = useState(false);
  const [employeeData, setEmployeeData] = useState<Data>({
    status: true,
    msg: '',
    data: employee,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const cookie = authSessionCookieStorage()?.get();

    const getDataEmployee = async () => {
      const nextEmployee = await refreshTokenEmployee(cookie?.data.jwt);
      const adaptedEmployee = employeeWithTokenAdapter(
        nextEmployee.data.employee,
        nextEmployee.data.token
      );
      dispatch(createDashboardUser(adaptedEmployee));
      setHasPayload(true);
      setEmployeeData({
        status: true,
        data: adaptedEmployee,
        msg: 'Employee authenticate',
      });
    };

    if (cookie?.status) getDataEmployee();
    if (!cookie?.status) {
      setHasPayload(false);
      setEmployeeData({
        status: false,
        msg: 'No se encontro ningún token de acceso.',
        data: employee,
      });
    }

    setLoading(false);
  }, []);

  return [loading, employeeData, hasPayload] as const;
};
