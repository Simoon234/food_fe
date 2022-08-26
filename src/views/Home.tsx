import styled from "styled-components";
import logo from '../assets/images/home.svg';

export const Home = () => {
    return (
        <>
            <BackgroundImage>
                <div className='spacer layer'></div>
            </BackgroundImage>
            <LandingPageContainer>
                <header>
                    <h1>Logo</h1>
                </header>
            </LandingPageContainer>
        </>

    )
}

export const BackgroundImage = styled.div`
  .spacer {
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
    fill: red;
  }
`

export const LandingPageContainer = styled.div`
  height: 100vh;

  header {
    position: absolute;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`