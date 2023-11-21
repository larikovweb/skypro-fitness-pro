import styled from '@emotion/styled';
import { FC } from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { HelmetHead } from '../../components/seo/HelmetHead';

type Props = {
  isAuth: boolean;
};

export const Layout: FC<Props> = ({ isAuth }) => {
  return (
    <>
      <HelmetHead title="Общий заголовок" descr="Общее описание" />
      <Header isAuth={isAuth} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  display: block;
  background-color: #fafafa;
`;
