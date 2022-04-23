import { Fragment, ReactNode } from 'react';
import { Header } from './header';
import { Navigation } from './navigation';

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <header>
        <nav>
          <Navigation />
        </nav>
        <Header />
      </header>
      <main>
          {children}
      </main>
      <footer></footer>
    </Fragment>
  );
};
