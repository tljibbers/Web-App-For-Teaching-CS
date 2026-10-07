import React from 'react';
import {useNavigate} from 'react-router-dom'

let dropdownClicked = false;
function Header() {
  const navigate = useNavigate();

  return (
    <div className="headerBox">
        <div id="website-title" onClick={() => navigate('/home')}>Website Title (Alpha)</div>
        <div className="Lesson-GetStarted">
            <div className='dropdown'>
                <div className="HeaderButton" id="lessons-dropdown" onClick={dropdownClick}>
                    Lessons
                </div>
                <div className='dropdownFlex'>
                    <div className='programmingLessons'>
                        <div className="programTitle" id="underlinedTitle">Intro To Programming</div>
                        <div className="programTitle">Hello World!</div>
                        <div className="programTitle">Variables</div>
                        <div className="programTitle">Data Types</div>
                        <div className="programTitle">Type Casting</div>
                        <div className="programTitle">Operators</div>
                        <div className="programTitle">Functions</div>
                        <div className="programTitle" onClick={() => navigate('/arrays')}>Arrays</div>
                        <div className="programTitle" onClick={() => navigate('/if-else-then')}>If/Then/Else</div>
                        <div className="programTitle">Loops</div>
                        <div className="programTitle">Recursion</div>
                    </div>
                    <div className='dataStructures'>
                        <div classname='dsaTitle' id="underlinedTitleDSA">Data Structures</div>
                        <div classname='dsaTitle'>Big O!</div>
                        <div classname='dsaTitle'>Arrays and DSA</div>
                        <div classname='dsaTitle'>Linked Lists</div>
                        <div classname='dsaTitle'>Stacks + Queues</div>
                        <div classname='dsaTitle'>Hash Tables</div>
                        <div classname='dsaTitle'>Searching Techniques</div>
                        <div classname='dsaTitle'>Sorting Techniques</div>
                        <div classname='dsaTitle'>Trees</div>
                        <div classname='dsaTitle'>Dynamic Programming</div>
                    </div>
                </div>
            </div>
            <button className="HeaderButton" onClick={() => navigate('/roadmap')}>
                Roadmap
            </button>
            <button className="HeaderButton" onClick={() => navigate('/games')}>
                Games
            </button>
            <button className="HeaderButton" onClick={() => navigate('/about')}>
                About
            </button>
            <button className="HeaderButton" onClick={() => navigate('/signUp')}>
                Get Started
            </button>
        </div>
    </div>
  );
}

function dropdownClick() {
    if (dropdownClicked === false) {
        document.querySelector('.dropdownFlex').style.display = 'flex';
        dropdownClicked = true;
    }
    else {
        document.querySelector('.dropdownFlex').style.display = 'none';
        dropdownClicked = false;
    }
}
export default Header;