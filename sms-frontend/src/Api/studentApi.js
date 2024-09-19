import axios from 'axios';

export const fetchStudentsAPI = async () => {
  const response = await axios.get('/api/students');
  return response.data;
};

export const addStudentAPI = async (student) => {
  const response = await axios.post('/api/students', student);
  return response.data;
};
