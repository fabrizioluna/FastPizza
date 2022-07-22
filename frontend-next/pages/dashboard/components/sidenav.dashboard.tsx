import { useDashboardLogin } from '@/hooks/useDashboardLogin';
import { AppStore } from '@/redux/store';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Sidenav = () => {
  const employee = useSelector((store: AppStore) => store.employee);

  return (
    <div className='dashboardSidebar'>
      <figure>
        {employee._id.length >= 1 && employee.image === 'no-image' ? (
          <img
            src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/employees_assents/IMG-default_profile.jpg`}
            alt='IMG-default_profile.jpg'
          />
        ) : (
          <img
            src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/employees_assents/${employee.image}`}
            alt={employee.image}
          />
        )}
      </figure>
      <ul>
        {employee._id.length >= 1 && (
          <li> {`${employee.name} ${employee.lastname}`} </li>
        )}
        <Link href={'/dashboard/account'}>
          <li style={{ color: '#3fbb68', cursor: 'pointer' }}>Ver mi perfil</li>
        </Link>
      </ul>
    </div>
  );
};
