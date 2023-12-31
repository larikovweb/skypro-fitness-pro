import styled from '@emotion/styled';

export const Main = styled.div`
  background-color: #271a58;
  padding-bottom: 3.75rem;
  position: relative;
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBlockH3 = styled.h3`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 23px */
  letter-spacing: -0.00313rem;
  opacity: 0.5;
  margin-bottom: 1.06rem;
`;

export const TitleBlockH1 = styled.h1`
  color: #f4f4ff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 3.75rem;
  font-style: normal;
  line-height: 91.5%; /* 54.9px */
  letter-spacing: -0.07306rem;
  max-width: 51rem;
`;

export const SkyfintessSlogan = styled.img`
  width: 15.48rem;
  height: 15.27rem;
`;

export const CenterBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.31rem;
  row-gap: 2.75rem;
  margin-bottom: 2.12rem;
  a {
    transition: opacity 0.3s, transform 0.3s;
    &:hover {
      opacity: 0.85;
      transform: scale(0.99);
    }
  }
`;

export const ScrollUpBtn = styled.button`
  cursor: pointer;
  padding: 0.4375rem 1.5rem 0.5625rem 1.5rem;
  margin: 0 auto;
  display: block;
  border-radius: 2.875rem;
  background: #c7e957;
  height: 3rem;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1.5rem;
  font-style: normal;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.00625rem;
  transition: background 0.3s;

  &:hover {
    background: #daf289;
  }

  &:active {
    background: #ebffab;
  }
`;
