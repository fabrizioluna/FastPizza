import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DashboardContainer } from 'pages/dashboard/components/dashboard.container';

export const DashboardFinance = () => {
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <main>
          <span>Estadisticas globales</span>
          <p>Lista de todas tus estadisticas del sitio globales.</p>
        </main>
      </header>
      <main className='dashboardContainers'>
        <DashboardContainer title='Ganacias totales'>
        </DashboardContainer>
        <DashboardContainer title='Ganancias por mes'>
        </DashboardContainer>
      </main>
    </div>
  );
};
