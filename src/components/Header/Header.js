import styled from "styled-components";

export const Container = styled.div`
  width: 580px;
  height: 152px;

`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.COLORS.SVG_INSTAGRAM};
  }

`;

