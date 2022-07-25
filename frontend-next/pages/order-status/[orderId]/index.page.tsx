import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
import { ShowOrderClient } from './components/showOrder.orderStatus';

const ShowStatusOrder = () => {
  const { query } = useRouter();
  return (
    <Layout>
      {query.hasOwnProperty('orderId') ? (
        <ShowOrderClient orderId={query.orderId} />
      ) : (
        <p>Cargando...</p>
      )}
    </Layout>
  );
};

export default ShowStatusOrder;
