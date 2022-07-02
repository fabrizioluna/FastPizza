import { Notification } from '@/components/notification';
import {
  faBurger,
  faCheckDouble,
  faLocationPin,
  faPersonRunning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useMemo, useState } from 'react';

interface HoverHandler {
  delivery: boolean;
  kitchen: boolean;
  send: boolean;
  complete: boolean;
}

export const ProgressStatusOrder = ({
  porcentage = 0,
}: {
  porcentage: number;
}) => {
  const [showHover, setShowHover] = useState<HoverHandler>({
    delivery: false,
    kitchen: false,
    send: false,
    complete: false,
  });

  const styles: any = useMemo(() => {
    return {
      order__Progress: {
        position: 'relative',
        borderRadius: '60px',
        width: '100%',
        height: '1rem',
        backgroundColor: '#272737',
      },
      order__Bar: {
        borderRadius: '20px',
        width: `${porcentage}%`,
        height: '1rem',
        backgroundColor: '#468aff',
      },
    }
  }, [porcentage])

  const showHoverHandler = (process: number, value: boolean) => {
    if (process === 1) return setShowHover({ ...showHover, delivery: value });
    else if (process === 2) return setShowHover({ ...showHover, kitchen: value });
    else if (process === 3) return setShowHover({ ...showHover, send: value });
    else if (process === 4) return setShowHover({ ...showHover, complete: value });
  };

  return (
    <Fragment>
      <div>
        <div className='order__Countdown-Container'>
          <div style={styles.order__Progress}>
            <div style={styles.order__Bar}>
              <div className='order_Content'>
                <div>
                  <div
                    onMouseOver={() => showHoverHandler(3, true)}
                    onMouseLeave={() => showHoverHandler(3, false)}
                    className='circleSended'
                  >
                    <p className='legend'>
                      <FontAwesomeIcon icon={faLocationPin} />
                    </p>
                    {showHover.send && (
                      <div className='hoverInfo'>
                        <h2>Estado: Recibida</h2>
                        <p>Tu orden ha sido entregada.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div
                    onMouseOver={() => showHoverHandler(2, true)}
                    onMouseLeave={() => showHoverHandler(2, false)}
                    className='circleCooking'
                  >
                    <p className='legend'>
                      <FontAwesomeIcon icon={faBurger} />
                    </p>
                    {showHover.kitchen && (
                      <div className='hoverInfo'>
                        <h2>Estado: Cocinando</h2>
                        <p>Tu orden esta siendo preparada.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div
                    onMouseOver={() => showHoverHandler(1, true)}
                    onMouseLeave={() => showHoverHandler(1, false)}
                    className='circleDelivery'
                  >
                    <p className='legend'>
                      <FontAwesomeIcon icon={faPersonRunning} />
                    </p>
                    {showHover.delivery && (
                      <div className='hoverInfo'>
                        <h2>Estado: Entregando</h2>
                        <p>Tu orden está en camino.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div
                    onMouseOver={() => showHoverHandler(4, true)}
                    onMouseLeave={() => showHoverHandler(4, false)}
                    className='circleComplete'
                  >
                    <p className='legend'>
                      <FontAwesomeIcon icon={faCheckDouble} />
                    </p>
                    {showHover.complete && (
                      <div className='hoverInfo'>
                        <h2>Estado: Entregado</h2>
                        <p>Tu orden ha sido entregada.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
