import styled from '@emotion/styled';
import { FC } from 'react';
import { Header } from './header/Header';
import { Outlet } from 'react-router-dom';
import { HelmetHead } from '../../components/seo/HelmetHead';

export const Layout: FC = () => {
  return (
    <>
      <HelmetHead title="Общий заголовок" descr="Общее описание" />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

const Main = styled.main`
  display: block;
  background-color: #fafafa;
`;
