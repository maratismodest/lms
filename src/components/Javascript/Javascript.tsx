import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
Основные типы: string ('string'), number (100500), array ([1,2,3,4]), object ({key1: value1, key2: value2}}), boolean (true/false)

Определение переменной через const - значение менять нельзя, let - можно даже менять тип данных. const  можно изменять массивы и объекты, но не напрямую

Функция - объект, который принимает параметры (опционально) и в результате возвращает результат

function add(a, b) { const result = a + b; return result}

основные методы работы с массивом push, map, filter
`

const Javascript = () => {
    return (
        <div>
            <div>
                <ReactMarkdown># Javascript</ReactMarkdown>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
            </div>
        </div>
    );
};

export default Javascript;
