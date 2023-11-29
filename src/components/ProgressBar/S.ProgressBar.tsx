import styled from '@emotion/styled';

interface Props {
  progress?: number | string | null;
  bgcolor?: string;
}

export const Wrapper = styled.div`
  border-radius: 1.875rem;
  background: #f2f2f2;
  flex-direction: column;
  padding: 2.25rem 2.75rem 2rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Bars = styled.div`
  display: flex;
  flex-direction: column;
  > *:not(:last-child) {
    margin-bottom: 1.63rem;
  }
`;

export const Block = styled.div<Props>`
  width: 100%;
  background-color: #edecff;
  border-radius: 1.375rem;
  overflow: hidden;
  border: 0.125rem solid ${({ bgcolor }) => bgcolor};
`;

export const Result = styled.div<Props>`
  width: ${({ progress }) => (progress ? `${progress}%` : `100%`)};
  background-color: ${({ progress, bgcolor }) => (progress ? bgcolor : `#fff`)};
  transition: width 0.3s, background-color 0.3s;
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
