import { FC } from "react";
import * as S from "./styles";

type Props = {
  name: string;
  path: string;
  showBtn?: boolean;
};

export const CourseItem: FC<Props> = ({ name, path, showBtn }) => {
  return (
    <S.CourseCard>
      <S.CourseImage src={path} alt="{name}" />
      <S.CourseName>{name}</S.CourseName>
      {showBtn && <S.FurtherBtn>Перейти →</S.FurtherBtn>}
    </S.CourseCard>
  );
}