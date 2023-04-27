import styled from "styled-components";

export const Container = styled.div`
  width: 580px;
  height: 854px;
  /* border: 1px solid red; */

  margin: 32px auto 44px;

  > main {
    animation: fromBottom .7s backwards;

    main:nth-child(1) {
      animation-delay: 0;
    }

    main:nth-child(2) {
        animation-delay: .3s;
    }

    main:nth-child(3) {
        animation-delay: .6s;
    }
  }

`;