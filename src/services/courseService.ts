import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, onValue, set, get } from 'firebase/database';
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

export const fetchUserCourses = createAsyncThunk<string[], string>('userCourses', (id) => {
  const db = getDatabase();
  const userCoursesRef = ref(db, `userCourses/${id}`);

  return new Promise((resolve, reject) => {
    onValue(
      userCoursesRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      reject,
    );
  });
});

export const saveUserCourses = async (userId: string, courseIds: string[]) => {
  const db = getDatabase();
  const userCoursesRef = ref(db, `userCourses/${userId}`);

  const snapshot = await get(userCoursesRef);
  const currentCourses = snapshot.val() || [];

  const newCourses = Array.from(new Set([...currentCourses, ...courseIds]));

  set(userCoursesRef, newCourses);
};
