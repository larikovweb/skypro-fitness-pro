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
          // Предполагаем, что action.payload.courses — это объект с ключами как id курсов
          if (typeof action.payload.courses === 'object' && action.payload.courses !== null) {
            // Преобразуем объект курсов в массив
            const coursesArray = Object.values(action.payload.courses);
            // Фильтруем массив, если необходимо, для удаления неопределенных значений
            const filteredCourses = coursesArray.filter((course) => !isUndefined(course));
            state.data = {
              ...action.payload,
              courses: filteredCourses,
            };
          } else {
            // Если курсы не являются объектом, записываем ошибку
            console.error('action.payload.courses is not an object');
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
