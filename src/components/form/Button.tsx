import styled from '@emotion/styled';

interface Props {
  $primary?: boolean;
  $secondary?: boolean;
  $width?: number;
  $pending?: boolean;
}

export const createButton = styled.button<Props>`
  color: ${({ $primary }) => ($primary ? '#fff' : '#000')};
  background-color: ${({ $primary }) => ($primary ? '#580EA2' : '#fff')};
  width: ${({ $width }) => ($width ? `${$width}rem` : `17rem`)};
  min-width: 17rem;
  padding: 0.75rem 1rem 1rem;
  font-family: inherit;
  font-size: 1.25rem;
  border-radius: 5rem;
  cursor: pointer;
  border: ${({ $secondary }) => ($secondary ? '0.0625rem solid #D0CECE' : null)};
  &:hover {
    background: ${({ $primary }) => ($primary ? '#3F007D' : '#F4F5F6')};
  }
  &:active {
    background: ${({ $primary }) => ($primary ? '#271A58' : '#D0CECE')};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #d0cece;
  }
`;

/*  export const Button: FC = (props: Props) => {
  return <Container {...props}></Container>;
}; 
 */
