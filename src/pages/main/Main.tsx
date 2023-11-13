import { FC } from "react";
// import { Container } from "../../styled/components";
// import { HelmetHead } from "../../components/seo/HelmetHead";
import * as S from "./styles";

const Main: FC = () => {
  return (
    <>
      <S.Main>
        <S.MainHeaderBlock>
          <S.SkyfintessLogo src="../../../public/img/logo.png" alt="logo" />
          <S.LoginButton>Войти</S.LoginButton>
        </S.MainHeaderBlock>

        <S.TitleBlock>
          <div>
            <S.TitleBlockH3>Онлайн-тренировки для занятий дома</S.TitleBlockH3>
            <S.TitleBlockH1>
              Начните заниматься спортом и улучшите качество жизни
            </S.TitleBlockH1>
          </div>
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
    </>
  );
};

export default Main;
