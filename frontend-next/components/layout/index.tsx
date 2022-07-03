import { Footer } from 'pages/home/components/layout/footer';
import { Fragment, ReactNode } from 'react';
import { Navigation } from '../../pages/home/components/layout/navigation';


export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <header style={{backgroundColor: '#14141c'}}>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main style={{backgroundColor: '#14141c'}}>
          {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};
