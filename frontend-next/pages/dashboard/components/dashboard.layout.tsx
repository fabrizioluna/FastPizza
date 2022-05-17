import { ReactNode } from 'react';
import { NavigationDashboard } from './navigation.dasboard';
import { Sidenav } from './sidenav.dashboard';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='dashboardLayout'>
      {/* <header> */}
        <Sidenav />
      {/* </header> */}
      <nav>
        <NavigationDashboard />
      </nav>
      <article>
          {children}
      </article>
    </div>
  );
};
