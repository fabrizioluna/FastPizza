import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DashboardContainer } from "pages/dashboard/components/dashboard.container";

export const DashboardInvetory = () => {
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faWarehouse} />
        </div>
        <main>
          <span>Inventario general</span>
          <p>Lista de todos tus insumos.</p>
        </main>
      </header>
      <main className='dashboardContainers'>
        <DashboardContainer title='Insumos totales'>
        </DashboardContainer>
        <DashboardContainer title='Piezas por insumo'>
        </DashboardContainer>
      </main>
    </div>
  );
};
