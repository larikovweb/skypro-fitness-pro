import { FC } from 'react';
import * as S from './S.ProgressBar';

type Prop = {
  completed?: number;
  bgcolor?: string;
  text?:string;
};

export const ProgressBar: FC<Prop> = ({ completed, bgcolor,text }) => {
  return (


    
    <S.TextBlock>
              <S.TextBlockP>{text}</S.TextBlockP>
    <S.Block bgcolor={bgcolor}>
      <S.Result progress={completed} bgcolor={bgcolor}>
        <S.Label>{completed}%</S.Label>
      </S.Result>
    </S.Block>
    </S.TextBlock>
  );
};


