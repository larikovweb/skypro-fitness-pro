import styled from '@emotion/styled';

export const AuthForm = styled.form`
  width: 23rem;
  height: 27rem;

  display: flex;
  flex-flow: column nowrap;
  gap: 2.5rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;

  padding: 2rem 2.5rem;
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.25rem;
`;
