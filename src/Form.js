import { useState } from 'react';

function Form({ handleForm }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCardObject = {
            question: question,
            answer: answer,
        };

        fetch('http://localhost:3001/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCardObject),
        })
            .then((response) => response.json())
            .then((data) => handleForm(data));

        setQuestion('');
        setAnswer('');
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter question"
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                />
                <input
                    placeholder="Enter answer"
                    onChange={(e) => setAnswer(e.target.value)}
                    value={answer}
                />
                <input type="submit" value="Add your flashcard to the list" />
            </form>
        </div>
    );
}

export default Form;
