import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useUserData } from '../../hooks/useUserData';
import { Loader } from '../../components/plug/Loader';
import { Container } from '../../styled/components';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { Button } from '../../components/form/Button';
import * as S from './styles';
import { ModalControl } from '../../components/modals/ModalControl';
import { ModalWorkout } from '../../components/modals/ModalWorkout';

export const Workout: FC = () => {
  const { courseId, workoutId } = useParams();

  const { courses, status, error } = useUserData();

  const course = courses?.find((item) => item && item.id == courseId);

  const workout = course?.workouts.find((item) => item.id == workoutId);

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  function getYoutubeEmbedUrl(url: string | undefined) {
    const videoId = url && url.split('https://youtu.be/')[1];
    return 'https://www.youtube.com/embed/' + videoId;
  }

  const title = workout?.title.split(' / ')[0];
  const descr = workout?.title.split(' / ').slice(1).join(' / ');

  return (
    <Container>
      <S.Title>{title}</S.Title>
      <S.Descr>{descr}</S.Descr>
      <S.Video>
        <iframe
          src={getYoutubeEmbedUrl(workout?.url)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </S.Video>
      <S.Wrapper>
        <S.Block>
          <S.Label>Упражнения</S.Label>
          <S.List>
            {workout?.exercises.map((item, i) => (
              <li key={i}>
                {item.name} ({item.reps} повторений)
              </li>
            ))}
          </S.List>
          <ModalControl
            id={`workout-${courseId}-${workoutId}`}
            modal={<ModalWorkout courseId={courseId} workoutId={workoutId} workout={workout} />}>
            <Button $primary>Заполнить свой прогресс</Button>
          </ModalControl>
        </S.Block>
        {workout && <ProgressBar workoutId={workoutId} exercises={workout?.exercises} />}
      </S.Wrapper>
    </Container>
  );
};
