import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './slices/userSlice';
import courses from './slices/courseSlice';
import { authAPI } from '../services/authService';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  user: user,
  courses: courses,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
