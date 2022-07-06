import { Fragment } from 'react';

interface Message {
  message: string;
  type: string;
}

export const CustomMessage = ({ message, type = 'INFO' }: Message) => {
  return (
    <Fragment>
      {type === 'INFO' ? (
        <div className='messageInfo'>
          <p>{message}</p>
        </div>
      ) : (
        <Fragment>
          {type === 'ERROR' ? (
            <div className='messageError'>
              <p>{message}</p>
            </div>
          ) : (
            <div className='messageWarning'>
              <p>{message}</p>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};
