import './arrayQuizQuestions.css'
import { useState } from 'react';

export function QuestionOne({increment, rightAnswerIncrement}) {
    return (
        <div>
            <div className="questionTitle">Question 1:</div>
            <div className="question">We make a string variable named mathClassRoom and an if statement that will print the teacher name if the room number is correct. The room number is 111. What does the if part of the statement look like here?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1aQuiz1' onClick={() => checkAnswer('A. if mathClassRoom = 111', '1aQuiz1', '3aQuiz1', increment, rightAnswerIncrement)}>
                        <div>A. if mathClassRoom = 111</div>
                    </div>
                    <div className="questionBox" id='2aQuiz1' onClick={() => checkAnswer('B. if mathClassRoom == 111', '2aQuiz1', '3aQuiz1', increment, rightAnswerIncrement)}>
                        <div>B. if mathClassRoom == 111</div>
                    </div>
                    <div className="questionBox" id='3aQuiz1' onClick={() => checkAnswer('C. if mathClassRoom == ‘111’', '3aQuiz1', '3aQuiz1', increment, rightAnswerIncrement)}>
                        <div>C. if mathClassRoom == ‘111’</div>
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
            <div className="question">We have a variable called ownedBooks and an if statement that will print “Super Reader" if ownedBooks contains 3 or more books, and “You Should Read More” if there are less than 3. </div>
            <div className="question">How does this statement look?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1bQuiz1' onClick={() => checkAnswer('A. if ownedBooks => 3: print(‘Super Reader’) else: print(‘You Should Read More’)', '1bQuiz1', '3bQuiz1', increment, rightAnswerIncrement)}>
                        <div>A. if ownedBooks ={'>'} 3: print(‘Super Reader’) else: print(‘You Should Read More’)</div>
                    </div>
                    <div className="questionBox" id='2bQuiz1' onClick={() => checkAnswer('B. if ownedBooks <= 3: print(‘Super Reader’) else: print(‘You Should Read More’)', '2bQuiz1', '3bQuiz1', increment, rightAnswerIncrement)}>
                        <div>B. if ownedBooks {'<'}= 3: print(‘Super Reader’) else: print(‘You Should Read More’)</div>
                    </div>
                    <div className="questionBox" id='3bQuiz1' onClick={() => checkAnswer('C. if ownedBooks >= 3: print(‘Super Reader’) else: print(‘You Should Read More’)', '3bQuiz1', '3bQuiz1', increment, rightAnswerIncrement)}>
                        <div>C. if ownedBooks {'>'}= 3: print(‘Super Reader’) else: print(‘You Should Read More’)</div>
                    </div>
                    <div className="questionBox" id='4bQuiz1' onClick={() => checkAnswer('D. if ownedBooks > 3: print(‘Super Reader’) else: print(‘You Should Read More’)', '4bQuiz1', '3bQuiz1', increment, rightAnswerIncrement)}>
                        <div>D. if ownedBooks {'>'} 3: print(‘Super Reader’) else: print(‘You Should Read More’)</div>
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
            <div className="question">We have two variables, microphone, and monitor. We want to check to see if the microphone is actually a Blue Snowball and if the monitor is a Sceptre. How would you write that? (NOTE: you only have to write the if part of the statement.)</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "if microphone == 'blue snowball' and monitor == 'sceptre'") {
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
            <div className="question">Using the two variables from the last question, microphone and monitor, how would you write the if statement if we wanted to check out if the microphone was a Blue Snowball and the monitor was a Sceptre, or if the microphone was NOT a Blue Yeti and the monitor was a Dell? (NOTE: you only have to write the if part of the statement.)</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "if microphone == 'blue snowball' and monitor == 'sceptre' or microphone != 'blue yeti' and monitor == 'dell'") {
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
            <div className="question">We have an array called videoGames. How would we check to see if Elden Ring was in our array? (NOTE: you only have to write the if part of the statement.)</div>
            <form id="inputForm"
                onSubmit={(e) => {
                    e.preventDefault();

                    const answerValue = document.getElementById("answer").value;

                    if(answerValue === "if 'elden ring' in videoGames") {
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

export function IfElseQuizQuestions1() {
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
