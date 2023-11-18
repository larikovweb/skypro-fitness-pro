import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../styled/components';
import { HelmetHead } from '../components/seo/HelmetHead';
const Workout: FC = () => {
  return (
    <>
      <HelmetHead title="Заголовок Главной" descr="Описание Главной" />
      <Wrapper>WORKOUT</Wrapper>
    </>
  );
};

const Wrapper = styled(Container)``;

export default Workout;
