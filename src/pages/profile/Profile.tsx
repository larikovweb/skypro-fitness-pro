import { FC, useEffect } from 'react';
import { Container } from '../../styled/components';
import { Button } from '../../components/form/Button';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
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
import * as Styled from './S.CursesPayPage';

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
  /* Полченные данные прогресса */
  const progressData = [
    { bgcolor: '#565EEF', completed: 52,text:'Наклоны вперед' },
    { bgcolor: '#FF6D00', completed: 45 ,text:'Наклоны назад'},
    { bgcolor: '#9A48F1', completed: 100 , text:'Поднятие ног, согнутых в коленях'},
  ];
  const titleProgress = 'Мой прогресс по тренировке 2:';
  return (
    <>
      <HelmetHead
        title={`Страница пользователя ${email}`}
        descr={`Страница пользователя ${email}`}
      />
      <Container>
        <S.CardUser>
          <Styled.ProgressBlock>
            <Styled.Title> {titleProgress}</Styled.Title>
            <Styled.ProgresMain>
            <Styled.TextBlock>
              <Styled.TextBlockP>Наклоны вперед</Styled.TextBlockP>
              <Styled.TextBlockP> Наклоны назад</Styled.TextBlockP>
              <Styled.TextBlockP> Поднятие ног, согнутых в коленях</Styled.TextBlockP>
            </Styled.TextBlock>
            <Styled.ProgressBlockMain>
              {progressData.map((item, idx) => (
                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} text={item.text}/>
                
              ))}
            </Styled.ProgressBlockMain>
            </Styled.ProgresMain>
          </Styled.ProgressBlock>

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
