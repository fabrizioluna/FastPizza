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
          src='https://media.v2.siweb.es/uploaded_thumb_medium/75ced0231b30d5bbba39592fef39e64d/retratos_profesionales_corporativos_madrid_fotografo_089.jpg'
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
