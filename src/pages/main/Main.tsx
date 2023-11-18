import { FC } from "react";
import * as S from "./styles";
import { Header } from "../../components/header/header";

const Main: FC = () => {
  return (
    <>
    <S.Container>
      <S.Main>
        <Header />

        <S.TitleBlock>
    
            <S.TitleBlockH3>Онлайн-тренировки для занятий дома</S.TitleBlockH3>
            <S.TitleBlockH1>
              Начните заниматься спортом и улучшите качество жизни
            </S.TitleBlockH1>
            <S.SkyfintessSlogan src="../../../public/img/salesticker.svg" />
          
        </S.TitleBlock>


        <S.CenterBlock>
          <S.CourseCard>
            <S.CourseImage
              src="../../../public/img/profcard1.png"
              alt="profcard1"
            />
            <S.CourseName>Йога</S.CourseName>
          </S.CourseCard>

          <S.CourseCard>
            <S.CourseImage
              src="../../../public/img/profcard2.png"
              alt="profcard2"
            />
            <S.CourseName>Стретчинг</S.CourseName>
          </S.CourseCard>

          <S.CourseCard>
            <S.CourseImage
              src="../../../public/img/profcard3.png"
              alt="profcard3"
            />
            <S.CourseName>Танцевальный фитнес</S.CourseName>
          </S.CourseCard>

          <S.CourseCard>
            <S.CourseImage
              src="../../../public/img/profcard4.png"
              alt="profcard4"
            />
            <S.CourseName>Степ-аэробика</S.CourseName>
          </S.CourseCard>

          <S.CourseCard>
            <S.CourseImage
              src="../../../public/img/profcard5.png"
              alt="profcard5"
            />
            <S.CourseName>Бодифлекс</S.CourseName>
          </S.CourseCard>
        </S.CenterBlock>

        <S.ScrollUpBtn>Наверх ↑</S.ScrollUpBtn>
      </S.Main>
    </S.Container>
    </>
  );
};

export default Main;
