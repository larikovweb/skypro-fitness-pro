import { FC, useState } from 'react';
import { Container } from '../../styled/components';
import { Button } from '../../components/form/Button';
import { HelmetHead } from '../../components/seo/HelmetHead';
import * as S from './styles';
import { CourseImg } from '../../assets/img/courses';
import { CourseItem } from '../../components/CourseItem/CourseItem';
import { ModalNewPassword } from '../../components/modals/ProfileModal/ModalNewPassword';
import { ModalControl } from '../../components/modals/ModalControl';
import { ModalNewLogin } from '../../components/modals/ProfileModal/ModalNewLogin';

const user = 'user';
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
];

const Profile: FC = () => {
  const [openNewPass, setOpenNewPass] = useState(false);

  return (
    <>
      <HelmetHead
        title={user ? `Ваш профиль` : `Страница пользователя ${user}`}
        descr={user ? `Ваш профиль` : `Страница пользователя ${user}`}
      />
      <Container>
        <S.CardUser>
          <S.Info>
            <S.Title>Мой профиль</S.Title>
            <div>
              <S.Ptext>Логин: {user}</S.Ptext>
              <S.Ptext>Пароль: 4fkhdj880d</S.Ptext>
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
            {CoursesArray.map((course) => (
              <CourseItem key={course.id} showBtn {...course} />
            ))}
          </S.Courses>
        </S.CardUser>
      </Container>
    </>
  );
};
export default Profile;
