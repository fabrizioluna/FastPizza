import { createDashboardUser } from '@/redux/states/dashboard';
import { AppStore } from '@/redux/store';
import { authSessionCookieStorage } from '@/utils/sessionStorage/localSessionStorage';
import Router, { useRouter } from 'next/router';
import { refreshTokenEmployee } from 'pages/dashboard/auth/service/dashboardAuth.service';
import { employeeWithTokenAdapter } from 'pages/dashboard/employees/adapters/employee.adapter';
import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Data {
  status: boolean;
  msg: string;
  data: any;
}

const Guards = [
  {
    path: '/dashboard/delivery',
    param: 'permissionsDelivery',
  },
  {
    path: '/dashboard/orders',
    param: 'permissionsOrders',
  },
  {
    path: '/dashboard/finance',
    param: 'permissionsFinance',
  },
  {
    path: '/dashboard/employees',
    param: 'permissionsEmployees',
  },
  {
    path: '/dashboard/discounts',
    param: 'permissionsDiscounts',
  },
  {
    path: '/dashboard/products',
    param: 'permissionsProducts',
  },
  {
    path: '/dashboard/products/',
    param: 'permissionsProducts',
  },
  {
    path: '/dashboard/logs',
    param: 'permissionsLogs',
  },
  {
    path: '/dashboard/permissions',
    param: 'permissionsRoles',
  },
  {
    path: '/dashboard/stadistics',
    param: 'permissionsStatustics',
  },
  {
    path: '/dashboard/inventory',
    param: 'permissionsInventory',
  },
];

export const DashboardPrivateRoute = ({
  premissionGuard,
  children,
}: {
  premissionGuard?: any;
  children: ReactNode;
}) => {
  const employee = useSelector((store: AppStore) => store.employee);
  const { asPath } = useRouter();
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

      // We comprobate is this user have access to the resource
      Guards.map((guard) => {
        if (guard.path === asPath.toString()) {
          for (const [key, value] of Object.entries(adaptedEmployee.role))
            if (key.toString() == guard.param && value === false)
              Router.push('/dashboard/no-access'); // If not have access...
        }
      }); // Just continue
    };

    if (cookie?.status) getDataEmployee();
    if (!cookie?.status) {
      setHasPayload(false);
      setEmployeeData({
        status: false,
        msg: 'No se encontro ningún token de acceso.',
        data: employee,
      });
      Router.push('/dashboard/auth');
    }

    setLoading(false);
  }, []);

  return <>{children}</>;
};
