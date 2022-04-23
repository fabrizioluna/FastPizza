import { Fragment, ReactNode } from 'react';
import { Navigation } from '../../pages/home/components/layout/navigation';


export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
          {children}
      </main>
      <footer></footer>
    </Fragment>
  );
};
