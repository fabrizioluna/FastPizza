import { PageHead } from '@/components/pageHead/pageHead.component';
import { DashboardPrivateRoute } from '@/config/dashboard.private.routes';
import { AppStore } from '@/redux/store';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { DashboardLayout } from '../components/dashboard.layout';
import { DashboardAccount } from './dashboard.account';

const Account = () => {
  const employee = useSelector((store: AppStore) => store.employee);
  return (
    <DashboardLayout>
      {employee._id.length >= 1 && (
        <Fragment>
          <PageHead
            titlePage={`Perfil de ${employee.name} ${employee.lastname}`}
          />
          <header className='dashboardHeader'>
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <main>
              <span>{`Perfil de ${employee.name} ${employee.lastname}`}</span>
              <p>Revisa tu horario o edita tu perfil de empleado.</p>
            </main>
          </header>
        </Fragment>
      )}
      {employee._id.length >= 1 && <DashboardAccount employee={employee} />}
    </DashboardLayout>
  );
};

// Dashboard Private Page and Rol Guard
Account.AuthDashboard = DashboardPrivateRoute;

export default Account;
