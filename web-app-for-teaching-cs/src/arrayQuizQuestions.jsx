import './arrayQuizQuestions.css'
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';

let count = 0
let root = null


export function QuestionOne() {
    return (
        <div>
            <div className="questionTitle">Question 1:</div>
            <div className="question">Which of the following defines an array?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1aQuiz1' onClick={() => checkAnswer('A. An Assortment of Items', '1aQuiz1', '4aQuiz1')}>
                        <div>A. An Assortment of Items</div>
                    </div>
                    <div className="questionBox" id='2aQuiz1' onClick={() => checkAnswer('B. A Data Structure', '2aQuiz1', '4aQuiz1')}>
                        <div>B. A Data Structure </div>
                    </div>
                    <div className="questionBox" id='3aQuiz1' onClick={() => checkAnswer('C. Can be called a List in certain languages', '3aQuiz1', '4aQuiz1')}>
                        <div>C. Can be called a List in certain languages </div>
                    </div>
                    <div className="questionBox" id='4aQuiz1' onClick={() => checkAnswer('D. All of the above', '4aQuiz1', '4aQuiz1')}>
                        <div>D. All of the above</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function QuestionTwo() {
    return (
        <div>
            <div className="questionTitle">Question 2:</div>
            <div className="question">Let’s make an array with an apple, banana, and blueberries! What does that look like?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1bQuiz1' onClick={() => checkAnswer('A. Fruits = {‘apple’,’ banana’, ‘blueberries’}', '1bQuiz1', '4bQuiz1')}>
                        <div>A. Fruits = {'{‘apple’,’ banana’, ‘blueberries’}'} </div>
                    </div>
                    <div className="questionBox" id='2bQuiz1' onClick={() => checkAnswer('B. Fruits = [‘apple’, ‘banana’, ‘blueberries’}', '2bQuiz1', '4bQuiz1')}>
                        <div>B. Fruits = {'[‘apple’, ‘banana’, ‘blueberries’}'} </div>
                    </div>
                    <div className="questionBox" id='3bQuiz1' onClick={() => checkAnswer('C. Fruits = (‘apple’, ‘banana’, ‘blueberries’)', '3bQuiz1', '4bQuiz1')}>
                        <div>C. {'Fruits = (‘apple’, ‘banana’, ‘blueberries’)'} </div>
                    </div>
                    <div className="questionBox" id='4bQuiz1' onClick={() => checkAnswer('D. Fruits = [‘apple’, ‘banana’, ‘blueberries’]', '4bQuiz1', '4bQuiz1')}>
                        <div>D. {'Fruits = [‘apple’, ‘banana’, ‘blueberries’]'}</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function QuestionThree() {
    return (
        <div>
            <div className="questionTitle">Question 3:</div>
            <div className="question">Let’s add watermelon to this fruit list: fruits = [‘apple’, ‘banana’, ‘strawberries’]</div>
            <form id="inputForm">
                <div className='questionBoxContainer' id="inputBox" onClick={() => checkInputAnswer("fruits.append('watermelon')", 'answer', 'inputBox')}>
                    <input type="text" id="answer"></input>
                </div>
            </form>
        </div>
    )
}

export function QuestionFour() {
    return (
        <div>
            <div className="questionTitle">Question 4:</div>
            <div className="question">In this array: fruits = [‘strawberries’, ‘durian’, ‘watermelon’, ‘banana’, ‘apple’]</div>
            <div className="question">Is Watermelon in index 3?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1dQuiz1' onClick={() => checkAnswer('A. True', '1dQuiz1', '2dQuiz1')}>
                        <div>A. True </div>
                    </div>
                    <div className="questionBox" id='2dQuiz1' onClick={() => checkAnswer('B. False', '2dQuiz1', '2dQuiz1')}>
                        <div>B. False </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function QuestionFive() {
    return (
        <div>
            <div className="questionTitle">Question 5:</div>
            <div className="question">Using the same array from the last problem: fruits = [‘strawberries’, ‘durian’, ‘watermelon’, ‘banana’, ‘apple’]</div>
            <div className="question">What element is at the 5th index?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox" id='1eQuiz1' onClick={() => checkAnswer('A. Apple', '1eQuiz1', '3eQuiz1')}>
                        <div>A. Apple </div>
                    </div>
                    <div className="questionBox" id='2eQuiz1' onClick={() => checkAnswer('B. Banana', '2eQuiz1', '3eQuiz1')}>
                        <div>B. Banana </div>
                    </div>
                    <div className="questionBox" id='3eQuiz1' onClick={() => checkAnswer('C. There is no 5th index', '3eQuiz1', '3eQuiz1')}>
                        <div>C. There is no 5th index </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function ScorePage(){
    return (
        <div>
            <div>Final Score:</div>
            <div>Score Here</div>
            <div>Placeholder for message here</div>
            <button>Try again?</button>
        </div>
    )
}

function checkAnswer(actualAnswer, currentId, id) {
    const selectedChoice = document.getElementById(id).innerText;
    if (selectedChoice == actualAnswer)
    {
        document.getElementById(currentId).style.borderColor = 'green'
        setTimeout(() => {
            increment()
        }, 1000)

    }
    else
    {

        document.getElementById(currentId).style.borderColor = 'red'       
    }

}

function checkInputAnswer(actualAnswer, inputId, currentId){
    const form = document.getElementById("inputForm");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const answerValue = document.getElementById(inputId).value

        if(actualAnswer == answerValue)
        {
            document.getElementById(currentId).style.borderColor = 'green'
            setTimeout(() => {
                increment()
            }, 1000)
        }
        else
        {
            document.getElementById(currentId).style.borderColor = 'red' 
        }
    })
}

function increment() {
    const arrayFragment = [<QuestionOne/>, <QuestionTwo/>, <QuestionThree/>, <QuestionFour/>, <QuestionFive/>, <ScorePage/>] 
    if(count <= 5)
    {
        count ++;
        const test = document.getElementById('fragmentPush')
        test.innerHTML = ''
        if (root) {
            root.unmount();
            root = null;
        }
        root = createRoot(test)
        root.render(<React.StrictMode> {arrayFragment[count]} </React.StrictMode>)
        console.log(count)
        
    }
    

}



