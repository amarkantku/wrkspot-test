import React from 'react';
import classNames from 'classnames/bind';
import CountryListFilter from '../../components/CountryListFilter/CountryListFilter';
import CountryTable from '../../components/CountryTable/CountryTable';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  CountryListActionType,
  resetFilters,
  setFilters,
  setErrors
} from '../../slices/CountryListSlice';
import { AppStore } from '../../store/store';
import Button from '../../ui-kits/Button/Button';
import styles from './CountryList.css';
import { countryListSelector } from '../../selectors/countryListSelector';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Alert from '../../ui-kits/Alert/Alert';

const clsx = classNames.bind(styles);

const CountryList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { countries, isLoading, filters, errors } = countryListSelector(
    useAppSelector((state: AppStore) => state)
  );

  const handleShowAllCountriesClick = () => {
    dispatch({
      type: CountryListActionType.FETCH_ALL_COUNTRIES
    });
  };

  const handleClearFilter = () => {
    dispatch(resetFilters());
  };

  const handleChangeFilter = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    dispatch(setFilters({ name, value }));
  };

  const handleClearError = (event: React.MouseEvent<HTMLSpanElement>): void => {
    dispatch(setErrors({}));
  }

  return (
    <div className={clsx('wrapper')}>
      <h1>Countries Info</h1>

      <div className={clsx('flex-row')}>
        <CountryListFilter
          filters={filters}
          onClearFilter={handleClearFilter}
          onChangeFilter={handleChangeFilter}
        />
        <div>
          <Button onClick={handleShowAllCountriesClick} type='button'>
            Show all Countries
          </Button>
        </div>
      </div>
      {errors.message && <Alert handleClose={handleClearError} type='error' message={errors.message} />}
      <div className={clsx('table-wrapper')}>
        <CountryTable loading={isLoading} countries={countries} />
      </div>
    </div>
  );
};

const WrappedCountryList: React.FC = () => (
  <ErrorBoundary>
    <CountryList />
  </ErrorBoundary>
);

export default WrappedCountryList;
