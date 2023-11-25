import { FC, useRef, MutableRefObject } from 'react';
import { LogoIco } from '../../../icons';
import { Input } from '../../form/Input';
import { Button } from '../../form/Button';
import * as S from './styles';
import { getAuth, updatePassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';

type Props = {
	isOpen?: boolean;
};

//test3@levis.levis
//2U4AAmzdQsqzhbb46
export const ModalNewPassword: FC<Props> = () => {
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

	const dispatch = useDispatch();

	const useChangePW = () => {
		if (inputRef.current.value) {
			const auth = getAuth();
			const user = auth.currentUser;

			console.log(user);
			if (user && user !== null) {
				if (inputRef.current.value.length > 7) {
					updatePassword(user, inputRef.current.value)
						.then(() => {
							console.log('updatePW');
						})
						.catch((err) => {
							console.log(err);
						});
					signInWithEmailAndPassword(auth, user.email as string, inputRef.current.value)
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
				} else {
					alert('пароль должен содержать 8 и более символов');
				}
			}
		}
	};
	return (
		<S.Wrapper>
			<S.Logo>
				<LogoIco fillColor="#140d40" />
			</S.Logo>
			<S.Form>
				<S.Label>Новый пароль:</S.Label>
				<Input placeholder="Пароль" />
				<Input placeholder="Повторите пароль" ref={inputRef} />
				<Button $primary type="submit" onClick={useChangePW}>
					Сохранить
				</Button>
			</S.Form>
		</S.Wrapper>
	);
};
