import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import store from 'redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { ComponentType, Fragment, ReactNode } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

const Noop = ({ children }: { children: ReactNode }) => <>{children}</>;

export type Page<P = {}> = NextPage<P> & {
  AuthDashboard?: ComponentType;
};

type Props = AppProps & {
  Component: Page;
};
const MyApp = ({ Component, pageProps }: Props) => {
  // This is part of the Authentication in the Dashboard
  const AuthDashboard = Component.AuthDashboard || Noop;

  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Provider store={store}>
        <AuthDashboard>
          <Component {...pageProps} />
        </AuthDashboard>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
