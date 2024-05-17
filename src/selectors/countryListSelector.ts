import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

const selectIsLoading = (state: RootState) => state.countryList.isLoading;
const selectErrors = (state: RootState) => state.countryList.errors;
const selectFilters = (state: RootState) => state.countryList.filters;
const selectCountryList = (state: RootState) => state.countryList.countries;

export const countryListSelector = createDraftSafeSelector(
  selectCountryList,
  selectFilters,
  selectErrors,
  selectIsLoading,

  (countries, filters, errors, isLoading) => {
    if (filters.name !== '') {
      const regex = new RegExp(filters.name, 'i');
      countries = countries.filter((country) => regex.test(country.name));
    }
    if (filters.population > 0) {
      countries = countries.filter(
        (country) => country.population < filters.population
      );
    }
    return {
      countries,
      filters,
      errors,
      isLoading
    };
  }
);
