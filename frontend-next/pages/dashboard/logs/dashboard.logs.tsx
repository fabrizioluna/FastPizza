import { useCallService } from "@/hooks/useCallService";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DashboardContainer } from "../components/dashboard.container";
import { logsAdapter } from "./adapters/logs.adapter";
import { LogsList } from "./components/logs.list";
import { getAllLogs } from "./service/logs.service";


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
      <main className='dashboardContainers'>
        <DashboardContainer title='Registros'>
          {!!call && <LogsList logs={call} />}
        </DashboardContainer>
      </main>
    </div>
  );
};
