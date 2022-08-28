import styled from "styled-components";
import logo from "../images/home.svg";

export const BackgroundImage = styled.div`
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    aspect-ratio: 960/420;
    min-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .layer {
    background-image: url(${logo});
  }
`