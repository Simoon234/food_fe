import styled from "styled-components";
import {BackgroundImage} from "../assets/styled";
import {HeaderComponent} from "../components/homePage/Header";
import {LandingPage} from "../components/homePage/LandingPage";
import {SectionLayout} from "../components/common/Section";
import {About} from "../components/about/About";
import {Menu} from "../components/menu/Menu";
import {Reservation} from "../components/reservation/Reservation";

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
            <SectionLayout>
                <About/>
            </SectionLayout>
            <SectionLayout>
                <Menu/>
            </SectionLayout>
            <SectionLayout>
                <Reservation/>
            </SectionLayout>
            <SectionLayout>
                <h1>Elo</h1>
            </SectionLayout>
        </>

    )
}

export const LandingPageContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
`