import { CustomForm } from '@/components/form/form.component';
import { PageHead } from '@/components/pageHead/pageHead.component';
import { useCallService } from '@/hooks/useCallService';
import { faClone, faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserAdapted } from 'pages/auth/singup/adapters/singup.adapter';
import { Order, orderAdapter } from 'pages/dashboard/adapters/order.adapter';
import { useState } from 'react';
import { getOrdersByUser } from '../service/profile.service';
import { CurrentOrders } from './currentOrders.profile';
import { HistoryOrders } from './historyOrders.profile';
import { Profile } from './profile.profile';

interface ShowComponent {
  profile: boolean;
  currentOrders: boolean;
  historyOrders: boolean;
}

export const ShowProfile = ({ user }: { user: UserAdapted }) => {
  const { call } = useCallService(getOrdersByUser, orderAdapter, user.id);
  const [showComponent, setShowComponent] = useState<ShowComponent>({
    profile: true,
    currentOrders: false,
    historyOrders: false,
  });
  return (
    <div className='profileClient'>
      <PageHead titlePage='Perfil de Usuario' />
      <header>
        <h2>Edita tu perfil</h2>
      </header>
      <article>
        <aside>
          <div>
            <li
              onClick={() =>
                setShowComponent({
                  profile: true,
                  currentOrders: false,
                  historyOrders: false,
                })
              }
            >
              <FontAwesomeIcon icon={faUser} /> Perfil
            </li>
            <li
              onClick={() =>
                setShowComponent({
                  profile: false,
                  currentOrders: true,
                  historyOrders: false,
                })
              }
            >
              <FontAwesomeIcon icon={faFile} /> Ordenes activas
            </li>
            <li
              onClick={() =>
                setShowComponent({
                  profile: false,
                  currentOrders: false,
                  historyOrders: true,
                })
              }
            >
              <FontAwesomeIcon icon={faClone} /> Historial de compras
            </li>
          </div>
        </aside>
        <section>
          {showComponent.profile && <Profile user={user} />}
          {showComponent.currentOrders && (
            <CurrentOrders
              orders={
                call !== null &&
                call.filter((order: Order) => order.status === false)
              }
            />
          )}
          {showComponent.historyOrders && (
            <HistoryOrders
              orders={
                call !== null &&
                call.filter((order: Order) => order.status === true)
              }
            />
          )}
        </section>
      </article>
    </div>
  );
};
