import { FC } from 'react';

import * as S from './styles';
import { CourseItem } from '../../components/CourseItem/CourseItem';
import { SloganImg } from '../../assets/img/main';
import { Link } from 'react-router-dom';
import { Container } from '../../styled/components';
import { useCourses } from '../../hooks/useCourses';
import { getDatabase, ref, set } from 'firebase/database';
import { useAuth } from '../../hooks/useAuth';

const Main: FC = () => {
  const { data: courses, status, error } = useCourses();

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
          {courses.map((course) => {
            return (
              <Link
                // onClick={() => id && saveUserCourses(id.toString(), [course.id.toString()])}
                key={course.id}
                to={`/course/${course.id}`}>
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
