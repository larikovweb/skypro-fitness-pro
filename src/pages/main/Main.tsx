import { FC } from 'react';

import * as S from './styles';
import { CourseItem } from '../../components/CourseItem/CourseItem';
import { CourseImg } from '../../assets/img/courses';
import { SloganImg } from '../../assets/img/main';
import { Link } from 'react-router-dom';
import { Container } from '../../styled/components';
import { useCourses } from '../../hooks/useCourses';

const Main: FC = () => {
  // Получение курсов
  const { data, status, error } = useCourses();
  console.log(data, status, error);

  const CoursesArray = [
    {
      name: 'Йога',
      img: CourseImg.CourseImg1,
      id: 1,
    },
    {
      name: 'Стретчинг',
      img: CourseImg.CourseImg2,
      id: 2,
    },
    {
      name: 'Танцевальный фитнес',
      img: CourseImg.CourseImg3,
      id: 3,
    },
    {
      name: 'Степ-аэробика',
      img: CourseImg.CourseImg4,
      id: 4,
    },
    {
      name: 'Бодифлекс',
      img: CourseImg.CourseImg5,
      id: 5,
    },
  ];

  return (
    <S.Main>
      <Container>
        <S.TitleBlock>
          <div>
            <S.TitleBlockH3>Онлайн-тренировки для занятий дома</S.TitleBlockH3>
            <S.TitleBlockH1>Начните заниматься спортом и улучшите качество жизни</S.TitleBlockH1>
          </div>
          <S.SkyfintessSlogan src={SloganImg} />
        </S.TitleBlock>

        <S.CenterBlock>
          {CoursesArray.map((course) => {
            return (
              <Link key={course.id} to={`/course/${course.id}`}>
                <CourseItem {...course} showBtn={false} />
              </Link>
            );
          })}
        </S.CenterBlock>

        <S.ScrollUpBtn>Наверх ↑</S.ScrollUpBtn>
      </Container>
    </S.Main>
  );
};

export default Main;
