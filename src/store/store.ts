import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './slices/userSlice';
import courses from './slices/courseSlice';
import userCourses from './slices/userCourseSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  user: user,
  courses: courses,
  userCourses: userCourses,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
