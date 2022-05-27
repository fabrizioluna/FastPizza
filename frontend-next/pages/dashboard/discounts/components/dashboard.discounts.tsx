import { useCallService } from '@/hooks/useCallService';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Discount, discountAdapter } from '../adapters/discount.adapter';
import { getDiscounts } from '../services/discount.service';
import { RegisterDiscount } from './discount.create';
import { ListDiscounts } from './discount.list';

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
      <main className='dashboardFinance'>
        <section>
          <h2>Registra un nuevo cupón</h2>
          <RegisterDiscount
            currentListDiscounts={discountList}
            setListDiscounts={setDiscountList}
          />
        </section>
        <section>
          <h2></h2>
        </section>
        <aside>
          <h2></h2>
        </aside>
      </main>
      <div className='dashboardFinance'>
        <article>
          <aside>
            <h2></h2>
          </aside>
          <section>
            <h2>Lista de Descuentos</h2>
            {call !== null && discountList.length > 0 && (
              <ListDiscounts discounts={discountList as any} />
            )}
          </section>
        </article>
      </div>
    </div>
  );
};
