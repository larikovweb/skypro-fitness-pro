import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.purpleNormal};
`;
