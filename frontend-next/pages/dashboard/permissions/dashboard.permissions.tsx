import { faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DashboardContainer } from '../components/dashboard.container';
import { NewRole } from './components/dashboard.newrole';

export const DashboardPermissions = () => {
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faShield} />
        </div>
        <main>
          <span>Roles</span>
          <p>Lista de todos los roles disponibles.</p>
        </main>
      </header>
      <main className='dashboardContainers'>
        <DashboardContainer title='Lista de todos tus roles'>
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Registra un nuevo rol'>
          <NewRole />
        </DashboardContainer>
      </main>
    </div>
  );
};
