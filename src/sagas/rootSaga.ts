import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import countryListSaga from './countryListSaga';

export default function* rootSaga(): SagaIterator {
  yield all([fork(countryListSaga)]);
}
