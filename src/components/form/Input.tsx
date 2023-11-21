import styled from '@emotion/styled';
import { $mainFontColor } from '../../styled/variables';
import * as React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <MyInput {...props} />;
};

const MyInput = styled.input`
  width: 100%;
  padding: 0 0 0.5rem;
  border-bottom: 0.0625rem solid #d0cece;
  color: ${$mainFontColor};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.00313rem;
  transition: border-color 0.3s;
  &::placeholder {
    color: #d0cece;
    transition: color 0.3s;
  }
  &:focus {
    border-bottom: 0.0625rem solid ${$mainFontColor};
    &::placeholder {
      color: transparent;
    }
  }
`;
