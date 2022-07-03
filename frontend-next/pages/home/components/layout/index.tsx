import { Fragment, ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Navigation } from './navigation';

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <header style={{ backgroundColor: '#14141c' }}>
        <nav>
          <Navigation />
        </nav>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};
