import { ReactNode } from 'react';

export const DashboardContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
