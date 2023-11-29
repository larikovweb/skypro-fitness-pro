import { FC } from 'react';

import * as S from './styles';
import { CourseItem } from '../../components/CourseItem/CourseItem';
import { SloganImg } from '../../assets/img/main';
import { Link } from 'react-router-dom';
import { Container } from '../../styled/components';
import { useCourses } from '../../hooks/useCourses';
import { Loader } from '../../components/plug/Loader';
import { HelmetHead } from '../../components/seo/HelmetHead';

const Main: FC = () => {
  const { data: courses, status, error } = useCourses();

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const scrollPageUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <HelmetHead
        title={`Онлайн-тренировки для занятий дома`}
        descr={`Начните заниматься спортом и улучшите качество жизни`}
      />
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
                <Link key={course.id} to={`/course/${course.id}`}>
                  <CourseItem {...course} showBtn={false} />
                </Link>
              );
            })}
          </S.CenterBlock>

          <S.ScrollUpBtn onClick={scrollPageUp}>Наверх ↑</S.ScrollUpBtn>
        </Container>
      </S.Main>
    </>
  );
};

export default Main;
