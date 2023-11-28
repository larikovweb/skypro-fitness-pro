import { FC, MutableRefObject, useRef } from 'react';
import { LogoIco } from '../../../icons';
import { Input } from '../../form/Input';
import { Button } from '../../form/Button';
import * as S from './styles';
import { getAuth, verifyBeforeUpdateEmail } from 'firebase/auth';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
type Props = {
	isOpen?: boolean;
};

export const ModalNewLogin: FC<Props> = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

	const handleLogout = (): void => {
		logout('/test-login');
		navigate('/test-login');
	};
  const useChangeEmail = (e: any) => {
    e.preventDefault();
		if (inputRef.current.value) {
			const auth = getAuth();
			const user = auth.currentUser;
			console.log(auth.currentUser);
			if (user && user !== null) {
				verifyBeforeUpdateEmail(user, inputRef.current.value)
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						console.log(`${errorCode}: ${errorMessage}`);
					});
			}
    }
    alert(
      'Было отправлено письмо подтверждения на ваш желаемый новый email,если вы этого не делали, пожалуйста обратитесь в службу поддержки сервиса',
    );
    alert('Вы можете зайти в профиль по новым данным')
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
