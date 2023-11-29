import styled from '@emotion/styled';
import { FC } from 'react';
import { IWorkout } from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';
import { WORKOUT_ROUTE } from '../../utils/consts';
import { isNumber } from '@bunt/is';
import { IconCompleted } from '../../icons';
import { useModal } from '../../hooks/useModal';

type Props = {
  courseId: number | string;
  workouts: IWorkout[];
};

export const ModalTrains: FC<Props> = ({ workouts, courseId }) => {
  const { close } = useModal(`trains-${courseId}`);
  return (
    <Wrapper>
      <Title>Выберите тренировку</Title>
      <Scroll>
        {workouts.map((workout, index) => {
          const name = workout.title.split(' / ')[0];
          const descr = workout.title.split(' / ').slice(1).join(' / ');

          const isCompleted = isNumber(workout.exercises[0].myReps);
          return (
            <Train
              close={close}
              id={workout.id}
              isCompleted={isCompleted}
              courseId={courseId}
              descr={descr}
              name={name}
              key={index}
            />
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
  isCompleted: boolean;
  close: () => void;
}> = ({ id, name, descr, courseId, isCompleted, close }) => {
  return (
    <TrainWrapper
      to={`${WORKOUT_ROUTE}/${courseId}/${id}`}
      onClick={close}
      $completed={isCompleted}>
      {isCompleted && <IconCompleted />}
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

const TrainWrapper = styled(Link)<{ $completed: boolean }>`
  position: relative;
  width: 18.375rem;
  padding: 0.75rem 1.75rem 1rem;
  border-radius: 1.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: ${({ $completed }) => ($completed ? '#06B16E' : '#000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ $completed }) => ($completed ? '#06B16E' : '#000')};
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
  svg {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 1.6875rem;
    height: 1.5625rem;
    stroke: #06b16e;
  }
`;
