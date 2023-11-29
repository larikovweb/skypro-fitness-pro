import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { IUser } from '../interfaces/interfaces';
import { setUser, removeUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, token, id } = useSelector((state: { user: IUser }) => state.user);

  const logout = async (root: string) => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate(root);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
      } else {
        // User is signed out.
        dispatch(removeUser());
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    logout,
  };
};
