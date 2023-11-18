import styled from "@emotion/styled";

export const MainHeaderBlock = styled.div`
  display: flex;
  padding-top: 1.87rem;
  gap: 54rem;
`;

export const SkyfintessLogo = styled.img`
    width: 13.75rem;
    height: 2.1875rem;
    flex-shrink: 0;
`;

export const LoginButton = styled.button`
    display: inline-flex;
    padding: 0.3125rem 1rem 0.4375rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 2.875rem;
    background: #140D40;
    width: 4.8rem;
    height: 2.25rem;
    color: #ffffff;
    text-align: center;
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