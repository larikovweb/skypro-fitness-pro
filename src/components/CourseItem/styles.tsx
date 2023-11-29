import styled from '@emotion/styled';

export const CourseCard = styled.div`
  position: relative;
`;

export const CourseImage = styled.img`
  width: 22.5rem;
  height: 30rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.1), 10px -10px 16px 0px rgba(0, 0, 0, 0.1);
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

export const FurtherBtn = styled.div`
  display: inline-flex;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 5rem;
  background: #c7e957;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 1.4375rem */
  letter-spacing: -0.00313rem;
  position: absolute;
  left: 1.87rem;
  bottom: 1.69rem;
`;
