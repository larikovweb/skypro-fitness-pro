import { TitleImage } from '../../assets/img/coursepage';
import * as S from './styles';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { PhoneSvgImage } from '../../icons';
import { useParams } from 'react-router-dom';
import { useCourses } from '../../hooks/useCourses';
import { saveUserCourses } from '../../services/courseService';
import { useAuth } from '../../hooks/useAuth';
import { HelmetHead } from '../../components/seo/HelmetHead';
import { Loader } from '../../components/plug/Loader';

const Course: FC = () => {
  const courseId = useParams().id;
  const { id: userId } = useAuth();

  const { data, status, error } = useCourses();
  const course = data.find((course) => course.id.toString() === courseId);

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(course);
  const suitableForArray = course?.suitableFor;

  return (
    <>
      <HelmetHead
        title={`Тренировка ${course?.name}`}
        descr={`Начните заниматься спортом и улучшите качество жизни`}
      />
      <S.CoursePage>
        <Container>
          <S.TitleBlock>
            <S.TitleBlockImage src={TitleImage} />
            <S.TitleBlockH1>{course?.name}</S.TitleBlockH1>
          </S.TitleBlock>

          <S.TitleH2>Подойдет для вас, если:</S.TitleH2>
          <S.NumberedList>
            {
              suitableForArray?.map((value, index) => {
                return (
                  <S.NumberedListItem key={index}>
                    <S.Circle>
                      <S.CircleNumber>{index + 1}</S.CircleNumber>
                    </S.Circle>
                    <S.DescriptionText>
                      {value}
                    </S.DescriptionText>
            </S.NumberedListItem>
                )
              })
            }
          </S.NumberedList>
          
          <S.TitleH2>Направления:</S.TitleH2>
          <S.PracticeList>
            <S.PracticeListItem key="1">Йога для новичков</S.PracticeListItem>
            <S.PracticeListItem key="2">Классическая йога</S.PracticeListItem>
            <S.PracticeListItem key="3">Йогатерапия</S.PracticeListItem>
            <S.PracticeListItem key="4">Кундалини-йога</S.PracticeListItem>
            <S.PracticeListItem key="5">Хатха-йога</S.PracticeListItem>
            <S.PracticeListItem key="6">Аштанга-йога</S.PracticeListItem>
          </S.PracticeList>

          <S.BenefitText>
            {course?.description}
          </S.BenefitText>

          <S.BookBlock>
            <S.BookBlockText>
              <S.BookBlockH3>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором
                направления и тренера, с которым тренировки принесут здоровье и радость!
              </S.BookBlockH3>
              <S.MyButton
                onClick={() => userId && courseId && saveUserCourses(userId, [courseId])}
                $primary>
                Записаться на тренировку
              </S.MyButton>
            </S.BookBlockText>
            <S.CallImage>
              <PhoneSvgImage />
            </S.CallImage>
          </S.BookBlock>
        </Container>
      </S.CoursePage>
    </>
  );
};

export default Course;
