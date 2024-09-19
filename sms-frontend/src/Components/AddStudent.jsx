import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudentRequest } from '../redux/slices/studentSlice';

const AddStudent = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudentRequest({ name }));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
