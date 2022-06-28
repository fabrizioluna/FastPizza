import { useCallService } from '@/hooks/useCallService';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DashboardContainer } from 'pages/dashboard/components/dashboard.container';
import { useEffect, useState } from 'react';
import { Inventory, inventoryAdapter } from '../adapters/inventory.adapter';
import { getInventory } from '../service/inventory.service';
import { InventoryList } from './inventory.list';
import { LowList } from './inventory.low';
import { NewInventory } from './inventory.new';

export const DashboardInvetory = () => {
  const { call }: any = useCallService(getInventory, inventoryAdapter);
  const [inventoryList, setInventoryList] = useState<Inventory[]>([]);

  useEffect(() => {
    call !== null && setInventoryList(call);
  }, [call]);

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
        <DashboardContainer title='Lista de insumos'>
          <InventoryList inventoryList={inventoryList} />
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Agregar insumo'>
          {inventoryList.length >= 1 && <NewInventory currentList={inventoryList} setNewList={setInventoryList} />}
        </DashboardContainer>
        <DashboardContainer title='Insumos agotados'>
          {inventoryList.length >= 1 && <LowList inventoryList={inventoryList} />}
        </DashboardContainer>
      </main>
    </div>
  );
};
