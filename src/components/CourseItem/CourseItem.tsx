import { FC } from 'react';
import * as S from './styles';
import { ICourse } from '../../interfaces/interfaces';
import { ModalControl } from '../modals/ModalControl';
import { ModalTrains } from '../modals/ModalTrains';

type Props = {
  showBtn?: boolean;
} & ICourse;

const publicPath = process.env.PUBLIC_URL;

export const CourseItem: FC<Props> = ({ id, name, showBtn, img, workouts }) => {
  return (
    <S.CourseCard>
      <S.CourseImage src={`${publicPath}${img}`} alt={name} />
      <S.CourseName>{name}</S.CourseName>
      {showBtn && (
        <ModalControl modal={<ModalTrains courseId={id} workouts={workouts} />}>
          <S.FurtherBtn>Перейти →</S.FurtherBtn>
        </ModalControl>
      )}
    </S.CourseCard>
  );
};
