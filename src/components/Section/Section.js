import styled from "styled-components";

export const Container = styled.div`
  width: 580px;
  height: auto;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 24px;

  padding: 24px 32px 32px;
  
  background: ${({ theme }) => theme.COLORS.SECTION_BG_COLOR};

  
  > h1 {
    
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 160%;
      letter-spacing: -0.47px;

      color: ${({ theme }) => theme.COLORS.H1_PARAGRAPHY_COLOR};
  }

  > h2 {
  
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.18px;
    color: ${({ theme }) => theme.COLORS.H2_PARAGRAPHY_COLOR};

  }
  > ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 302px;
    height: 120px;

    margin-top: 24px;

  }

  
`;