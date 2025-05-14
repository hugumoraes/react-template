import React from 'react';

import styles from './styles.module.scss';

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>Hello world</div>
    </div>
  );
};
