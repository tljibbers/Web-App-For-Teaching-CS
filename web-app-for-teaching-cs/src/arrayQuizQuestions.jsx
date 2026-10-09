import './arrayQuizQuestions.css'
export function QuestionOne() {
    return (
        <div>
            <div className="questionTitle">Question 1:</div>
            <div className="question">Which of the following defines an array?</div>
            <form>
                <div className='questionBoxContainer'>
                    <div className="questionBox">
                        <div>A. An Assortment of Items</div>
                    </div>
                    <div className="questionBox">
                        <div>B. A Data Structure </div>
                    </div>
                    <div className="questionBox">
                        <div>C. Can be called a List in certain languages </div>
                    </div>
                    <div className="questionBox">
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
                    <div className="questionBox">
                        <div>A. Fruits = {'{‘apple’,’ banana’, ‘blueberries’}'} </div>
                    </div>
                    <div className="questionBox">
                        <div>B. Fruits = {'[‘apple’, ‘banana’, ‘blueberries’}'} </div>
                    </div>
                    <div className="questionBox">
                        <div>C. {'Fruits = (‘apple’, ‘banana’, ‘blueberries’)'} </div>
                    </div>
                    <div className="questionBox">
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
            <form>
                <div className='questionBoxContainer'>
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
                    <div className="questionBox">
                        <div>A. True </div>
                    </div>
                    <div className="questionBox">
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
                    <div className="questionBox">
                        <div>A. Apple </div>
                    </div>
                    <div className="questionBox">
                        <div>B. Banana </div>
                    </div>
                    <div className="questionBox">
                        <div>C. There is no 5th index </div>
                    </div>
                </div>
            </form>
        </div>
    )
}