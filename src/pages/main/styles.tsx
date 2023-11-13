import styled from "@emotion/styled";

export const Main = styled.div`
  max-width: 1920px;
  background-color: #271a58;
  padding-left: 140px;
  padding-right: 140px;
  padding-bottom: 60px;
`;

export const MainHeaderBlock = styled.div`
  display: flex;
  padding-top: 30px;
  gap: 864px;
`;

export const SkyfintessLogo = styled.img`
  width: 220px;
  height: 35px;
  color: #ffffff;
`;

export const LoginButton = styled.button`
  display: inline-flex;
  width: 77px;
  height: 36px;
  padding: 5px 16px 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 46px;
  background: #140d40;
  color: #ffffff;
  text-align: center;
  font-family: StratosSkyeng, sans-serif;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:hover {
    background: #2d1f79;
  }

  &:active {
    background: #3b29a1;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  padding-right: 140px;
`;

export const TitleBlockH3 = styled.h3`
  color: var(--monochrome-white-20, #fff);
  font-family: StratosSkyeng, sans-serif;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 23px */
  letter-spacing: -0.05px;
  opacity: 0.5;
  margin-bottom: 13px;
`;

export const TitleBlockH1 = styled.h1`
  color: #f4f4ff;
  font-family: StratosSkyeng, sans-serif;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 60px;
  font-style: normal;
  line-height: 91.5%; /* 54.9px */
  letter-spacing: -1.169px;
  width: 930px;
`;

export const SkyfintessSlogan = styled.img`
  width: 220px;
  height: 180px;
  flex-shrink: 0;
  position: absolute;
  left: 1160px;
  top: 120px;
`;

export const CenterBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
  margin-top: 52px;
`;

export const CourseCard = styled.div`
  position: relative;
`;

export const CourseImage = styled.img`
  width: 360px;
  height: 480px;
  flex-shrink: 0;
  border-radius: 29.998px;
  box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 44px;
  position: relative;
`;

export const CourseName = styled.h2`
  width: 290px;
  height: 120px;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 110%; /* 39.6px */
  letter-spacing: -0.5px;
  position: absolute;
  top: 30px;
  left: 30px;
`;

export const ScrollUpBtn = styled.button`
  padding: 7px 24px 9px 24px;
  margin: 0 auto;
  display: block;
  border-radius: 46px;
  background: #c7e957;
  weigth: 147px;
  height: 48px;
  color: #000;
  font-family: StratosSkyeng, sans-serif;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.1px;

  &:hover {
    background: #daf289;
  }

  &:active {
    background: #ebffab;
  }
`;
