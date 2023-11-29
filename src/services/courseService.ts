import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ICourse } from '../interfaces/interfaces';

export const fetchCourses = createAsyncThunk<ICourse[]>('courses', () => {
  const db = getDatabase();
  const starCountRef = ref(db, 'courses');

  return new Promise((resolve, reject) => {
    onValue(
      starCountRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      reject,
    );
  });
});
