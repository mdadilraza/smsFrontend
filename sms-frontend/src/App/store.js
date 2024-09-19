import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import studentSaga from '../redux/sagas/studentSaga';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(studentSaga);

export default store;
