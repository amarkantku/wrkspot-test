import React from 'react';
import classNames from 'classnames/bind';
import styles from './Alert.css';
const clsx = classNames.bind(styles);

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type: AlertType;
  message: string;
  handleClose: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, handleClose }) => {
  return (
    <div className={clsx('alert', `alert-${type}`)}>
      {message}
      <span className='close-btn' onClick={handleClose}>
        &times;
      </span>
    </div>
  );
};

export default Alert;
