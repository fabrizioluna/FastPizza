import { AppStore } from '@/redux/store';
import { authSessionCookieStorage } from '@/utils/sessionStorage/localSessionStorage';
import Router from 'next/router';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ButtonWrapper } from './resources/buttonWrapper';
import { NavigationWrapper } from './resources/navigationWrapper';

export const NavigationDashboard = () => {
  const employee: any = useSelector((store: AppStore) => store.employee);

  return (
    <div className='dashboardNav'>
      <h1>Dashboard FastPizza</h1>
      {NavigationWrapper.map((wrapper: any) => (
        <Fragment>
          {employee.role[wrapper.accessKey] === true && (
            <ButtonWrapper
              icon={wrapper.icon}
              path={wrapper.path}
              title={wrapper.title}
            />
          )}
        </Fragment>
      ))}
      <footer>
        {!!employee && (
          <p>
            {employee.name} {employee.lastname}
          </p>
        )}
        <p
          onClick={() => {
            authSessionCookieStorage()?.destroy();
            Router.push('/dashboard/auth');
          }}
        >
          Salir
        </p>
      </footer>
    </div>
  );
};