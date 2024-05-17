import React from 'react';
import classNames from 'classnames/bind';
import styles from './Select.css';
const clsx = classNames.bind(styles);

interface Option {
  value: number;
  label: string;
}

interface SelectProps {
  name: string;
  options: Option[];
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ name, options, value, onChange }) => {
  return (
    <div className={clsx('select-container')}>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(Select);
