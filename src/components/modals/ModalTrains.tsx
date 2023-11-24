import styled from '@emotion/styled';
import { FC } from 'react';
import { IWorkout } from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';
import { $darkColor } from '../../styled/variables';
import { WORKOUT_ROUTE } from '../../utils/consts';

type Props = {
  courseId: number | string;
  workouts: IWorkout[];
};

export const ModalTrains: FC<Props> = ({ workouts, courseId }) => {
  return (
    <Wrapper>
      <Title>Выберите тренировку</Title>
      <Scroll>
        {workouts.map((workout, index) => {
          const name = workout.title.split(' / ')[0];
          const descr = workout.title.split(' / ').slice(1).join(' / ');
          return (
            <Train id={workout.id} courseId={courseId} descr={descr} name={name} key={index} />
          );
        })}
      </Scroll>
    </Wrapper>
  );
};

const Train: FC<{
  id: number | string;
  name: string;
  descr: string;
  courseId: number | string;
}> = ({ id, name, descr, courseId }) => {
  return (
    <TrainWrapper to={`${WORKOUT_ROUTE}/${courseId}/${id}`}>
      <b>{name}</b>
      {descr && <span>{descr}</span>}
    </TrainWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
  margin-bottom: 2.5rem;
`;

const Scroll = styled.div`
  padding-right: 1.5rem;
  padding-left: 1.8125rem;
  overflow-y: auto;
  max-height: 28.25rem;
  display: grid;
  gap: 0.75rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: rgba(25, 25, 28, 0.2) rgba(25, 25, 28, 0.15); /* «цвет ползунка» «цвет полосы скроллбара» */
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.3125rem;
    height: 0.3125rem;
    background-color: rgba(25, 25, 28, 0.15);
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(25, 25, 28, 0.2);
    border-radius: 0.25rem;
    transition: background-color 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(25, 25, 28, 0.3);
  }

  /* Стрелки */
  &::-webkit-scrollbar-button:vertical:start:decrement {
    background: transparent;
  }

  &::-webkit-scrollbar-button:vertical:end:increment {
    background: transparent;
  }

  &::-webkit-scrollbar-button:horizontal:start:decrement {
    background: transparent;
  }

  &::-webkit-scrollbar-button:horizontal:end:increment {
    background: transparent;
  }
`;

const TrainWrapper = styled(Link)`
  position: relative;
  width: 18.375rem;
  padding: 0.75rem 1.75rem 1rem;
  border-radius: 1.625rem;
  border: 0.0625rem solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${$darkColor};
  transition: opacity 0.3s, transform 0.3s;
  &:hover {
    opacity: 0.75;
    transform: scale(0.98);
  }
  b {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 115%;
    letter-spacing: -0.00313rem;
  }
  span {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.001rem;
    margin-top: 0.38rem;
  }
`;
