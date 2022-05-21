import { ReactNode } from 'react';

export const DashboardContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className='dashboardContainer'>
      <header>
        <h2>{title}</h2>
      </header>
      <article>{children}</article>
    </div>
  );
};
