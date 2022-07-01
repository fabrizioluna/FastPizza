import {
  faBurger,
  faCheckDouble,
  faLocationPin,
  faPersonRunning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

export const ProgressStatusOrder = ({
  porcentage = 0,
}: {
  porcentage: number;
}) => {
  const styles: any = {
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
    legend: {
      witdh: '20%',
      padding: '0rem',
      fontSize: '1.5rem',
      height: '5rem',
      color: '#3e3e3e',
    },
    order_Content: {
      position: 'absolute',
      marginTop: '-0.7rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    circleSended: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      background: '#bfd6ff',
      textAlign: 'center',
    },
    circleTaken: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      background: '#bfd6ff',
      textAlign: 'center',
    },
    circleCooking: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      background: '#bfd6ff',
      textAlign: 'center',
    },
    circleCooked: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      background: '#bfd6ff',
      textAlign: 'center',
    },
    circlePedingDelivery: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      background: '#bfd6ff',
      textAlign: 'center',
    },
    circleDelivery: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      background: '#bfd6ff',
      textAlign: 'center',
    },
    circleComplete: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      background: '#bfd6ff',
      textAlign: 'center',
    },
  };

  return (
    <Fragment>
      <div>
        <div className='order__Countdown-Container'>
          <div style={styles.order__Progress}>
            <div style={styles.order__Bar}>
              <div style={styles.order_Content}>
                <div>
                  <div style={styles.circleSended}>
                    <p style={styles.legend}>
                      <FontAwesomeIcon icon={faLocationPin} />
                    </p>
                  </div>
                </div>
                <div>
                  <div style={styles.circleCooking}>
                    <p style={styles.legend}>
                      <FontAwesomeIcon icon={faBurger} />
                    </p>
                  </div>
                </div>
                <div>
                  <div style={styles.circleDelivery}>
                    <p style={styles.legend}>
                      <FontAwesomeIcon icon={faPersonRunning} />
                    </p>
                  </div>
                </div>
                <div>
                  <div style={styles.circleComplete}>
                    <p style={styles.legend}>
                      <FontAwesomeIcon icon={faCheckDouble} />
                    </p>
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
