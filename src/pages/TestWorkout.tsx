import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';
import { Loader } from '../components/plug/Loader';
import { Container } from '../styled/components';
import { useForm } from 'react-hook-form';
import { IExercise } from '../interfaces/interfaces';
import { Input } from '../components/form/Input';
import { InputField } from '../components/form/InputField';
import { fetchUserData, saveExerciseReps } from '../services/userDataService';
import { useAuth } from '../hooks/useAuth';
import { useAppDispatch } from '../store/store';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import * as S from '../components/ProgressBar/S.ProgressBar';

type Form = {
  [key: string]: IExercise;
};

export const TestWorkout: FC = () => {
  const { id: userId } = useAuth();
  const dispatch = useAppDispatch();
  const { courseId, workoutId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const { courses, status, error } = useUserData();

  const course = courses?.find((item) => item && item.id == courseId);

  const workout = course?.workouts.find((item) => item.id == workoutId);

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const onSubmit = (data: Form) => {
    if (courseId && userId && workoutId && workout) {
      saveExerciseReps(userId, courseId, workoutId, data)
        .then(() => {
          console.log('Saved exercise reps successfully');
          userId && dispatch(fetchUserData(userId));
          reset();
        })
        .catch((error) => {
          console.error('Failed to save exercise reps:', error);
        });
    } else {
      alert('ids not found');
    }
  };

  /*массив цветов шкалы прогресса*/
  const progressData = [
    { bgcolor: '#565EEF' },
    { bgcolor: '#FF6D00' },
    { bgcolor: '#9A48F1' },
    { bgcolor: '#565EEF' },
  ];
  return (
    <Container>
      {JSON.stringify(workout)}
      <S.ProgressBlock>
        <S.Title> {workout?.title} </S.Title>
        {workout?.exercises.map((item, i) => (
          <>
            <S.ProgressMain>
              <S.TextBlockP> {item.name} </S.TextBlockP>
              <ProgressBar
                key={i}
                bgcolor={progressData[i].bgcolor}
                completed={item.myReps} max_completed={item.reps}
              />
            </S.ProgressMain>
          </>
        ))}
      </S.ProgressBlock>
      <form onSubmit={handleSubmit(onSubmit)}>
        {workout?.exercises.map((item, i) => (
          <div key={i}>
            <label htmlFor={`exercises.${i}.myReps`}>{item.name}</label>
            <InputField error={errors[i]?.myReps?.message}>
              <Input
                type="number"
                id={`exercises.${i}.myReps`}
                {...register(`${i}.myReps`, {
                  required: {
                    value: true,
                    message: 'Required',
                  },
                  max: {
                    value: item.reps,
                    message: `Cannot exceed maximum reps of ${item.reps}`,
                  },
                  min: {
                    value: 0,
                    message: `Cannot be less than 0`,
                  },
                })}
              />
            </InputField>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
