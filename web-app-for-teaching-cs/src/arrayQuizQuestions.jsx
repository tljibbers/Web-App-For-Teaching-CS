import './arrayQuizQuestions.css'
import { useState } from 'react';

export function QuestionOne({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 1:</div>
            <div className="question">Which of the following defines an array?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1aQuiz1' onClick={() => checkAnswer('A. An Assortment of Items', '1aQuiz1', '4aQuiz1', increment, rightAnswerIncrement)}>
                        <div>A. An Assortment of Items</div>
                    </div>
                    <div className="questionBox" id='2aQuiz1' onClick={() => checkAnswer('B. A Data Structure', '2aQuiz1', '4aQuiz1', increment, rightAnswerIncrement)}>
                        <div>B. A Data Structure </div>
                    </div>
                    <div className="questionBox" id='3aQuiz1' onClick={() => checkAnswer('C. Can be called a List in certain languages', '3aQuiz1', '4aQuiz1', increment, rightAnswerIncrement)}>
                        <div>C. Can be called a List in certain languages </div>
                    </div>
                    <div className="questionBox" id='4aQuiz1' onClick={() => checkAnswer('D. All of the above', '4aQuiz1', '4aQuiz1', increment, rightAnswerIncrement)}>
                        <div>D. All of the above</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function QuestionTwo({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 2:</div>
            <div className="question">Let’s make an array with an apple, banana, and blueberries! What does that look like?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1bQuiz1' onClick={() => checkAnswer('A. Fruits = {‘apple’,’ banana’, ‘blueberries’}', '1bQuiz1', '4bQuiz1', increment, rightAnswerIncrement)}>
                        <div>A. Fruits = {'{‘apple’,’ banana’, ‘blueberries’}'} </div>
                    </div>
                    <div className="questionBox" id='2bQuiz1' onClick={() => checkAnswer('B. Fruits = [‘apple’, ‘banana’, ‘blueberries’}', '2bQuiz1', '4bQuiz1', increment, rightAnswerIncrement)}>
                        <div>B. Fruits = {'[‘apple’, ‘banana’, ‘blueberries’}'} </div>
                    </div>
                    <div className="questionBox" id='3bQuiz1' onClick={() => checkAnswer('C. Fruits = (‘apple’, ‘banana’, ‘blueberries’)', '3bQuiz1', '4bQuiz1', increment, rightAnswerIncrement)}>
                        <div>C. {'Fruits = (‘apple’, ‘banana’, ‘blueberries’)'} </div>
                    </div>
                    <div className="questionBox" id='4bQuiz1' onClick={() => checkAnswer('D. Fruits = [‘apple’, ‘banana’, ‘blueberries’]', '4bQuiz1', '4bQuiz1', increment, rightAnswerIncrement)}>
                        <div>D. {'Fruits = [‘apple’, ‘banana’, ‘blueberries’]'}</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function QuestionThree({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 3:</div>
            <div className="question">Let’s add watermelon to this fruit list: fruits = [‘apple’, ‘banana’, ‘strawberries’]</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "fruits.append('watermelon')") {
                        setTimeout(() => {
                            increment();
                            rightAnswerIncrement();
                        }, 1000);
                    }
                    else
                    {
                        setTimeout(() => {
                            increment();
                        }, 1000);
                    }
                }}
            >
                <div className='questionBoxContainer' id="inputBox">
                    <input type="text" id="answer"></input>
                </div>
            </form>
        </div>
    )
}

export function QuestionFour({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 4:</div>
            <div className="question">In this array: fruits = [‘strawberries’, ‘durian’, ‘watermelon’, ‘banana’, ‘apple’]</div>
            <div className="question">Is Watermelon in index 3?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1dQuiz1' onClick={() => checkAnswer('A. True', '1dQuiz1', '2dQuiz1', increment, rightAnswerIncrement)}>
                        <div>A. True </div>
                    </div>
                    <div className="questionBox" id='2dQuiz1' onClick={() => checkAnswer('B. False', '2dQuiz1', '2dQuiz1', increment, rightAnswerIncrement)}>
                        <div>B. False </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function QuestionFive({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 5:</div>
            <div className="question">Using the same array from the last problem: fruits = [‘strawberries’, ‘durian’, ‘watermelon’, ‘banana’, ‘apple’]</div>
            <div className="question">What element is at the 5th index?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1eQuiz1' onClick={() => checkAnswer('A. Apple', '1eQuiz1', '3eQuiz1', increment, rightAnswerIncrement)}>
                        <div>A. Apple </div>
                    </div>
                    <div className="questionBox" id='2eQuiz1' onClick={() => checkAnswer('B. Banana', '2eQuiz1', '3eQuiz1', increment, rightAnswerIncrement)}>
                        <div>B. Banana </div>
                    </div>
                    <div className="questionBox" id='3eQuiz1' onClick={() => checkAnswer('C. There is no 5th index', '3eQuiz1', '3eQuiz1', increment, rightAnswerIncrement)}>
                        <div>C. There is no 5th index </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function ScorePage({score, reset}){
    return (
        <div className='scoreContainer'>
            <div id="finalScoreTitle">Final Score:</div>
            <div id="finalScore">{score} / 5</div>
            <ScoreMessage score={score}/>
            <button id='resetButton' onClick={() => reset()}>Try again?</button>
        </div>
    )
}

function ScoreMessage({score}) {
    if(score <= 2)
    {
        return (
            <div id='message'>Don't give up! Let's try again!</div>
        )
    }
    else if(score == 3)
    {
        return (
            <div id='message'>Just halfway there! Let's go for a 5!</div>
        )
    }
    else if(score == 4)
    {
        return (
            <div id='message'>Great Work! Want to try again for a perfect score? Feel free!</div>
        )
    }
    else
    {
        return (
            <div id='message'>Incredible! You're a master at this!</div>
        )
    }
}

function checkAnswer(actualAnswer, currentId, id, increment, rightAnswerIncrement) {
    const selectedChoice = document.getElementById(id).innerText;
    if (selectedChoice == actualAnswer)
    {
        document.getElementById(currentId).style.borderColor = 'green'
        setTimeout(() => {
            increment()
            rightAnswerIncrement()
        }, 1000)

    }
    else
    {

        document.getElementById(currentId).style.borderColor = 'red'
        setTimeout(() => {
            increment()
        }, 1000)


    }

}

export function QuizQuestionsQuiz1() {
    const [count, setCount] = useState(0);
    const [rightAnswer, setCorrectAnswer] = useState(0);

    const increment = () => {
        setCount((previousCount) =>
            Math.min(previousCount + 1, 5)
        );
    }

    const rightAnswerIncrement = () => {
        setCorrectAnswer((previousRightAnswer) => 
            Math.min(previousRightAnswer + 1, 5)
        );
    }

    const reset = () => {
        setCount(0);
        setCorrectAnswer(0);
    }


    const questionsArray = [<QuestionOne key='q1' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <QuestionTwo key='q2' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <QuestionThree key='q3' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <QuestionFour key='q4' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <QuestionFive key='q5' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <ScorePage key='score' score={rightAnswer} rightAnswerIncrement={rightAnswerIncrement} reset={reset}/>];


    return (
        <div id="fragmentPush">{questionsArray[count]}</div>
    )
}









