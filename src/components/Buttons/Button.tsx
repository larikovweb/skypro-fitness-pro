import styled from "@emotion/styled";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  width?: number;
}

export const Button = styled.button<Props>`
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  background-color: ${({ primary }) => (primary ? "#580EA2" : "#fff")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  min-width: 17rem;
  padding: 12px 1rem 16px;
  font-family: inherit;
  font-size: 1.25rem;
  border-radius: 5rem;
  cursor: pointer;
  border: ${({ secondary }) => (secondary ? "1px solid #D0CECE" : null)};
  &:hover {
    background: ${({ primary }) => (primary ? "#3F007D" : "#F4F5F6")};
  }
  &:active {
    background: ${({ primary }) => (primary ? "#271A58" : "#D0CECE")};
  }
  &:disabled {
    background-color: #d0cece;
  }
`;