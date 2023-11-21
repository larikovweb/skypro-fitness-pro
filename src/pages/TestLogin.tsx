import { FC } from 'react';
import { Input } from '../components/form/Input';
import { Button } from '../components/form/Button';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { setUser } from '../store/slices/userSlice';
import { InputField } from '../components/form/InputField';

type TSignUp = {
  email: string;
  password: string;
  repeat: string;
};

const TestLogin: FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUp>();

  const onSubmit = (data: TSignUp) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        maxWidth: '17rem',
        margin: '0 auto',
      }}
      action="">
      <h1>Login</h1>
      <InputField error={errors.email?.message}>
        <Input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный адрес электронной почты',
            },
          })}
          placeholder="Email"
        />
      </InputField>
      <InputField error={errors.password?.message}>
        <Input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password must be less than 20 characters',
            },
            pattern: {
              value: /(?=.*[0-9])/,
              message: 'Password must contain a number',
            },
          })}
          placeholder="Password"
        />
      </InputField>
      <Button $primary>Submit</Button>
    </form>
  );
};

export default TestLogin;
