import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

const rootElement = document.getElementById('root') as HTMLElement
const app = (<React.StrictMode>
                <HashRouter>
                    <App/>
                </HashRouter>
            </React.StrictMode>)

const root = ReactDOM.createRoot(rootElement)
root.render(app)
