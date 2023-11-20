import { FC } from "react";
import * as S from "./styles";
import { CourseItem } from "../../components/courseCard/coursecard";
import { CourseImg } from "../../assets/img/courses";
import { SloganImg } from "../../assets/img/main";
import { Link } from "react-router-dom";
import { Container } from "../../styled/components";

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
    <S.Main>
      <Container>
      <S.TitleBlock>
          <S.TitleBlockH3>Онлайн-тренировки для занятий дома</S.TitleBlockH3>
          <S.TitleBlockH1>
            Начните заниматься спортом и улучшите качество жизни
          </S.TitleBlockH1>
          <S.SkyfintessSlogan src={SloganImg} />
      </S.TitleBlock>

      <S.CenterBlock>
        {
          CoursesArray.map((course)=> {
            return (
              // Сделала пока переход на страницу курса, после подключения базы данных можно будет отредактировать и рендерить нужный курс 
              <Link to={`/about`}>
                <CourseItem name={course.name} path={course.img} key={course.id} showBtn={false}/>
              </Link>
            )
          }) 
        }
      </S.CenterBlock>

      <S.ScrollUpBtn>Наверх ↑</S.ScrollUpBtn>
      </Container>
    </S.Main>
  );
};

export default Main;
