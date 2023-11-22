import styled from '@emotion/styled';
export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 1160px;
  padding: 140px 0;
`;

export const PageHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 30px;
`;

export const ProgressBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Workouts = styled.div`
  max-width: 425px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const WorkoutsHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const WorkoutList = styled.ul`
  padding-left: 30px;
  margin-bottom: 10px;
`;
