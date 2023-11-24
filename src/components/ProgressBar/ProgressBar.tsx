import { FC } from 'react';
import { Result, Block, Label } from './S.ProgressBar';

type Props = {
  completed?: number;
  bgcolor?: string;
};

export const ProgressBar: FC<Props> = ({ completed, bgcolor }) => {
  return (
    <Block bgcolor={bgcolor}>
      <Result progress={completed} bgcolor={bgcolor}>
        <Label>{completed}%</Label>
      </Result>
    </Block>
  );
};
