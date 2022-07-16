import { PageHead } from '@/components/pageHead/pageHead.component';
import { AppStore } from '@/redux/store';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { DashboardContainer } from '../components/dashboard.container';
import { DashboardLayout } from '../components/dashboard.layout';
import { AccountForm } from './components/account.accountForm';
import { DashboardAccount } from './dashboard.account';

const Account = () => {
  const employee = useSelector((store: AppStore) => store.employee);
  return (
    <DashboardLayout>
      <PageHead titlePage={`Perfil de ${employee.name} ${employee.lastname}`} />
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <main>
          <span>{`Perfil de ${employee.name} ${employee.lastname}`}</span>
          <p>Revisa tu horario o edita tu perfil de empleado.</p>
        </main>
      </header>
      {employee._id.length >= 1 && <DashboardAccount employee={employee} />}
    </DashboardLayout>
  );
};

export default Account;
