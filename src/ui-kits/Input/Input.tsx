import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.css';
const clsx = classNames.bind(styles);

interface InputProps {
  type: string;
  value: string;
  placeholder?: string;
  label?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  name,
  required = false,
  disabled = false
}) => {
  return (
    <div className={clsx('input-container')}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        name={name}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default React.memo(Input);
