import { FC } from 'react';
import { Input } from '../../components/form/Input';
import { Button } from '../../components/form/Button';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { InputField } from '../../components/form/InputField';
import { setUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { HelmetHead } from '../../components/seo/HelmetHead';
import * as S from './styles';

type TSignIn = {
  email: string;
  password: string;
};

const TestLogin: React.FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignIn>();

  const onSubmit = async (data: TSignIn) => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorCode}: ${errorMessage}`);
    }
  };

  return (
    <>
      <HelmetHead title="Страница авторизации" descr="Страница авторизации" />
      <S.Container>
        <S.CardUser>
          <S.Logo>
            <LogoIco fillColor={pathname === '/' ? '#ffffff' : '#140d40'} />
          </S.Logo>
          <S.Info>
            <S.Title>Вход в систему</S.Title>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField error={errors.email?.message}>
                <Input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Некорректный адрес электронной почты',
                    },
                  })}
                  placeholder="Логин"
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
                  placeholder="Пароль"
                  type="password"
                />
              </InputField>
              <Button $primary type="submit">
                Войти
              </Button>
            </form>
            <S.RegisterLink>
              <Link to="'../pages/TestRegister'">Зарегистрироваться</Link>
            </S.RegisterLink>
          </S.Info>
        </S.CardUser>
      </S.Container>
    </>
  );
};

export default TestLogin;
