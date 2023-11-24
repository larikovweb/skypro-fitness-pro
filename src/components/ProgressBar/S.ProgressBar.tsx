import styled from '@emotion/styled';

interface Props {
  progress?: number;
  bgcolor?: string;
}

export const Block = styled.div<Props>`
  height: 2.25rem;
  width: 100%;
  background-color: #EDECFF;
  border-radius: 50px;
  margin: 50px;
  overflow: hidden;
  border: 2px solid ${({ bgcolor}) => (bgcolor ? bgcolor :`#fff`)}
`;

export const Result = styled.div<Props>`
  width: ${({ progress }) => (progress ? `${progress}%` : `0%`)};
  background-color: ${({ bgcolor}) => (bgcolor ? bgcolor : ``)};
`;

export const Label = styled.span<Props>`
display: flex;
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    padding-right: 1rem;
    right: 1rem;
    flex-direction: row;
    justify-content: flex-end;
`;
