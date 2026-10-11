import './arrayQuizQuestions.css'
import { useState } from 'react';

function QuestionOne({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 1:</div>
            <div className="question">Given the array: favoriteFruits = [‘tomatoes’, ‘apples’, ‘bananas’, ‘papaya’]</div>
            <div className="question">Use the del method to delete the 3rd element (Not the same as index) in this array. </div>
            <form id='inputForm'
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answerOne").value;

                    if(answerValue === "del favoriteFruits[2]") {
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
                    <input type="text" id='answerOne'></input>
                </div>
            </form>
        </div>
    )
}

function QuestionTwo({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 2:</div>
            <div className="question">Given the array:  favoriteFruits = [‘tomatoes’, ‘apples’, ‘bananas’, ‘papaya’]</div>
            <div className="question">Use the pop method to get rid of the last element in this array.</div>
            <form id='inputForm2'
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answerTwo").value;

                    if(answerValue === "favoriteFruits.pop()") {
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
                    <input type="text" id="answerTwo"></input>
                </div>
            </form>
        </div>
    )
}

function QuestionThree({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 3:</div>
            <div className="question">If we wanted to get rid of everything in the array, what method would we use?</div>
            <form>
                <div className="questionBox" id='1cQuiz2' onClick={() => checkAnswer('A. clear()', '1cQuiz2', '1cQuiz2', increment, rightAnswerIncrement)}>
                    <div>A. clear()</div>
                </div>
                <div className="questionBox" id='2cQuiz2' onClick={() => checkAnswer('B. wipe()', '2cQuiz2', '1cQuiz2', increment, rightAnswerIncrement)}>
                    <div>B. wipe()</div>
                </div>
                <div className="questionBox" id='3cQuiz2' onClick={() => checkAnswer('C. erase()', '3cQuiz2', '1cQuiz2', increment, rightAnswerIncrement)}>
                    <div>C. erase()</div>
                </div>
                <div className="questionBox" id='4cQuiz2' onClick={() => checkAnswer('D. destroy()', '4cQuiz2', '1cQuiz2', increment, rightAnswerIncrement)}>
                    <div>D. destroy()</div>
                </div>
            </form>
        </div>
    )
}

function QuestionFour({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 4:</div>
            <div className="question">You HAVE to name a temporary variable ‘temp’ everytime you want to swap variables.</div>
            <form>
                <div className="questionBox" id='1dQuiz2' onClick={() => checkAnswer('A. True', '1dQuiz2', '2dQuiz2', increment, rightAnswerIncrement)}>
                    <div>A. True</div>
                </div>
                <div className="questionBox" id='2dQuiz2' onClick={() => checkAnswer('B. False', '2dQuiz2', '2dQuiz2', increment, rightAnswerIncrement)}>
                    <div>B. False</div>
                </div>
            </form>
        </div>
    )
}

function QuestionFive({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 5:</div>
            <div className="question">Given the array: favoriteFruits = [‘tomatoes’, ‘apples’, ‘bananas’, ‘papaya’]</div>
            <div className="question">Replace apples with oranges.</div>
            <form id="inputForm3"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answerFive").value;

                    if(answerValue === "favoriteFruits[1] = 'oranges'") {
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
                    <input type="text" id='answerFive'></input>
                </div>
            </form>
        </div>
    )
}

function ScorePage({score, reset}) {
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

export function QuizQuestionsQuiz2() {
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
        <div id="fragmentPush2">{questionsArray[count]}</div>
    )
}
