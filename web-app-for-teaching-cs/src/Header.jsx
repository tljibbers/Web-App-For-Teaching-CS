import React from 'react';
import {useNavigate} from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  return (
    <div className="headerBox">
        <div id="website-title">Website Title</div>
        <div className="Lesson-GetStarted">
            <button className="HeaderButton" onClick={() => navigate('/home')}>
                Lessons
            </button>
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