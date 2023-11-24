import { useSelector } from 'react-redux';
import { UserDataState } from '../store/slices/userDataSlice';

export const useUserData = () => {
  const { data, status, error } = useSelector(
    (state: { userData: UserDataState }) => state.userData,
  );

  return {
    courses: data?.courses,
    status,
    error,
  };
};
