import styled from "styled-components";
import logo from "../images/blob1.svg";

export const AboutBg = styled.div`
  position: relative;

  .bg {
    position: absolute;
    top: -80px;
    right: -140px;
    width: 350px;
    height: 350px;
    z-index: -2;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .layer {
    background-image: url(${logo});
  }
`