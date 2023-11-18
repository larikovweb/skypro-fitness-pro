import styled from "@emotion/styled";

export const Main = styled.div`
  max-width: 100rem;
  background-color: #271a58;
  padding-left: 8.75rem;
  padding-right: 8.75rem;
  padding-bottom: 3.75rem;
`;

export const TitleBlock = styled.div`
  display: flex;
  margin-top: 2.19rem;
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
  flex-shrink: 0;
  position: absolute;
  right: 4.75rem;
  top: 6.25rem;
`;

export const CenterBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.69rem;
  margin-top: 3.25rem;
  margin-bottom: 2.12rem;
`;

export const CourseCard = styled.div`
  position: relative;
`;

export const CourseImage = styled.img`
    width: 22.5rem;
    height: 30rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.1),
        10px -10px 16px 0px rgba(0, 0, 0, 0.1);
    position: relative;
`;

export const CourseName = styled.h2`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 110%; /* 39.6px */
  letter-spacing: -0.03125rem;
  position: absolute;
  top: 1.88rem;
  left: 1.88rem;
`;

export const ScrollUpBtn = styled.button`
    padding: 0.4375rem 1.5rem 0.5625rem 1.5rem;
    margin: 0 auto;
    display: block;
    border-radius: 2.875rem;
    background: #c7e957;
    weigth: 9.18rem;
    height: 3rem;
    color: #000;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 1.5rem;
    font-style: normal;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.00625rem;

    &:hover {
        background: #daf289;
    }

    &:active {
        background: #ebffab;
    }
`;
