import { Country } from './../types/Country';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ResponseError {
  error?: number;
  message?: string;
}

export interface Filters {
  name: string;
  population: number;
}

export interface CountryListState {
  countries: Country[];
  isLoading: boolean;
  filters: Filters;
  errors: ResponseError;
}

const initialState: CountryListState = {
  countries: [],
  isLoading: false,
  filters: {
    name: '',
    population: 0
  },
  errors: {}
};

const countryListSlice = createSlice({
  name: 'countryList',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setCountryList(state, action: PayloadAction<Country[]>) {
      state.countries = action.payload;
    },
    setFilters(
      state,
      action: PayloadAction<{ name: string; value: string | number }>
    ) {
      if (action.payload.name === 'population') {
        state.filters.population = action.payload.value as number;
      } else {
        state.filters.name = action.payload.value as string;
      }
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
    setErrors(state, action: PayloadAction<ResponseError>) {
      state.errors = action.payload;
    }
  }
});

export const {
  setCountryList,
  setIsLoading,
  setFilters,
  resetFilters,
  setErrors
} = countryListSlice.actions;
export default countryListSlice.reducer;

export const CountryListActionType = {
  FETCH_ALL_COUNTRIES: 'countryList/FETCH_ALL_COUNTRIES' as const,
  SET_COUNTRY_LIST_FILTERS: 'countryList/SET_COUNTRY_LIST_FILTERS' as const
};
