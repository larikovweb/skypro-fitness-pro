import { TitleImages } from '../../assets/img/coursepage';
import * as S from './styles';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { PhoneSvgImage } from '../../icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourses } from '../../hooks/useCourses';
import { useAuth } from '../../hooks/useAuth';
import { HelmetHead } from '../../components/seo/HelmetHead';
import { Loader } from '../../components/plug/Loader';
import { saveCourses } from '../../services/userDataService';
import { ICourse } from '../../interfaces/interfaces';

const Course: FC = () => {
  const courseId = useParams().id;
  const { id: userId } = useAuth();
  const navigate = useNavigate();

  const { data, status, error } = useCourses();
  const course = data.find((course) => course.id.toString() === courseId) as ICourse;

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const suitableForArray = course?.suitableFor;
  const focusArray = course?.focus;
  const images: Record<string, string> = {
    '1': TitleImages.TitleImage1,
    '2': TitleImages.TitleImage2,
    '3': TitleImages.TitleImage3,
    '4': TitleImages.TitleImage4,
    '5': TitleImages.TitleImage5,
  };

  const buyCourse = () => {
    if (userId && course) {
      saveCourses(userId, course);
      navigate(`/profile`);
    } else {
      navigate(`/register`);
    }
  };

  return (
    <>
      <HelmetHead
        title={`Тренировка ${course?.name}`}
        descr={`Начните заниматься спортом и улучшите качество жизни`}
      />
      <S.CoursePage>
        <Container>
          <S.TitleBlock>
            <S.TitleBlockImage src={images[course?.id.toString()]} />
            {/* <S.TitleBlockImage src={images[2]} /> */}
            <S.TitleBlockH1>{course?.name}</S.TitleBlockH1>
          </S.TitleBlock>

          <S.TitleH2>Подойдет для вас, если:</S.TitleH2>
          <S.NumberedList>
            {suitableForArray?.map((value, index) => {
              return (
                <S.NumberedListItem key={index}>
                  <S.Circle>
                    <S.CircleNumber>{index + 1}</S.CircleNumber>
                  </S.Circle>
                  <S.DescriptionText>{value}</S.DescriptionText>
                </S.NumberedListItem>
              );
            })}
          </S.NumberedList>

          <S.TitleH2>Направления:</S.TitleH2>
          <S.PracticeList>
            {focusArray?.map((value, index) => {
              return <S.PracticeListItem key={index}>{value}</S.PracticeListItem>;
            })}
          </S.PracticeList>

          <S.BenefitText>{course?.description}</S.BenefitText>

          <S.BookBlock>
            <S.BookBlockText>
              <S.BookBlockH3>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором
                направления и тренера, с которым тренировки принесут здоровье и радость!
              </S.BookBlockH3>
              <S.MyButton onClick={buyCourse} $primary>
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
