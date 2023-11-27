import { FC } from 'react';
import * as S from './S.ProgressBar';

type Prop = {
  completed?: number | null;
  max_completed?: number | null;
  bgcolor?: string;
};

export const ProgressBar: FC<Prop> = ({ completed, bgcolor, max_completed }) => {
  const result = 0;
  if (
    completed !== null &&
    completed !== undefined &&
    max_completed !== null &&
    max_completed !== undefined
  ) {
    const result = Math.round((completed / max_completed) * 100);

    return (
      <S.Block bgcolor={bgcolor}>
        <S.Result progress={result} bgcolor={bgcolor}>
          <S.Label progress={result} bgcolor={bgcolor}>
            {result}%
          </S.Label>
        </S.Result>
      </S.Block>
    );
  } else {
    return (
      <S.Block bgcolor={bgcolor}>
        <S.Result progress={0} bgcolor={bgcolor}>
          <S.Label progress={null} bgcolor={bgcolor}>
            {result}%
          </S.Label>
        </S.Result>
      </S.Block>
    );
  }
};
