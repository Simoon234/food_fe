import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import {Memo} from "./components/notification/Notification";
import {Home} from "./views/Home";
import {Basket} from "./views/basket/Cart";
import {Layout} from "./layouts/Layout";
import {Contact} from "./views/Contact/Contact";

function App() {
    return (
        <Container>
            <Memo/>
            <Layout>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/basket'} element={<Basket/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                </Routes>
            </Layout>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
