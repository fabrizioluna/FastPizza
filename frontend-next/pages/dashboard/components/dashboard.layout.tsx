import { ReactNode } from 'react';
import { NavigationDashboard } from './navigation.dasboard';
import { Sidenav } from './sidenav.dashboard';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='dashboardLayout'>
        <Sidenav />
      <nav>
        <NavigationDashboard />
      </nav>
      <article>
          {children}
      </article>
    </div>
  );
};
