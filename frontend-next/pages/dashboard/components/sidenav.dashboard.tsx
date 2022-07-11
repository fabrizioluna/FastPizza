import { useDashboardLogin } from '@/hooks/useDashboardLogin';
import Router from 'next/router';
import { useEffect } from 'react';

export const Sidenav = () => {
  const [loading, employeeData, hasPayload] = useDashboardLogin();

  useEffect(() => {
    if (!loading && !hasPayload && !employeeData.status) Router.push('/dashboard/auth');
  }, [loading]);

  return (
    <div className='dashboardSidebar'>
      <figure>
        <img
          src='https://images.assetsdelivery.com/compings_v2/linelly/linelly1803/linelly180300024.jpg'
          alt='imagenPruebaPerfil'
        />
      </figure>
      <ul>
        {!loading && (
          <li> {`${employeeData.data.name} ${employeeData.data.lastname}`} </li>
        )}
        <li>Programador FrontEnd</li>
      </ul>
    </div>
  );
};
