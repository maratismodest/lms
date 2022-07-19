import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams} from "react-router-dom";
import remarkGfm from "remark-gfm";
import {LessonProps, lessonsBase} from "../Course/Course";

const Lesson = () => {

    const [lesson, setLesson] = useState<LessonProps | undefined>(undefined)

    const {name, id} = useParams()

    useEffect(() => {
        const lesson = lessonsBase.find(x => x.name === id)
        setLesson(lesson)

    }, [name, id])

    if (!lesson) {
        return null
    }


    console.log('name, id', name, id)

    return (
        <div>
            <ReactMarkdown children={lesson.markdown} remarkPlugins={[remarkGfm]}/>
        </div>
    );
};

export default Lesson;
