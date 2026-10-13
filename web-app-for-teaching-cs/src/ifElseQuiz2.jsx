import './arrayQuizQuestions.css'
import {useState} from 'react';

export function QuestionOne({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 1:</div>
            <div className="question">We have a condition checking to see if our favoriteFruit is a banana. We want to add another if statement checking to see if our favoriteFruit is an orange. How would we do that?</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "elif favoriteFruit == 'orange'" || answerValue === "elif favoriteFruit == 'orange':" ) {
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

export function QuestionTwo({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 2:</div>
            <div className="question">It’s a good idea to chain a lot of nested if statements together.</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1bQuiz2' onClick={() => checkAnswer('A. True', '1bQuiz2', '2bQuiz2', increment, rightAnswerIncrement)}>
                        <div>A. True</div>
                    </div>
                    <div className="questionBox" id='2bQuiz2' onClick={() => checkAnswer('B. False', '2bQuiz2', '2bQuiz2', increment, rightAnswerIncrement)}>
                        <div>B. False</div>
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
            <div className="question">Write a shorthand if statement that checks to see if the variable amountOfPeople is 6, and if so, it prints out 'there are 6 people'.</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "if amountOfPeople == 6: print('there are 6 people')") {
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
            <div className="question">Write a shorthand if statement that checks to see if the variable hotelFloors is 10 or more, and if so, it prints out 'there are 10 or more floors', if not, it prints out 'there are not 10 or more floors'.</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "print('there are 10 or more floors') if hotelFloors >= 10 else print('there are not 10 or more floors')") {
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

export function ScorePage({score, reset}){
    return (
        <div className='scoreContainer'>
            <div id="finalScoreTitle">Final Score:</div>
            <div id="finalScore">{score} / 4</div>
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

export function IfElseQuizQuestions2() {
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


    const questionsArray = [<QuestionOne key='q1' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <QuestionTwo key='q2' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <QuestionThree key='q3' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <QuestionFour key='q4' increment={increment} rightAnswerIncrement={rightAnswerIncrement}/>, <ScorePage key='score' score={rightAnswer} rightAnswerIncrement={rightAnswerIncrement} reset={reset}/>];


    return (
        <div id="fragmentPush">{questionsArray[count]}</div>
    )
}
