import styled from "styled-components";
import cart from "../images/wave-cart.svg";

export const Image = styled.div`
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    aspect-ratio: 960/550;
    min-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .img {
    background-image: url(${cart})
  }

`