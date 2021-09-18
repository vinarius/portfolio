import '../styles/globals.css';

import React, { ReactElement } from 'react';

import Navbar from '../components/navbar';
import Overlay from '../components/overlay';
import { MyProvider } from '../context/stateProvider';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <MyProvider>
    <Navbar />
    <Overlay />
    {/* Space between fixed navbar to account for fixed positioning */}
    <div className="h-16" />
    <Component {...pageProps} />;
  </MyProvider>;
}
export default MyApp;
