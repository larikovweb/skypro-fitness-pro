import styled from '@emotion/styled';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IconLoader } from '../../icons';

export const Loader: FC = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper $main={pathname === '/'}>
      <IconLoader />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $main: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: ${({ $main }) => ($main ? '#271a58' : '#fafafa')};
  svg {
    fill: ${({ $main }) => ($main ? '#fff' : '#271a58')};
  }
`;
