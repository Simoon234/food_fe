import styled from "styled-components";
import logo from '../assets/images/home.svg';
import {HeaderComponent} from "../components/HOME/Header";
import {LandingPage} from "../components/HOME/LandingPage";

export const Home = () => {
    return (
        <>
            <BackgroundImage>
                <div className='bg layer'></div>
            </BackgroundImage>
            <LandingPageContainer>
                <HeaderComponent/>
                <LandingPage/>
            </LandingPageContainer>
        </>

    )
}

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

export const LandingPageContainer = styled.div`
  height: 100vh;
  max-width: 100%;
`