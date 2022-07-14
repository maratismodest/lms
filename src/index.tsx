import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import App from './App';
import {store} from './app/store';
import Css from "./components/Css/Css";
import Html from "./components/Html/Html";
import Javascript from "./components/Javascript/Javascript";
import MainLayout from "./components/MainLayout";
import './index.scss';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="html" element={<Html/>}/>
                        <Route path="css" element={<Css/>}/>
                        <Route path="javascript" element={<Javascript/>}/>
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
