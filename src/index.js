import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

import App from '@containers/App';
import store from "@store/store";
import ThemeProvider from "@context/ThemeProvider";
import {REPO_NAME} from "@constants/repo";

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <Router basename={`/${REPO_NAME}/`}>
                    <App/>
                </Router>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
