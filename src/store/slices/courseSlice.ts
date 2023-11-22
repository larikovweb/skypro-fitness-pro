import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCourses } from '../../services/courseService';
import { ICourse } from '../../interfaces/interfaces';

export type CourseState = {
  data: ICourse[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
};

const initialState: CourseState = {
  data: [],
  status: 'idle',
  error: undefined,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action: PayloadAction<ICourse[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
