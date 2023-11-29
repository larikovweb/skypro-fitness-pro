import { FC } from 'react';
import * as S from './S.ProgressBar';
import { IExercise } from '../../interfaces/interfaces';
import { isNull, isUndefined } from '@bunt/is';

const bgColors = ['#565EEF', '#FF6D00', '#9A48F1', '#565EEF', '#FF6D00', '#9A48F1'];

type Prop = {
  exercises: IExercise[];
  workoutId: undefined | string;
};

export const ProgressBar: FC<Prop> = ({ exercises, workoutId }) => {
  return (
    <S.Wrapper>
      <S.Title>Мой прогресс по тренировке {workoutId && `#${+workoutId + 1}`}:</S.Title>
      <S.Bars>
        {exercises.map(({ reps, myReps }, index) => {
          const percentage =
            isNull(myReps) || isUndefined(myReps) ? 0 : ((myReps / reps) * 100).toFixed(0);
          return (
            <S.Block bgcolor={bgColors[index]} key={index}>
              <S.Result progress={percentage} bgcolor={bgColors[index]}>
                <S.Label progress={percentage} bgcolor={bgColors[index]}>
                  {percentage}%
                </S.Label>
              </S.Result>
            </S.Block>
          );
        })}
      </S.Bars>
    </S.Wrapper>
  );
};
