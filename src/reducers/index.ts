import { combineReducers } from '@reduxjs/toolkit';
import countryListReducer from '../slices/CountryListSlice';

const rootReducer = combineReducers({
  countryList: countryListReducer
});
export default rootReducer;
