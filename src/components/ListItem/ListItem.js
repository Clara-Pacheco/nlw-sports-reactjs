import styled from "styled-components";

export const Container =styled.li`

  gap: 16;

  > a {
      > img {
      width: 90px;
      height: 120px;

      border-radius: 8px;

        &:hover {
        transform: scale(1.1)
      }

       }
    } 
`;
