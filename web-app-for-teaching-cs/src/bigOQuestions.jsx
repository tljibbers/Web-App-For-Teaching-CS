import './arrayQuizQuestions.css'
import {useState} from 'react'

export function QuestionOne({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 1:</div>
            <div className="question">With Big O, we are looking for the best case scenario.</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1a1' onClick={() => checkAnswer('A. True', '1a1', '2a1', increment, rightAnswerIncrement)}>
                        <div>A. True</div>
                    </div>
                    <div className="questionBox" id='2a1' onClick={() => checkAnswer('B. False', '2a1', '2a1', increment, rightAnswerIncrement)}>
                        <div>B. False</div>
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
            <div className="question">Big O means looking for the maximum amount of steps needed for the algorithm to run.</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1b1' onClick={() => checkAnswer('A. O(n)', '1b1', '1b1', increment, rightAnswerIncrement)}>
                        <div>A. True</div>
                    </div>
                    <div className="questionBox" id='2b1' onClick={() => checkAnswer('A. O(n)', '2b1', '1b1', increment, rightAnswerIncrement)}>
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
            <div className="question">What is Time Complexity measured in?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1c1' onClick={() => checkAnswer('A. O(n)', '1c1', '4c1', increment, rightAnswerIncrement)}>
                        <div>A. Seconds</div>
                    </div>
                    <div className="questionBox" id='2c1' onClick={() => checkAnswer('A. O(n)', '2c1', '4c1', increment, rightAnswerIncrement)}>
                        <div>B. Hours</div>
                    </div>
                    <div className="questionBox" id='3c1' onClick={() => checkAnswer('A. O(n)', '3c1', '4c1', increment, rightAnswerIncrement)}>
                        <div>C. Milliseconds</div>
                    </div>
                    <div className="questionBox" id='4c1' onClick={() => checkAnswer('A. O(n)', '4c1', '4c1', increment, rightAnswerIncrement)}>
                        <div>D. Not Measured in Execution Time</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function QuestionFour({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 4:</div>
            <div className="question">Space Complexity looks at how much _______ _______ the algorithm needs to run fully as the input size increases.</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "memory space") {
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

export function QuestionFive({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 5:</div>
            <div className="question">Time and Space Complexity are the exact same.</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1e1' onClick={() => checkAnswer('A. O(n)', '1e1', '2e1', increment, rightAnswerIncrement)}>
                        <div>A. True</div>
                    </div>
                    <div className="questionBox" id='2e1' onClick={() => checkAnswer('A. O(n)', '2e1', '2e1', increment, rightAnswerIncrement)}>
                        <div>B. False</div>
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

export function BigOQuizQuestionsQuiz1() {
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