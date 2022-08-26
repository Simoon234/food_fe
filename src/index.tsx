import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCss from './global.css';
import {Theme} from "./components/Theme";
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Theme>
                <GlobalCss/>
                <App/>
            </Theme>
        </Router>
    </React.StrictMode>
);


