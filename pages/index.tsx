import React, { ReactElement } from 'react';

import Navbar from '../components/navbar';
import Overlay from '../components/overlay';
import {MyProvider} from '../context/stateProvider';

export default function Home(): ReactElement {
  return (
    <MyProvider>
      <Navbar />
      <Overlay />
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <p>my first paragraph</p>
        <p>my second paragraph</p>
      </div>
    </MyProvider>
  );
}
