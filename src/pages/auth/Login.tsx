import { FC } from 'react';
import { Input } from '../../components/form/Input';
import { Button } from '../../components/form/Button';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { setUser } from '../../store/slices/userSlice';
import { InputField } from '../../components/form/InputField';
import { PROFILE_ROUTE, REGISTER_ROUTE } from '../../utils/consts';
import { Link, useNavigate } from 'react-router-dom';
import { LogoIco } from '../../icons';
import * as S from './styles';

type TSignUp = {
  email: string;
  password: string;
  repeat: string;
};

const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate(PROFILE_ROUTE);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Logo>
          <LogoIco fillColor="#000" />
        </S.Logo>
        <InputField error={errors.email?.message}>
          <Input
            {...register('email', {
              required: 'Почта обязательна',
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
            type="password"
            {...register('password', {
              required: 'Пароль обязателен',
              minLength: {
                value: 6,
                message: 'Пароль должен быть больше 6 символов',
              },
              maxLength: {
                value: 20,
                message: 'Пароль должен быть меньше 20 символов',
              },
              pattern: {
                value: /(?=.*[0-9])/,
                message: 'Пароль должен содержать хотя бы одну цифру',
              },
            })}
            placeholder="Пароль"
          />
        </InputField>
        <S.Buttons>
          <Button $primary>Войти</Button>
          <Link to={REGISTER_ROUTE}>
            <Button $secondary>Зарегистрироваться</Button>
          </Link>
        </S.Buttons>
      </S.Form>
    </S.Wrapper>
  );
};

export default Login;
