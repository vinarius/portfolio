import React from 'react';

import styles from './firstblog.module.css';

const FirstBlog = () => {
  return (
    <>
      <p className={styles['my-test-class']}>My first blog page component is working!</p>
    </>
  );
};

export default FirstBlog;