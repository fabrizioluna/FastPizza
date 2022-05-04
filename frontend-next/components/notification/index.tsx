import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

export const Notification = ({ children }: { children: ReactNode }) => {
  return (
    <main className='notification'>
      <div>
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      {children}
    </main>
  );
};
