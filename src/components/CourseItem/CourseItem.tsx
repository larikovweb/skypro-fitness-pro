import { FC } from 'react';
import * as S from './styles';
// import { CourseImg } from '../../assets/img/courses';
import { ICourse } from '../../interfaces/interfaces';

type Props = {
  showBtn?: boolean;
} & ICourse;

const publicPath = process.env.PUBLIC_URL;

export const CourseItem: FC<Props> = ({ name, showBtn, id, img }) => {
  return (
    <S.CourseCard>
      <S.CourseImage src={`${publicPath}${img}`} alt={name} />
      <S.CourseName>{name}</S.CourseName>
      {showBtn && <S.FurtherBtn to={`/course/${id}`}>Перейти →</S.FurtherBtn>}
    </S.CourseCard>
  );
};
