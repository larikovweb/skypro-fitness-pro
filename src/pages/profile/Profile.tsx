import { FC, useEffect } from 'react';
import { Container } from '../../styled/components';
import { Button } from '../../components/form/Button';
import { HelmetHead } from '../../components/seo/HelmetHead';
import * as S from './styles';
import { ModalNewPassword } from '../../components/modals/ProfileModal/ModalNewPassword';
import { ModalControl } from '../../components/modals/ModalControl';
import { ModalNewLogin } from '../../components/modals/ProfileModal/ModalNewLogin';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../store/store';
import { Loader } from '../../components/plug/Loader';
import { fetchUserData } from '../../services/userDataService';
import { useUserData } from '../../hooks/useUserData';
import { CourseItem } from '../../components/CourseItem/CourseItem';
import { Link } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';


const Profile: FC = () => {
  const { email, id } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    id && dispatch(fetchUserData(id));
  }, [dispatch, id]);

  const { courses, status, error } = useUserData();

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
            {courses.length ? (
              courses.map((course) => <CourseItem key={course.id} showBtn {...course} />)
            ) : (
              <S.Empty>
                <b>Пока нет курсов</b>
                <Link to={MAIN_ROUTE}>
                  <Button $primary>Перейти к курсам</Button>
                </Link>
              </S.Empty>
            )}
          </S.Courses>
        </S.CardUser>
      </Container>
    </>
  );
};
export default Profile;
