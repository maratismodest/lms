import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// const markdown = `Just a link: https://reactjs.com`

const markdown = `
Основные теги: div, h1-h6, p, span, ul , li, input, button

Блочные теги занимают всю ширину родительского блока

Строчные теги (span) занимают место для своего контента

Большинство тегов <tag>text</tag>

Есть самозакрывающиеся теги, например,  input
`

const Html = () => {
    return (
        <div>
            <ReactMarkdown># HTML</ReactMarkdown>
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
        </div>
    );
};

export default Html;
