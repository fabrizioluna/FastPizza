import { ReactNode } from 'react';
import { NavigationDashboard } from './navigation.dasboard';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='dashboardLayout'>
      <nav>
        <NavigationDashboard />
      </nav>
      <article>
          {children}
      </article>
    </div>
  );
};
