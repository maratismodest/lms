import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
Стили следует прописывать через классы

Нейминг следует делать по БЭМ:

1. Блок - то, что можно переиспользовать в любом месте проекта. Чаще всего не имеет позиционирования .block

2. Элемент - является частью блока, вне блока теряет свой контекст .block__element

3. Модификатор - блок или элемент имеет специфичность .block__element_modification
`

const Css = () => {
    return (
        <div>
            <ReactMarkdown># CSS</ReactMarkdown>
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
        </div>
    );
};

export default Css;
