import { FC } from 'react';
import * as S from './styles';
import { CourseImg } from '../../assets/img/courses';
import { ICourse } from '../../interfaces/interfaces';

type Props = {
  showBtn?: boolean;
} & ICourse;

const images: Record<string, string> = {
  '1': CourseImg.CourseImg1,
  '2': CourseImg.CourseImg2,
  '3': CourseImg.CourseImg3,
  '4': CourseImg.CourseImg4,
  '5': CourseImg.CourseImg5,
};

export const CourseItem: FC<Props> = ({ name, showBtn, id }) => {
  return (
    <S.CourseCard>
      <S.CourseImage src={images[id]} alt={name} />
      <S.CourseName>{name}</S.CourseName>
      {showBtn && <S.FurtherBtn to={`/course/${id}`}>Перейти →</S.FurtherBtn>}
    </S.CourseCard>
  );
};
