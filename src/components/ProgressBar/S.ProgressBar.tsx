import styled from '@emotion/styled';

interface Props {
  progress?: number | null;
  bgcolor?: string;
}

export const ProgressBlock = styled.div`
  border-radius: 1.875rem;
  background: #f2f2f2;
  flex-direction: column;
`;
export const Title = styled.p`
  padding: 2.5rem 5rem;
  text-align: center;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem; /* 125% */
`;
export const ProgressMain = styled.div`
  display: flex;
  padding: 0 2.44rem 1.62rem 2.75rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextBlockP = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 133.333% */
`;

export const Block = styled.div<Props>`
  width: 100%;
  background-color: #edecff;
  border-radius: 50px;
  margin: 50px;
  overflow: hidden;
  border: 2px solid ${({ bgcolor }) => bgcolor};
`;

export const Result = styled.div<Props>`
  width: ${({ progress }) => (progress ? `${progress}%` : `100%`)};
  background-color: ${({ progress, bgcolor }) => (progress ? bgcolor : `#fff`)};
`;

export const Label = styled.span<Props>`
  display: flex;
  color: ${({ progress, bgcolor }) => (progress ? '#fff' : bgcolor)};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  padding-right: 1rem;
  right: 1rem;
  flex-direction: row;

  ${({ progress }) => (progress ? `justify-content: flex-end;` : `justify-content:center`)};
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
