import styled from "styled-components";
import {SingleCard} from "./SingleMenu";

export const AllMenu = () => {
    return (
        <AllMenusContainer>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
        </AllMenusContainer>
    )
}

export const AllMenusContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`
