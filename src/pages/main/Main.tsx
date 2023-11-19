import { FC } from "react";
import * as S from "./styles";
import { CourseItem } from "../../components/courseCard/coursecard";
import { CourseImg } from "../../assets/img/courses";

const Main: FC = () => {
  const CoursesArray = [
    {
      name: "Йога",
      img: CourseImg.CourseImg1,
      id: 1,
    },
    {
      name: "Стретчинг",
      img: CourseImg.CourseImg2,
      id: 2,
    },
    {
      name: "Танцевальный фитнес",
      img: CourseImg.CourseImg3,
      id: 3,
    },
    {
      name: "Степ-аэробика",
      img: CourseImg.CourseImg4,
      id: 4,
    },
    {
      name: "Бодифлекс",
      img: CourseImg.CourseImg5,
      id: 5,
    },
  ]

  return (
    <S.Container>
      <S.Main>

        <S.TitleBlock>
            <S.TitleBlockH3>Онлайн-тренировки для занятий дома</S.TitleBlockH3>
            <S.TitleBlockH1>
              Начните заниматься спортом и улучшите качество жизни
            </S.TitleBlockH1>
            <S.SkyfintessSlogan src="../../../public/img/salesticker.svg" />
        </S.TitleBlock>

        <S.CenterBlock>
          {
            CoursesArray.map((course)=> {
              return (
                <CourseItem name={course.name} path={course.img} key={course.id} showBtn={false}/>
              )
            }) 
          }
        </S.CenterBlock>

        <S.ScrollUpBtn>Наверх ↑</S.ScrollUpBtn>
      </S.Main>
    </S.Container>
  );
};

export default Main;
