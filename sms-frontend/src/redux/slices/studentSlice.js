import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchStudentsRequest: (state) => {
      state.loading = true;
    },
    fetchStudentsSuccess: (state, action) => {
      state.loading = false;
      state.students = action.payload;
    },
    fetchStudentsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addStudentRequest: (state) => {
      state.loading = true;
    },
    addStudentSuccess: (state, action) => {
      state.loading = false;
      state.students.push(action.payload);
    },
    addStudentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStudentsRequest,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudentRequest,
  addStudentSuccess,
  addStudentFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
