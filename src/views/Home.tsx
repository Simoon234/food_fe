import styled from "styled-components";
import {BackgroundImage} from "../assets/styled";
import {LandingPage} from "../components/homePage/LandingPage";
import {SectionWrapper} from "../components/common/Section";
import {About} from "../components/about/About";
import {Menu} from "../components/menu/Menu";
import {Reservation} from "../components/reservation/Reservation";
import {SpecialMenu} from "../components/special/SpecialMenu";
import {Reviews} from "../components/reviews/Reviews";

export const Home = () => {
    return (
        <>
            <BackgroundImage>
                <div className='bg layer'></div>
            </BackgroundImage>
            <LandingPageContainer>
                <LandingPage/>
            </LandingPageContainer>
            <SectionWrapper>
                <About/>
            </SectionWrapper>
            <SectionWrapper>
                <Menu/>
            </SectionWrapper>
            <SectionWrapper>
                <Reservation/>
            </SectionWrapper>
            <SectionWrapper>
                <SpecialMenu/>
            </SectionWrapper>
            <SectionWrapper>
                <Reviews/>
            </SectionWrapper>
        </>

    )
}

export const LandingPageContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
`