import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, onValue, get, set } from 'firebase/database';
import { ICourse, IUserData } from '../interfaces/interfaces';

export const fetchUserData = createAsyncThunk<IUserData, string>('userData', (id) => {
  const db = getDatabase();
  const userDataRef = ref(db, `userData/${id}`);

  return new Promise((resolve, reject) => {
    onValue(
      userDataRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      reject,
    );
  });
});

export const saveCourses = async (userId: string, course: ICourse) => {
  const db = getDatabase();
  const userDataRef = ref(db, `userData/${userId}/courses`);

  // Получить текущий список курсов пользователя
  const snapshot = await get(userDataRef);
  const currentCourses = snapshot.val() || [];

  // Соединить текущий список курсов пользователя с новыми курсами,
  // убедиться, что идентификаторы курсов уникальны
  const newCourses = Array.from(new Set([...currentCourses, course]));

  // Записать обновленный список курсов пользователя в базу данных
  set(userDataRef, newCourses);
};
