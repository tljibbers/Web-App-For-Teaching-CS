import './arrayQuizQuestions.css'
import {useState} from 'react'


export function QuestionOne({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 1:</div>
            <div className="question">Barring constant time, what’s the fastest complexity?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1a2' onClick={() => checkAnswer('A. O(n)', '1a1', '2a2', increment, rightAnswerIncrement)}>
                        <div>A. O(n)</div>
                    </div>
                    <div className="questionBox" id='2a2' onClick={() => checkAnswer('B. O(logn)', '2a2', '2a2', increment, rightAnswerIncrement)}>
                        <div>B. O(logn)</div>
                    </div>
                    <div className="questionBox" id='3a3' onClick={() => checkAnswer('C. O(n!)', '3a3', '2a2', increment, rightAnswerIncrement)}>
                        <div>C. O(n!)</div>
                    </div>
                    <div className="questionBox" id='4a4' onClick={() => checkAnswer('D. O(1/2n)', '4a4', '2a2', increment, rightAnswerIncrement)}>
                        <div>D. O(1/2n)</div>
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
            <div className="question">We have a complexity O(3n! + 2nlogn + 3n + 5). What should it look like?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1b2' onClick={() => checkAnswer('A. O(3n! + 2nlogn + 3n)', '1b2', '4b2', increment, rightAnswerIncrement)}>
                        <div>A. O(3n! + 2nlogn + 3n)</div>
                    </div>
                    <div className="questionBox" id='2b2' onClick={() => checkAnswer('B. O(3n!)', '2b2', '4b2', increment, rightAnswerIncrement)}>
                        <div>B. O(3n!)</div>
                    </div>
                    <div className="questionBox" id='3b2' onClick={() => checkAnswer('C. O(n! + nlogn + n)', '3b2', '4b2', increment, rightAnswerIncrement)}>
                        <div>C. O(n! + nlogn + n)</div>
                    </div>
                    <div className="questionBox" id='4b2' onClick={() => checkAnswer('D. O(n!)', '4b2', '4b2', increment, rightAnswerIncrement)}>
                        <div>D. O(n!)</div>
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
            <div className="question">Setting variables is an example of what complexity?</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "o(n)") {
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
            <div className="question">Why is O(n!) not a very practical complexity?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1e2' onClick={() => checkAnswer('A. The number of operations grows too big based on input, slowing the pc down.', '1e2', '1e2', increment, rightAnswerIncrement)}>
                        <div>A. The number of operations grows too big based on input, slowing the pc down.</div>
                    </div>
                    <div className="questionBox" id='2e2' onClick={() => checkAnswer('B. Using this complexity leads to easy errors.', '2e2', '1e2', increment, rightAnswerIncrement)}>
                        <div>B. Using this complexity leads to easy errors.</div>
                    </div>
                    <div className="questionBox" id='3e2' onClick={() => checkAnswer('C. O(n!) is practical in most cases, but not all.', '3e2', '1e2', increment, rightAnswerIncrement)}>
                        <div>C. O(n!) is practical in most cases, but not all.</div>
                    </div>
                    <div className="questionBox" id='4e2' onClick={() => checkAnswer('D. All of the above', '4e2', '1e2', increment, rightAnswerIncrement)}>
                        <div>D. All of the above</div>
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
            <div className="question">Merge Sort uses what complexity?</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "o(nlogn)") {
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

export function BigOQuizQuestionsQuiz2() {
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