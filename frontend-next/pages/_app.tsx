import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import store from 'redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
