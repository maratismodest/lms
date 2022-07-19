import {Button} from "@mui/material";
import axios from "axios";
import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

// const markdown = `Just a link: https://reactjs.com`


export interface LessonProps {
    course: number
    id: number
    name: string
    markdown: string
}

export interface CourseProps {
    id: number
    name: string
    markdown: string
    lessons: LessonProps[]
}

export const coursesBase: CourseProps[] = [
    {
        id: 1,
        name: 'html',
        markdown: `
# HTML

Основные теги: div, h1-h6, p, span, ul , li, input, button

Блочные теги занимают всю ширину родительского блока

Строчные теги (span) занимают место для своего контента

Большинство тегов <tag>text</tag>

Есть самозакрывающиеся теги, например,  input
`,
        lessons: []
    },
    {
        id: 2,
        name: 'css',
        markdown: `
# CSS

Стили следует прописывать через классы

Нейминг следует делать по БЭМ:

1. Блок - то, что можно переиспользовать в любом месте проекта. Чаще всего не имеет позиционирования .block

2. Элемент - является частью блока, вне блока теряет свой контекст .block__element

3. Модификатор - блок или элемент имеет специфичность .block__element_modification
`,
        lessons: []
    },

    {
        id: 3,
        name: 'javascript',
        markdown: `
# JAVASCRIPT

Основные типы: string ('string'), number (100500), array ([1,2,3,4]), object ({key1: value1, key2: value2}}), boolean (true/false)

Определение переменной через const - значение менять нельзя, let - можно даже менять тип данных. const  можно изменять массивы и объекты, но не напрямую

Функция - объект, который принимает параметры (опционально) и в результате возвращает результат

function add(a, b) { const result = a + b; return result}

основные методы работы с массивом push, map, filter
`,
        lessons: []
    },
]

export const lessonsBase: LessonProps[] = [
    {
        id: 1,
        course: 1,
        name: 'html1',
        markdown: `
# HTML. Урок 1

Понятие страницы сайта, что такое HTML.

HTML - hypertext markup language - язык гипертекстовой разметки.

* Представляет собой древовидную структуру из тегов.

* Главныйтег - \`html\`

* Дваобязательныхтегавнутри - \`head\` и \`body\`.
Минимальный базовый шаблон HTML документа:html
<!DOCTYPE html>
    <html>
        <head>
        </head>
        <body>
        </body>
    </html>
`
    },
    {
        course: 1,
        id: 2,
        name: 'html2',
        markdown: `
# HTML. Урок 2

Основные теги: div, h1-h6, p, span, ul , li, input, button

Блочные теги занимают всю ширину родительского блока

Строчные теги (span) занимают место для своего контента

Большинство тегов <tag>text</tag>

Есть самозакрывающиеся теги, например,  input
`
    },
    {
        course: 2,
        id: 3,
        name: 'css1',
        markdown: `
# CSS

Стили следует прописывать через классы

Нейминг следует делать по БЭМ:

1. Блок - то, что можно переиспользовать в любом месте проекта. Чаще всего не имеет позиционирования .block

2. Элемент - является частью блока, вне блока теряет свой контекст .block__element

3. Модификатор - блок или элемент имеет специфичность .block__element_modification
`
    },
    {
        course: 2,
        id: 4,
        name: 'css2',
        markdown: `
# CSS

Стили следует прописывать через классы

Нейминг следует делать по БЭМ:

1. Блок - то, что можно переиспользовать в любом месте проекта. Чаще всего не имеет позиционирования .block

2. Элемент - является частью блока, вне блока теряет свой контекст .block__element

3. Модификатор - блок или элемент имеет специфичность .block__element_modification
`
    },
    {
        course: 3,
        id: 5,
        name: 'javascript1',
        markdown: `
# JAVASCRIPT

Основные типы: string ('string'), number (100500), array ([1,2,3,4]), object ({key1: value1, key2: value2}}), boolean (true/false)

Определение переменной через const - значение менять нельзя, let - можно даже менять тип данных. const  можно изменять массивы и объекты, но не напрямую

Функция - объект, который принимает параметры (опционально) и в результате возвращает результат

function add(a, b) { const result = a + b; return result}

основные методы работы с массивом push, map, filter
`
    },
    {
        course: 3,
        id: 6,
        name: 'javascript2',
        markdown: `
# JAVASCRIPT

Основные типы: string ('string'), number (100500), array ([1,2,3,4]), object ({key1: value1, key2: value2}}), boolean (true/false)

Определение переменной через const - значение менять нельзя, let - можно даже менять тип данных. const  можно изменять массивы и объекты, но не напрямую

Функция - объект, который принимает параметры (опционально) и в результате возвращает результат

function add(a, b) { const result = a + b; return result}

основные методы работы с массивом push, map, filter
`
    }
]


const getCourses = async () => {
    try {
        const res = await axios.get('http://localhost:8080/api/course')
        return res.data[0] as CourseProps
    } catch (e) {
        console.log('e', e)
    }
}

const getCourse = async (name: string) => {
    try {
        const res = await axios.get('http://localhost:8080/api/course/' + name)
        return res.data as CourseProps
    } catch (e) {
        console.log('e', e)
    }
}

const Course = () => {
    const [course, setCourse] = useState<CourseProps | undefined>(undefined)
    const {name} = useParams()
    useEffect(() => {
        getCourse(name as string).then((course) => {
            console.log('course',course)
            setCourse(course)
        })
    }, [name])

    if (!course) {
        return <div>No course</div>
    }

    const {lessons} = course

    console.log('course', course)
    console.log('lessons', lessons)

    if (lessons.length === 0) {
        return (
            <div>
                No lessons
            </div>
        )
    }

    return (
        <ul>
            {
                // lessons.length
                lessons.map(({id, name}) =>
                    <li key={id} style={{marginBottom: 16}}>
                        <Button component={Link} to={name} color="primary" variant={"contained"}>
                            {name}
                        </Button>
                    </li>)
            }
        </ul>
    );
};

export default Course;
{/*<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>*/
}
