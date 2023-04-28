import styled from "styled-components";

export const Container =styled.li`
  margin-top: 10px;
  gap: 16;

  > a {
      > img {
      width: 80px;
      height: 80px;

      border: 1px solid ${({ theme }) => theme.COLORS.BORDER_CHANNEL_IMG};

      border-radius: 50%;

        &:hover {
          transform: scale(1.1)
        }

       }
    } 
`;
