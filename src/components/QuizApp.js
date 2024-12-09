import React, { Component } from 'react';

class QuizApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            userAnswers: [],
            score: 0,
            currentquestionindex: 0,
            quizCompleted: false,
        };
    }

    componentDidMount() {
        fetch('Question.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ questions: data });
            })
            .catch((error) => console.error('Error fetching questions:', error));
    }

    handleAnswerSelect = (questionIndex, selectedOption) => {
        const { userAnswers } = this.state;
        userAnswers[questionIndex] = selectedOption;
        this.setState({ userAnswers });
    };

    handleNextQuestion = () => {
        const { currentquestionindex, questions } = this.state;
        if (currentquestionindex < questions.length - 1) {
            this.setState({ currentquestionindex: currentquestionindex + 1 });
        }
    };

    handleSubmitQuiz = () => {
        const { questions, userAnswers } = this.state;
        const score = questions.reduce((totalScore, question, index) => {
            if (question.correctOption === userAnswers[index]) {
                return totalScore + 1;
            }
            return totalScore;
        }, 0);
        this.setState({ score, quizCompleted: true });
    };

    render() {
        const { questions, userAnswers, score, currentquestionindex, quizCompleted } = this.state;
        if (questions.length === 0) {
            return <p>Loading Questions...</p>;
        }

        const currentQuestion = questions[currentquestionindex];

        return (
            <div>
                <h2>Quiz Application</h2>
                {quizCompleted ? (
                    <div>
                        <h3>Your Score: {score} out of {questions.length}</h3>
                        <p>Thanks for Completing the quiz!</p>
                    </div>
                ) : (
                    <div>
                        <h3>Question {currentquestionindex + 1} of {questions.length}:</h3>
                        <p>{currentQuestion.question}</p>
                        <ul>
                            {currentQuestion.options.map((option, index) => (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`answer-${currentquestionindex}`}
                                            value={option}
                                            checked={userAnswers[currentquestionindex] === option}
                                            onChange={() => this.handleAnswerSelect(currentquestionindex, option)}
                                        />
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        {currentquestionindex < questions.length - 1 ? (
                            <button onClick={this.handleNextQuestion}>Next Question</button>
                        ) : (
                            <button onClick={this.handleSubmitQuiz}>Submit Quiz</button>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default QuizApp;
