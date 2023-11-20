import styled from "@emotion/styled";

export const CardUser = styled.div`
  min-height: 100vh;
  width: 72.5rem;
  padding: 4.69rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 4.6875rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 4.875rem;
`;
export const Title = styled.div`
  color: #000;
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.5rem;
`;
export const Ptext = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
`;
export const Edit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
`;

export const CourseCardBlock = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 0 0 2.5rem 0;
`;
export const CourceCard = styled.div`
  width: 22.5rem;
  height: 30rem;
  border-radius: 1.87488rem;
  background: #fff;
  box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
  background-image: url(https://raw.githubusercontent.com/larikovweb/skypro-fitness-pro/31db720456b57a63dc0c83703e59b3d5f7c3ba41/public/img/profcard1.png);
`;
export const CourceCardTitle = styled.div`
  padding: 1.88rem 2.5rem 1.8rem 1.8rem;
`;
export const CourceCardTitleP = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Abhaya Libre ExtraBold;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 110%; /* 2.475rem */
  letter-spacing: -0.03125rem;
`;

export const CourceCardLink = styled.a`
  margin: 0 0 1.69rem 1.88rem;
  padding: 0.625rem 1.25rem;
  border-radius: 2.875rem;
  gap: 0.5rem;
  background: #c7e957;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 1.4375rem */
  letter-spacing: -0.00313rem;

  &:hover {
    background: #daf289;
  }
  &:active {
    background: #ebffab;
  }
`;
