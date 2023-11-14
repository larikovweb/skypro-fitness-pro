import styled from "@emotion/styled";

export const profileCardUser = styled.div`
  min-height: 100vh;
  width: 72,5rem;
  padding: 8.75rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 4,6875rem;
`;
export const profileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 4,6875rem;
`;
export const profileTitle = styled.div`
  width: 19rem;
  height: 3.5rem;
  color: #000;
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.5rem;
`;
export const profileP = styled.p`
font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
`;
export const profileEdit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
`;

export const profileCourseCardBlock = styled.div`
display: inline-flex;
align-items: flex-start;
gap: 2.5rem;
padding: 0 0 2.5rem 0;
`
export const profileCourceCard = styled.div`
width: 22.5rem;
height: 30rem;
border-radius: 1.87488rem;
background: #FFF;
box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.10), 10px -10px 16px 0px rgba(0, 0, 0, 0.10);
background-image: url(https://raw.githubusercontent.com/larikovweb/skypro-fitness-pro/31db720456b57a63dc0c83703e59b3d5f7c3ba41/public/img/profcard1.png);
`
export const profileCourceCardTitle = styled.div`
  
padding: 1.88rem 2.5rem 1.8rem 1.8rem;

`
export const profileCourceCardTitleP = styled.p`
color: #000;
font-variant-numeric: lining-nums proportional-nums;
font-family: Abhaya Libre ExtraBold;
font-size: 2.25rem;
font-style: normal;
font-weight: 800;
line-height: 110%; /* 2.475rem */
letter-spacing: -0.03125rem;

`

export const profileCourceCardLink = styled.a`

margin: 0 0 1.69rem 1.88rem;
    padding: 0.625rem 1.25rem;
border-radius: 2.875rem;
gap: 0.5rem;
background: #C7E957;
color: #000;
text-align: center;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: 115%; /* 1.4375rem */
letter-spacing: -0.00313rem;

&:hover{
  background: #DAF289;;
}
&:active{
  background:#EBFFAB;
}
`