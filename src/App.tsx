import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import {Memo} from "./components/notification/Notification";
import {Home} from "./views/Home";
import {Footer} from "./components/Footer";

function App() {
    return (
        <Container>
            <Memo/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
            <Footer/>
        </Container>
    );
}

const Container = styled.div`
  width: 80%;
  max-width: 1170px;
  margin: 0 auto;

  @media only screen and (max-width: 1300px) {
    width: 90%;
  }
  @media only screen and (min-width: 2000px) {
    width: 1600px;
  }
`;

export default App;
