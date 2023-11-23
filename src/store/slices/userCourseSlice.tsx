import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserCourses } from '../../services/courseService';

export type UserCourseState = {
  data: string[] | undefined; // Change this line
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
};

const initialState: UserCourseState = {
  data: [],
  status: 'idle',
  error: undefined,
};

const userCoursesSlice = createSlice({
  name: 'userCourses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserCourses.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userCoursesSlice.reducer;
