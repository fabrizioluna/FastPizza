import { CustomForm } from '@/components/form/form.component';
import { Modal } from '@/components/portals/modal.portal';
import { Order } from 'pages/dashboard/adapters/order.adapter';
import { useEffect, useRef, useState } from 'react';
import { initialPropsOrder } from './delivery.stage2';

export const ModalDelivery = ({
  orderSelect,
  setOrderSelect,
  sendDeliverys,
}: {
  orderSelect: Order;
  setOrderSelect: (arg: any) => void;
  sendDeliverys: (client: string, status: boolean, statusOrder: boolean) => any;
}) => {
  const [enableButton, setEnableButton] = useState<boolean>(true)
  const [changeMethodPay, setChangeMethodPay] = useState<boolean>(true);
  const [values, setValues] = useState<{
    number_enter: number;
    order_methodPay: any;
  }>({ number_enter: 0, order_methodPay: 1 });
  const [turned, setTurned] = useState<any>(0);
  const formFieldsRef = useRef<any>([])

  useEffect(() => {
    if (parseInt(values.order_methodPay) != 1) {
      return setChangeMethodPay(false);
    }
    setChangeMethodPay(true);
  }, [values]);

  const payEnterHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    values.number_enter > 0 &&
      setTurned(values.number_enter - orderSelect.totalAmount);
      setEnableButton(false); // Enable the button
  };

  return (
    <Modal>
      <div className='modalDashboard'>
        <section>
          <header>
            <h1>Terminar entrega</h1>
            {/* We use them to restart the modal and for that they'll closed */}
            <h2 onClick={() => setOrderSelect(initialPropsOrder)}>Cerrar</h2>
          </header>
          <article>
            <div className='modalLegendContainer'>
              <div className='modalLegend'>
                <h5>Folio</h5>
                <p>{orderSelect.envoice}</p>
              </div>
              <div className='modalLegend'>
                <h5>Entregar para</h5>
                <p>{orderSelect.buyer}</p>
              </div>
              <div className='modalLegend'>
                <h5>Instrucciones de entrega</h5>
                <p>{orderSelect.addressClient}</p>
              </div>
            </div>
            <div
              className='dashboardDeliveryForm'
              style={{ width: '100% !important' }}
            >
              {changeMethodPay && (
                <div
                  style={{
                    display: 'flex',
                    padding: '2.5rem',
                    textAlign: 'center',
                  }}
                >
                  <div>
                    <p>Total a cobrar</p>
                    <h4>${orderSelect.totalAmount}</h4>
                  </div>
                  <div>
                    <p>Cambio</p>
                    <h4>${turned < -1 ? 0 : turned}</h4>
                  </div>
                </div>
              )}
              <CustomForm
                setValueInputs={setValues}
                values={values}
                formFieldsRef={formFieldsRef}
                isEditingForm={false}
                formStyles={{}}
                inputsVisibility={changeMethodPay}
                inputs={[
                  {
                    name: 'number_enter',
                    type: 'number',
                    placeholder: 'Ingresa la cantidad',
                  },
                ]}
                selects={[
                  {
                    label: 'Cambiar método de pago',
                    name: 'order_methodPay',
                    selectStyles: { width: '100%' },
                    values: [
                      { text: 'Efectivo', value: 1 },
                      { text: 'Tarjeta de débito', value: 2 },
                      { text: 'Tarjeta de Credito', value: 3 },
                    ],
                  },
                ]}
                submitCallback={payEnterHandler}
                buttonMessage={'Ingresar pago'}
              />
              <div>
                <button
                  className='buttonFInishDelivery'
                  disabled={enableButton}
                  onClick={() => sendDeliverys(orderSelect._id, true, true)}
                >
                  Terminar entrega
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
    </Modal>
  );
};
