import React, { FC, useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Container } from '../styled/components';


const Authorisation: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isAuthProcess, setIsAuthProcess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const navigate = useNavigate();
  const { setToken } = useContext(userContext);

  const handleLogin = async () => {
    if (!email) {
      setError('Введите почту');
      return;
    } else if (!password) {
      setError('Введите пароль');
      return;
    }

    try {
      setIsAuthProcess(true);
      const userInfo = await loginApi({ email, password });
      userInfo.token = await getAccessToken({ email, password });
      localStorage.setItem('token', JSON.stringify(userInfo));
      setToken(userInfo);
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsAuthProcess(false);
    }
  };

  const handleRegister = async () => {
    if (!username) {
      setError('Введите имя пользователя');
      return;
    } else if (!email) {
      setError('Введите почту');
      return;
    } else if (!password) {
      setError('Введите пароль');
      return;
    } else if (!repeatPassword) {
      setError('Введите пароль повторно');
      return;
    } else if (repeatPassword !== password) {
      setError('Указанные пароли не совпадают');
      return;
    } else if (password.length < 8) {
      setError('Пароль должен быть не менее 8-ми символов');
      return;
    }

    try {
      setIsAuthProcess(true);
      const userInfo = await registrationApi({ email, password, username });
      userInfo.token = await getAccessToken({ email, password });
      localStorage.setItem('token', JSON.stringify(userInfo));
      setToken(userInfo);
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsAuthProcess(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <PageContainer>
      <ModalForm>
        <Link to="/login">
          <ModalLogo>
            <ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <Inputs>
              <ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Inputs>
            {error && <Error>{error}</Error>}
            <Buttons>
              <PrimaryButton disabled={isAuthProcess} onClick={handleLogin}>
                {isAuthProcess ? 'Выполняется вход...' : 'Войти'}
              </PrimaryButton>
              <Link to="/register">
                <SecondaryButton>Зарегистрироваться</SecondaryButton>
              </Link>
            </Buttons>
          </>
        ) : (
          <>
            <Inputs>
              <ModalInput
                type="text"
                name="login"
                placeholder="Имя"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
              />
            </Inputs>
            {error && <Error>{error}</Error>}
            <Buttons>
              <PrimaryButton disabled={isAuthProcess} onClick={handleRegister}>
                {isAuthProcess ? 'Выполняется регистрация...' : 'Зарегистрироваться'}
              </PrimaryButton>
            </Buttons>
          </>
        )}
      </ModalForm>
    </PageContainer>
  );
};


export default Authorisation;