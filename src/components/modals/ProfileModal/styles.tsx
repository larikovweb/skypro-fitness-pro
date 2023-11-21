import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 17.375rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.4rem;
`;

export const Form = styled.form`
  > input {
    &:not(:last-of-type) {
      margin-bottom: 2.35rem;
    }
  }
  > button {
    margin-top: 3.13rem;
  }
`;

export const Label = styled.div`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.00313rem;
  margin-bottom: 1.25rem;
`;
