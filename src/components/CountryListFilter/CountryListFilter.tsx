import React from 'react';
import Input from '../../ui-kits/Input/Input';
import Select from '../../ui-kits/Select/Select';
import classNames from 'classnames/bind';
import styles from './CountryListFilter.css';
import Button from '../../ui-kits/Button/Button';
import { options } from './config';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
const clsx = classNames.bind(styles);

interface Filter {
  name: string;
  population: number;
}

interface CountryListFilterProps {
  onClearFilter: () => void;
  onChangeFilter: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  filters: Filter;
}

const CountryListFilter: React.FC<CountryListFilterProps> = ({
  onClearFilter,
  onChangeFilter,
  filters
}) => {
  return (
    <ErrorBoundary>
      <div className={clsx('country-list-filter')}>
        <Input
          type='text'
          name='name'
          value={filters.name}
          onChange={onChangeFilter}
          placeholder='Country Name'
        />
        <Select
          name='population'
          options={options}
          value={filters.population}
          onChange={onChangeFilter}
        />
        <Button className='button-link' onClick={onClearFilter}>
          Clear
        </Button>
      </div>
    </ErrorBoundary>
  );
};

export default CountryListFilter;
