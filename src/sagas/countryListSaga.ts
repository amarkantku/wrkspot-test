import { call, put, takeLatest } from 'redux-saga/effects';
import {
  setCountryList,
  CountryListActionType,
  setIsLoading,
  setErrors
} from '../slices/CountryListSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Country } from './../types/Country';
import CountryListService from '../services/CountryListService';

type ApiResponse = Country[] & {
  error: number;
  message: string;
};

export const fetchAllCountriesSaga = function* (action: PayloadAction<any>) {
  try {
    yield put(setIsLoading(true));
    const response: ApiResponse = yield call(CountryListService.fetchCountries);
    if (response.error === 500) {
      yield put(setErrors(response));
    } else {
      yield put(setCountryList(response));
    }
  } catch (error: any) {
    yield put(
      setErrors({
        message: error.message || 'Network error',
        error: 500
      })
    );
  } finally {
    yield put(setIsLoading(false));
  }
};

export default function* countryListSaga() {
  yield takeLatest(
    CountryListActionType.FETCH_ALL_COUNTRIES,
    fetchAllCountriesSaga
  );
}
