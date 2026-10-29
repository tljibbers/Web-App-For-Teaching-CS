import Header from './Header'
import './roadmap.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

function Roadmap() {
  const navigate = useNavigate();
  const [userSignedIn, setUserSignedIn] = useState(false);  
  const [sessionCheck, setSessionCheck] = useState(false);
  const [userLessonITPNum, setUserLessonITPNum] = useState(0);
  const [userLessonDSANum, setUserLessonDSANum] = useState(0);
    useEffect(() => {
      fetch('http://localhost:3000/api/session', {
          method: 'GET',
          credentials: 'include'
      })
      .then(response => {
          if(!response.ok) {
              throw new Error(`HTTP error: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          setUserSignedIn(data.userSignedIn);   
          console.log('Signed In:', data.userSignedIn)       
      })
      .catch(error => {
          console.error('Session request failed:', error);
      }).finally(() => {
        setSessionCheck(true)
      })
      
    }, []);

    useEffect(() => {

        if(!setSessionCheck)
        {
            return
        }

        if (!userSignedIn)
        {
            return
        }
        fetch('http://localhost:3000/api/progressValues', {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setUserLessonITPNum(data.totalCountITPNum)
            setUserLessonDSANum(data.totalCountDSANum)
            console.log('got values:', data.totalCountITPNum)
            console.log('got values:', data.totalCountDSANum)
        })
        .catch(error => {
            console.error('Session request failed:', error);
        })
    }, []);

  return (
    <>
        <Header />
        <div id="roadmapTitle">Roadmap</div>
        <div className="roadmapButtonFlex">
           <button id="itpButton" onClick={() => navigate('/intro-to-programming')}>
              <div>Intro to Programming</div>
              {userSignedIn? (<div>{userLessonITPNum}/10 Completed</div>) : null}
            </button>
           <button id="oopButton">Object Oriented Programming</button>
           <button id="dsaButton" onClick={() => navigate('/data-structures-and-algorithms')}>
              <div>Data Structures And Algorithms</div>
              {userSignedIn? (<div>0/9 Completed</div>) : null}</button>
           <button id="extraConcepts">Extra Concepts</button>
           <button id='projectExercises'>Project Exercises</button>
        </div>
    </>
    );
}

export default Roadmap;