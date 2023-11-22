import styled from '@emotion/styled';
export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.s};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  line-height: 3rem;

  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const InputError = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  left: 0;
  top: 42px;
  color: ${({ theme }) => theme.colors.coral};
  font-size: 0.8rem;
  font-weight: 400;
`;
