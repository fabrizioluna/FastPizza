import { Fragment } from 'react';
import { DashboardContainer } from '../components/dashboard.container';
import { Employee } from '../employees/adapters/employee.adapter';
import { AccountForm } from './components/account.accountForm';

export const DashboardAccount = ({ employee }: { employee: Employee }) => {
  return (
    <Fragment>
      <main className='dashboardContainers'>
        <DashboardContainer title='Tu horario de la semana'>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1rem',
              paddingTop: '1rem',
            }}
          >
            {process.env.NEXT_PUBLIC_FEATURE_DEFAULT_MESSAGE}
          </p>
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Otro componente para rellenar'>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1rem',
              paddingTop: '1rem',
            }}
          >
            {process.env.NEXT_PUBLIC_FEATURE_DEFAULT_MESSAGE}
          </p>
        </DashboardContainer>
        <DashboardContainer title='Editar tu perfil'>
          <AccountForm employeePayload={employee} />
        </DashboardContainer>
      </main>
    </Fragment>
  );
};
