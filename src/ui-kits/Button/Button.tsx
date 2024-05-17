import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.css';
const clsx = classNames.bind(styles);

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
  className,
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx('button', className, { disabled })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
