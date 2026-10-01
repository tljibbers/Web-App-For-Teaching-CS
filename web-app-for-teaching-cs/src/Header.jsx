import React from 'react';
import {useNavigate} from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  return (
    <div className="headerBox">
        <div id="website-title" onClick={() => navigate('/home')}>Website Title (Alpha)</div>
        <div className="Lesson-GetStarted">
            <div className='dropdown'>
                <div className="HeaderButton">
                    Lessons
                </div>
                <div className='dropdownFlex'>
                    <div className='programmingLessons'>
                        <div className="programTitle">banana</div>
                    </div>
                    <div className='dataStructures'>
                        <div classname='dsaTitle'>banana</div>
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
export default Header;