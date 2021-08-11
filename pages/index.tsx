import React, { ReactElement } from 'react';

import Navbar from '../components/navbar';
import Overlay from '../components/overlay';

export default function Home(): ReactElement {
  return (
    <>
      <Navbar />
      <Overlay />
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <p>my first paragraph</p>
        <p>my second paragraph</p>
      </div>
    </>
  );
}
