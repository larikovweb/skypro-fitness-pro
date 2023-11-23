import { FC, useEffect } from 'react';
import { Container } from '../../styled/components';
import { Button } from '../../components/form/Button';
import { HelmetHead } from '../../components/seo/HelmetHead';
import * as S from './styles';
import { CourseItem } from '../../components/CourseItem/CourseItem';
import { ModalNewPassword } from '../../components/modals/ProfileModal/ModalNewPassword';
import { ModalControl } from '../../components/modals/ModalControl';
import { ModalNewLogin } from '../../components/modals/ProfileModal/ModalNewLogin';
import { useAuth } from '../../hooks/useAuth';
import { useUserCourses } from '../../hooks/useUserCourses';
import { useAppDispatch } from '../../store/store';
import { fetchUserCourses } from '../../services/courseService';
import { Loader } from '../../components/plug/Loader';

const Profile: FC = () => {
  const { email, id } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    id && dispatch(fetchUserCourses(id));
  }, [dispatch, id]);

  const { data: courses, status, error } = useUserCourses();

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <HelmetHead
        title={`Страница пользователя ${email}`}
        descr={`Страница пользователя ${email}`}
      />
      <Container>
        <S.CardUser>
          <S.Info>
            <S.Title>Мой профиль</S.Title>
            <div>
              <S.Ptext>Логин: {email}</S.Ptext>
              {/* <S.Ptext>Пароль: 4fkhdj880d</S.Ptext> */}
            </div>

            <S.Edit>
              <ModalControl modal={<ModalNewLogin />}>
                <Button $primary type="submit">
                  Редактировать логин
                </Button>
              </ModalControl>
              <ModalControl modal={<ModalNewPassword />}>
                <Button $primary type="submit">
                  Редактировать пароль
                </Button>
              </ModalControl>
            </S.Edit>
          </S.Info>
          <S.Title>Мои курсы</S.Title>

          <S.Courses>
            {courses.map((course) => (
              <CourseItem key={course.id} showBtn {...course} />
            ))}
          </S.Courses>
        </S.CardUser>
      </Container>
    </>
  );
};
export default Profile;
