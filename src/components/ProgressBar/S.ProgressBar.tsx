import styled from '@emotion/styled';

interface Props {
  progress?: number;
  bgcolor?: string;
}

export const Block = styled.div<Props>`
width: 70%;
  background-color: #edecff;
  border-radius: 50px;
  margin: 50px;
  overflow: hidden;
  border: 2px solid ${({ bgcolor }) => (bgcolor ? bgcolor : `#fff`)};
`;

export const Result = styled.div<Props>`
  width: ${({ progress }) => (progress ? `${progress}%` : `0%`)};
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : ``)};
`;

export const Label = styled.span<Props>`
  display: flex;
  color: #fff;
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

export const TextBlockP = styled.p``;

export const TextBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;`;
export const ProgressBlock = styled.div`
border-radius: 1.875rem;
background: #F2F2F2;
flex-direction: column;
`

export const Title = styled.p`
  color: #000;
font-variant-numeric: lining-nums proportional-nums;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: 2.5rem; /* 125% */
`


export const ProgressBlockMain = styled.div`
  

`
export const ProgresMain =  styled.div`

`
