import Button from "@mui/material/Button";
import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import {db} from "./components/Header/Header";

function App() {
    return (
        <>
            <h1>База знаний для разработчика</h1>
            <ul>
                {db.map(lesson =>
                    <li key={lesson.id} style={{marginBottom: 16}}>
                        <Button component={Link} to={lesson.link} color="primary" variant={"contained"}>
                            {lesson.name}
                        </Button>
                    </li>
                )}
            </ul>
        </>
    );
}

export default App;
