import { useSelector } from 'react-redux';
import { IUser } from '../interfaces/interfaces';

export const useAuth = () => {
  const { email, token, id } = useSelector((state: { user: IUser }) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
