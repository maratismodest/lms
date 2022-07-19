import axios from "axios";
import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams} from "react-router-dom";
import remarkGfm from "remark-gfm";
import {LessonProps} from "../Course/Course";


const getLesson = async (name: string, id: string) => {
    try {
        const res = await axios.get('http://localhost:8080/api/course/' + name + '/' + id)
        return res.data as LessonProps
    } catch (e) {
        console.log('e', e)
    }
}

const Lesson = () => {

    const [lesson, setLesson] = useState<LessonProps | undefined>(undefined)

    const {name, id} = useParams()

    useEffect(() => {
        getLesson(name as string, id as string).then((lesson) => setLesson(lesson))

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
