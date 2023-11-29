import { FC, MutableRefObject, useRef } from 'react';
import { LogoIco } from '../../../icons';
import { Input } from '../../form/Input';
import { Button } from '../../form/Button';
import * as S from './styles';
import { getAuth, verifyBeforeUpdateEmail } from 'firebase/auth';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/consts';
type Props = {
  isOpen?: boolean;
};

export const ModalNewLogin: FC<Props> = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleLogout = (): void => {
    logout(LOGIN_ROUTE);
    navigate(LOGIN_ROUTE);
  };
  const useChangeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current.value) {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(auth.currentUser);
      if (user && user !== null) {
        verifyBeforeUpdateEmail(user, inputRef.current.value).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`${errorCode}: ${errorMessage}`);
        });
      }
    }
    alert('Было отправлено письмо подтверждения на ваш желаемый новый email');
    alert('Подтвердите ссылку в письме и авторизуйтесь с новым email');
    handleLogout();
  };
  return (
    <S.Wrapper>
      <S.Logo>
        <LogoIco fillColor="#140d40" />
      </S.Logo>
      <S.Form>
        <S.Label>Новый логин:</S.Label>
        <Input placeholder="Логин" ref={inputRef} />
        <Button $primary type="submit" onClick={useChangeEmail}>
          Сохранить
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};
