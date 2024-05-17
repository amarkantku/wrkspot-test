import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loader.css';
const clsx = classNames.bind(styles);

const Loader: React.FC = () => {
  return (
    <div className={clsx('loader-container')}>
      <div className={clsx('loader')}></div>
    </div>
  );
};

export default React.memo(Loader);
