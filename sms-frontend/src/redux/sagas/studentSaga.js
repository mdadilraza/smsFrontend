import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchStudentsRequest,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudentRequest,
  addStudentSuccess,
  addStudentFailure,
} from '../slices/studentSlice';
import { fetchStudentsAPI, addStudentAPI } from '../../Api/studentApi';

function* fetchStudentsSaga() {
  try {
    const students = yield call(fetchStudentsAPI);
    yield put(fetchStudentsSuccess(students));
  } catch (error) {
    yield put(fetchStudentsFailure(error.message));
  }
}

function* addStudentSaga(action) {
  try {
    const student = yield call(addStudentAPI, action.payload);
    yield put(addStudentSuccess(student));
  } catch (error) {
    yield put(addStudentFailure(error.message));
  }
}

export default function* studentSaga() {
  yield takeLatest(fetchStudentsRequest.type, fetchStudentsSaga);
  yield takeLatest(addStudentRequest.type, addStudentSaga);
}
