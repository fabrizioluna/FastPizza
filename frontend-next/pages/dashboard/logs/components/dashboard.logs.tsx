import { useCallService } from '@/hooks/useCallService';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logsAdapter } from '../adapters/logs.adapter';
import { getAllLogs } from '../service/logs.service';
import { LogsList } from './logs.list';

export const DashboardLogs = () => {
  const { call } = useCallService(getAllLogs, logsAdapter);
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faCopy} />
        </div>
        <main>
          <span>Registros generales</span>
          <p>Lista de todos los registros de la aplicación.</p>
        </main>
      </header>
      <main className='dashboardFinance'>
        <section style={{'width': '100%'}}>
          <h2>Registros</h2>
        {!!call && <LogsList logs={call} />}
        </section>
      </main>
    </div>
  );
};
