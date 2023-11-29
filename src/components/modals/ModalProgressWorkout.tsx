import { IconProgressHand } from '../../icons/index';
import { FC } from 'react';
import { useModal } from '../../hooks/useModal';
import styled from '@emotion/styled';

type Props = {
	courseId: string | undefined;
};

export const ModalProgressWorkout: FC<Props> = ({ courseId }) => {
	const { open } = useModal(`progress-${courseId}`);
	return (
		<BoxProgress onClick={open} id={`progress-${courseId}`}>
			<p>Ваш прогресс засчитан!</p>
			<IconProgressHand />
		</BoxProgress>
	);
};

const BoxProgress = styled.div`
	font-size: 40px;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
