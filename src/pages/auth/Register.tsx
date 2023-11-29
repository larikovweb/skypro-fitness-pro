import { FC } from 'react';
import { Input } from '../../components/form/Input';
import { Button } from '../../components/form/Button';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  User,
} from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { InputField } from '../../components/form/InputField';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './styles';
import { LogoIco } from '../../icons';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/consts';

type TSignUp = {
  email: string;
  password: string;
  repeat: string;
};

const Register: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<TSignUp>();

  const onSubmit = (data: TSignUp) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate(PROFILE_ROUTE);
        sendEmailVerification(auth.currentUser as User)
          .then(() => {
            console.log('verification done');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`${errorCode}: ${errorMessage}`);
          });
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
        <InputField error={errors.repeat?.message}>
          <Input
            type="password"
            {...register('repeat', {
              validate: (value) => value === getValues('password') || 'Пароли не совпадают',
              required: 'Повтор пароля обязателено',
            })}
            placeholder="Повторите пароль"
          />
        </InputField>
        <S.Buttons>
          <Button type="submit" $primary>
            Зарегистрироваться
          </Button>
          <Link to={LOGIN_ROUTE}>
            <Button $secondary>Войти</Button>
          </Link>
        </S.Buttons>
      </S.Form>
    </S.Wrapper>
  );
};

export default Register;
