import { useDashboardLogin } from '@/hooks/useDashboardLogin';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';

export const Sidenav = () => {
  const [loading, employeeData, hasPayload] = useDashboardLogin();

  useEffect(() => {
    if (!loading && !hasPayload && !employeeData.status)
      Router.push('/dashboard/auth');
  }, [loading]);

  return (
    <div className='dashboardSidebar'>
      <figure>
        {employeeData.data.image === 'no-image' ? (
          <img
            src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/employees_assents/IMG-default_profile.jpg`}
            alt='imagenPruebaPerfil'
          />
        ) : (
          <img
            src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/employees_assents/${employeeData.data.image}`}
            alt='imagenPruebaPerfil'
          />
        )}
      </figure>
      <ul>
        {!loading && (
          <li> {`${employeeData.data.name} ${employeeData.data.lastname}`} </li>
        )}
        <Link href={'/dashboard/account'}>
          <li style={{ color: '#3fbb68', cursor: 'pointer' }}>Ver mi perfil</li>
        </Link>
      </ul>
    </div>
  );
};
