import { useCallService } from '@/hooks/useCallService';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { DashboardContainer } from '../components/dashboard.container';
import { discountAdapter } from './adapters/discount.adapter';
import { RegisterDiscount } from './components/discount.create';
import { ListDiscounts } from './components/discount.list';
import { getDiscounts } from './services/discount.service';
import { Discount } from './types/discounts.types';

export const DashboardDiscounts = () => {
  const { call } = useCallService(getDiscounts, discountAdapter);
  const [discountList, setDiscountList] = useState<Discount[]>([]);

  useEffect(() => {
    call !== null && setDiscountList(call);
  }, [call]);

  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faTags} />
        </div>
        <main>
          <span>Descuentos generales</span>
          <p>Lista de todos tus descuentos disponibles.</p>
        </main>
      </header>
      <main className='dashboardContainers'>
        <DashboardContainer title='Lista de todos tus descuentos'>
          {call !== null && discountList.length > 0 && (
            <ListDiscounts discounts={discountList as any} />
          )}
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Registra un nuevo descuento global'>
          <RegisterDiscount
            currentListDiscounts={discountList}
            setListDiscounts={setDiscountList}
          />
        </DashboardContainer>
        <DashboardContainer title='Registros'>
          Info para rellenar
        </DashboardContainer>
      </main>
    </div>
  );
};
