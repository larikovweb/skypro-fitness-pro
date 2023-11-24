import styled from '@emotion/styled';

export const CardUser = styled.div`
  min-height: 100vh;
  padding: 4.69rem 0 0 0;
  margin-bottom: 4.6875rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.875rem;
`;
export const Title = styled.div`
  color: #000;
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.5rem;
  margin-bottom: 2.5rem;
`;
export const Ptext = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;
export const Edit = styled.div`
  display: grid;
  gap: 1.25rem;
  margin-top: 2.5rem;
`;

export const Courses = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`;
