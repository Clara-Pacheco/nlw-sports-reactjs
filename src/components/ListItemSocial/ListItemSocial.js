import styled from "styled-components";

export const Container =styled.li`
  margin-top: 10px;
  gap: 16;

  > a {
      > img {
        width: 45px;
        height: 45px;

        &:hover {
          transform: scale(1.1)
        }

       }
    } 
`;
