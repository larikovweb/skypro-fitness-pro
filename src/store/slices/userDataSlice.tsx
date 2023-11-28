import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserData } from '../../services/userDataService';
import { IUserData } from '../../interfaces/interfaces';
import { isUndefined } from '@bunt/is';

export type UserDataState = {
  data: IUserData;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
};

const initialState: UserDataState = {
  data: {
    courses: [],
  },
  status: 'idle',
  error: undefined,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<IUserData>) => {
        state.status = 'succeeded';
        if (action.payload) {
          if (Array.isArray(action.payload.courses)) {
            state.data = {
              ...action.payload,
              courses: action.payload.courses.filter((course) => !isUndefined(course)),
            };
          } else {
            // Handle case where action.payload.courses is not an array
            console.error('action.payload.courses is not an array');
          }
        } else {
          state.data = {
            courses: [],
          };
        }
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userDataSlice.reducer;
