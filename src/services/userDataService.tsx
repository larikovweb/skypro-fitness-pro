import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, onValue, set, get } from 'firebase/database';
import { ICourse, IExercise, IUserData } from '../interfaces/interfaces';
import { isUndefined } from '@bunt/is';

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
  const userDataRef = ref(db, `userData/${userId}/courses/${course.id}`);

  set(userDataRef, course);
};

export const saveExerciseReps = async (
  userId: string,
  courseId: string,
  workoutId: string,
  newExerciseData: { [key: string]: IExercise },
) => {
  const db = getDatabase();
  const exerciseDataRef = ref(
    db,
    `userData/${userId}/courses/${courseId}/workouts/${workoutId}/exercises`,
  );

  const snapshot = await get(exerciseDataRef);
  const existingExerciseData = snapshot.val() || [];
  const mergeData = existingExerciseData.map((item: IExercise, i: number) => {
    if (isUndefined(newExerciseData)) {
      return;
    }
    return {
      ...item,
      ...newExerciseData[i],
    };
  });

  return set(exerciseDataRef, mergeData);
};
