import { FC, useRef, useState } from 'react';
import { ProfileIco, StrelaIco } from '../../../icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import styled from '@emotion/styled';
import { MAIN_ROUTE, PROFILE_ROUTE } from '../../../utils/consts';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const { email, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const ref = useRef(null);
  const handleClickOutside = () => setOpen(false);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    logout(MAIN_ROUTE);
    navigate(MAIN_ROUTE);
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Profile ref={ref}>
      <View onClick={() => setOpen((state) => !state)}>
        <ProfileIco />
        <span style={{ color: pathname === '/' ? '#ffffff' : '#140d40' }}>{email}</span>
        <StrelaIco stroke={pathname === '/' ? '#ffffff' : '#140d40'} />
      </View>
      <Links style={{ color: pathname === '/' ? '#ffffff' : '#140d40' }} $open={open}>
        <Link to={MAIN_ROUTE}>Главная</Link>
        <Link to={PROFILE_ROUTE}>Профиль</Link>
        <a onClick={handleLogout} href="#">
          Выйти
        </a>
      </Links>
    </Profile>
  );
};

const Profile = styled.div`
  position: relative;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 133.333% */
  letter-spacing: -0.00625rem;
  user-select: none;
  z-index: 1;
`;

const View = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  > svg {
    &:first-of-type {
      margin-right: 0.5rem;
    }
    &:last-of-type {
      margin-left: 0.5rem;
    }
  }
`;

const Links = styled.div<{ $open: boolean }>`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
  > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  a {
    color: inherit;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.65;
    }
  }
`;
