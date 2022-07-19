import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import React, {useState} from 'react';
import {useParams} from "react-router-dom";

interface QuestionProps {
    id: number,
    text: string,
    options: string[]
}

const list: QuestionProps[] = [
    {
        id: 1,
        text: '2 x 2 = ?',
        options: ['4', '2', '1', '0']
    },
    {
        id: 2,
        text: '2 + 2 = ?',
        options: ['4', '2', '1', '0']
    },
    {
        id: 3,
        text: '2 - 2 = ?',
        options: ['0', '2', '1', '4']
    },
    {
        id: 4,
        text: '2 / 2 = ?',
        options: ['1', '2', '0', '4']
    }
]

const getOptions = (list: string[] = []) => list.map((x, index) => ({
    id: index + 1,
    text: x,
    sort: Math.random()
})).sort((a, b) => a.sort - b.sort).map(({id, text}) => ({id, text}))

const Quiz = () => {
    const params = useParams()
    console.log('params', params)
    const [index, setIndex] = useState<number>(0)
    const [questions, setQuestions] = useState<QuestionProps[]>(list)
    const [question, setQuestion] = useState<QuestionProps | undefined>(questions[index])
    const [options, setOptions] = useState(() => getOptions(question?.options))
    const [results, setResults] = useState<boolean[]>([])

    const handleClick = (id: number) => {
        if (id === 1) {
            setResults(prevState => [...prevState, true])
            console.log('yes')
        } else {
            setResults(prevState => [...prevState, false])
            console.log('no')
        }
        if (index < questions.length) {
            setIndex(prevState => prevState + 1)
            setQuestion(questions[index + 1])
            setOptions(getOptions(questions[index + 1].options))

        } else {
            console.log('done')
        }
    }

    if (questions.length <= index) {
        return (
            <div>
                Done
                {JSON.stringify(results)}
            </div>
        )
    }

    return (
        <div>
            {question?.text}
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                {options?.map((option) =>
                    <Button
                        key={option.id}
                        onClick={() => handleClick(option.id)}
                    >
                        {option.text}
                    </Button>)}
            </ButtonGroup>
        </div>
    );
};

export default Quiz;
