import { FC } from 'react';
import * as S from './styles';

type Props = {
  id: number;
  name: string;
  img: string;
  showBtn?: boolean;
};

export const CourseItem: FC<Props> = ({ name, img, showBtn, id }) => {
  return (
    <S.CourseCard>
      <S.CourseImage src={img} alt="{name}" />
      <S.CourseName>{name}</S.CourseName>
      {showBtn && <S.FurtherBtn to={`/course/${id}`}>Перейти →</S.FurtherBtn>}
    </S.CourseCard>
  );
};
