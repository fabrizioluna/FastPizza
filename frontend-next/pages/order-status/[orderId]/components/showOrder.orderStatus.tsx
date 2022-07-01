import { useSimpleCallService } from '@/hooks/useCallService';
import { orderAdapter } from 'pages/dashboard/adapters/order.adapter';
import { Fragment } from 'react';
import { getOrder } from '../service/orderStatus.service';
import { OrderDetailClient } from './orderDetail.orderStatus';
import { OrderErrorClient } from './orderError.orderStatus';

export const ShowOrderClient = ({ orderId }: { orderId: any }) => {
  const { call } = useSimpleCallService(getOrder, orderAdapter, orderId);
  console.log(call);
  return (
    <Fragment>
      {call !== null && (
        <>
          {call === 'ERR_BAD_RESPONSE' ? (
            <OrderErrorClient />
          ) : (
            <OrderDetailClient orderObject={call} />
          )}
        </>
      )}
    </Fragment>
  );
};
