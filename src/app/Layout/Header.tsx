import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { Link, useLocation } from 'react-router-dom';
import { StrelaIco } from '../../icons/index';
import { ProfileIco } from '../../icons/index';
import { LogoIco } from '../../icons/index';
import { MAIN_ROUTE } from '../../utils/consts';

export const Header: FC = () => {
  const isAuth = false;
  const { pathname } = useLocation();

  return (
    <Wrapper
      style={{
        backgroundColor: pathname === '/' ? 'rgb(39,26,88)' : 'rgb(250,250,250)',
      }}>
      <MyContainer>
        <Img to={MAIN_ROUTE}>
          <LogoIco fillColor={pathname === '/' ? '#ffffff' : '#140d40'} />
        </Img>
        {!isAuth ? (
          <Link to="/login" onClick={() => alert('Вы авторизованы!')}>
            <Button>Войти</Button>
          </Link>
        ) : (
          <ProfileDiv>
            <ProfileIco />
            <p>Сергей</p>
            <button style={{ background: 'transparent' }} onClick={() => alert('Привет!')}>
              <StrelaIco />
            </button>
          </ProfileDiv>
        )}
      </MyContainer>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: transparent;
`;

const MyContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled(Link)`
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  svg {
    transition: fill 0.3s;
  }
`;
const Button = styled.button`
  background: #140d40;
  color: whitesmoke;
  height: 1.5rem;
  width: 4.8rem;
  border-radius: 2.8rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1.25px 1.25px 1.25px 1.25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;
