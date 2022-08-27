import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import {Home} from "./views/Home";

function App() {
    return (
        <Container>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
            </Routes>
        </Container>
    );
}

const Container = styled.div`
  width: 80%;
  max-width: 1170px;
  margin: 0 auto;

  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
  @media only screen and (min-width: 2000px) {
    width: 1600px;
  }
`;

export default App;
