import { FC } from 'react';
import { LogoIco } from '../../../icons';
import { Input } from '../../form/Input';
import { Button } from '../../form/Button';
import * as S from './styles';
import { getAuth, signInWithEmailAndPassword, updatePassword } from 'firebase/auth';

import { useForm } from 'react-hook-form';
import { setUser } from '../../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useModal } from '../../../hooks/useModal';

interface IFormInputs {
  newPassword: string;
  confirmPassword: string;
}

export const ModalNewPassword: FC = () => {
  const dispatch = useDispatch();
  const { close } = useModal('newPassword');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  const newPassword = watch('newPassword');

  const onSubmit = async (data: IFormInputs) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user !== null) {
      await updatePassword(user, data.newPassword)
        .then(() => {
          alert('Пароль успешно изменен');
          close();
        })
        .catch((err) => {
          console.log(err);
        });
      await signInWithEmailAndPassword(auth, user.email as string, data.newPassword)
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
    }
  };

  return (
    <S.Wrapper>
      <S.Logo>
        <LogoIco fillColor="#140d40" />
      </S.Logo>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>Новый пароль:</S.Label>
        <Input
          type="password"
          placeholder="Пароль"
          {...register('newPassword', {
            required: 'Поле не может быть пустым',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать хотя бы 6 символов',
            },
            maxLength: {
              value: 20,
              message: 'Пароль должен содержать не более 20 символов',
            },
            pattern: {
              value: /(?=.*[0-9])/,
              message: 'Пароль должен содержать хотя бы 1 цифру',
            },
          })}
        />
        <Input
          type="password"
          placeholder="Повторите пароль"
          {...register('confirmPassword', {
            required: 'Поле не может быть пустым',
            validate: (value) => value === newPassword || 'Пароли не совпадают',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <Button $primary type="submit">
          Сохранить
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};
