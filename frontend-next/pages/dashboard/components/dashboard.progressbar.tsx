import { useEffect, useState } from 'react';

export const ProgressBar = ({ time = 60 }) => {
  let [progress, setProgress] = useState<number>(1);

  useEffect(() => {
    setInterval(() => {
      if (progress == time) {
        clearInterval();
      } else {
        setProgress(progress++);
        //   numb.textContent = counter + "%";
      }
    }, 80);
  }, []);
  return (
    <div className='circular'>
      <div className='inner'></div>
      <div className='number'>{progress}%</div>
      <div className='circle'>
        <div className='bar left'>
          <div className='progress'></div>
        </div>
        <div className='bar right'>
          <div className='progress'></div>
        </div>
      </div>
    </div>
  );
};
