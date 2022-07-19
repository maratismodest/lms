import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import App from './App';
import {store} from './app/store';
import Course from "./components/Course/Course";
import Lesson from "./components/Lesson/Lesson";
import MainLayout from "./components/MainLayout";
import Quiz from "./components/Quiz/Quiz";
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
                        <Route path="/:name" element={<Course/>}/>
                        <Route path="/:name/:id" element={<Lesson/>}/>
                        <Route path="/:name/:id/quiz" element={<Quiz/>}/>
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
