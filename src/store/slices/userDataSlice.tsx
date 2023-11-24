import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserData } from '../../services/userDataService';
import { IUserData } from '../../interfaces/interfaces';

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
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userDataSlice.reducer;
