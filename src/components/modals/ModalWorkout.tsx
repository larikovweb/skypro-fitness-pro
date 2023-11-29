import { FC } from 'react';
import { ModalControl } from './ModalControl';
import { ModalProgressWorkout } from './ModalProgressWorkout';
import { IExercise, IWorkout } from '../../interfaces/interfaces';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../store/store';
import { useForm } from 'react-hook-form';
import { fetchUserData, saveExerciseReps } from '../../services/userDataService';
import { InputField } from '../form/InputField';
import { Input } from '../form/Input';
import { Button } from '../form/Button';
import styled from '@emotion/styled';
import { useModal } from '../../hooks/useModal';

type TForm = {
	[key: string]: IExercise;
};

type Props = {
	workoutId: string | undefined;
	courseId: string | undefined;
	workout: IWorkout | undefined;
};

export const ModalWorkout: FC<Props> = ({ courseId, workoutId, workout }) => {
	const { id: userId } = useAuth();
	const dispatch = useAppDispatch();
	const { close } = useModal(`workout-${courseId}-${workoutId}`);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TForm>();

	const onSubmit = (data: TForm, event: any) => {
		event.preventDefault();
		if (courseId && userId && workoutId && workout) {
			saveExerciseReps(userId, courseId, workoutId, data)
				.then(() => {
					console.log('Saved exercise reps successfully');
					close();
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

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Title>Мой прогресс</Title>
			{workout?.exercises.map((item, i) => (
				<div key={i}>
					<label htmlFor={`exercises.${i}.myReps`}>
						Сколько раз вы сделали {item.name.toLocaleLowerCase()}
					</label>
					<InputField error={errors[i]?.myReps?.message}>
						<Input
							placeholder="Введите значение"
							type="number"
							id={`exercises.${i}.myReps`}
							{...register(`${i}.myReps`, {
								max: {
									value: item.reps,
									message: `Максимальное количество повторений: ${item.reps}`,
								},
								min: {
									value: 0,
									message: `Минимальное количество повторений: 0`,
								},
							})}
						/>
					</InputField>
				</div>
			))}
			<ModalControl id={`workout-${courseId}`} modal={<ModalProgressWorkout courseId={courseId} />}>
				{' '}
				<Button $primary>Отправить</Button>
      </ModalControl>
 
		</Form>
	);
};

const Title = styled.div`
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2.5rem;
	text-align: center;
	margin-bottom: 1.87rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 22.75rem;
	> *:not(button) {
		width: 100%;
		margin-bottom: 1rem;
	}
	label {
		display: block;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.5rem; /* 133.333% */
		letter-spacing: -0.00313rem;
		margin-bottom: 1.25rem;
	}
`;
