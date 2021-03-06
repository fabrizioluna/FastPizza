import { PageHead } from '@/components/pageHead/pageHead.component';
import { useCallService } from '@/hooks/useCallService';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { DashboardContainer } from '../components/dashboard.container';
import { rolesAdapter } from './adapters/permissions.adapter';
import { NewRole } from './components/dashboard.newrole';
import { RolesList } from './components/dashboard.roleslist';
import { getAllRoles } from './service/permissions.service';
import { Roles } from './types/roles.types';

export const DashboardPermissions = () => {
  const { call }: any = useCallService(getAllRoles, rolesAdapter);
  const [rolesList, setRolesList] = useState<Roles[]>([]);

  useEffect(() => {
    call !== null && setRolesList(call);
  }, [call]);

  return (
    <div>
      <PageHead titlePage='Panel de Empleado: Privilegios' />
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
          {call !== null && rolesList.length > 0 && (
            <RolesList currentList={rolesList} />
          )}
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Registra un nuevo rol'>
          <NewRole
            currentRolesList={rolesList}
            setNewRolesList={setRolesList}
          />
        </DashboardContainer>
      </main>
    </div>
  );
};
