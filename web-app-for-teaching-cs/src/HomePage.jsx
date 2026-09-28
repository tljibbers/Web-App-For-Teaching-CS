import Header from './Header';
import './homepage.css'
import piggyBank from './assets/piggy-bank.svg'
import womanComputer from './assets/woman-computer.svg'
import happyMan from './assets/happy.svg'
import visualLearning from './assets/visualLearning.svg'
import computer from './assets/computer.svg'

function HomePage() {


  return (
    <>
        <Header />
        <div className= "mainTaglineContainer">
          <div className="SubTaglineContainer" id='topContainer'>
            <div className= "tagline1">
              <p className = "taglineHeader">Learn Computer Science in a fun, engaging way.</p>
              <p className = "taglineSubText">This website was designed specifically for anyone who shows an interest in Computer Science, but doesn't know where to start.</p>  
            </div>
            <img src={computer} className="taglineSvg" width="400"></img>
          </div>
          <div className="SubTaglineContainer">
            <img src={visualLearning} className="taglineSvg" width="400"></img>
            <div className = "tagline2">
                <p className = "taglineHeader">Made for Visual and Kinesthetic Learners.</p>
                <p className = "taglineSubText">This website guarantees that it will help those who need a more hands on experience.</p>
            </div>
          </div>
        </div>
        <div className = "guaranteeContainer">
          <div id="guarantees">Guarantees</div>
          <div className='WholeSVGTextContainer'>
              <div className="SvgTextContainer">
                <img src={womanComputer} className="svgImg"></img>
                <div className="imgTag">Easy To Pick Up</div>
                <div className="textTag">Learning Computer Science can be daunting, but with our roadmap, anyone can be able to go from not knowing anything, to being able to work on projects.</div>
              </div>
              <div className="SvgTextContainer">
                <img src={piggyBank} className="svgImg"></img>
                <div className="imgTag">Completely Free</div>
                <div className="textTag">You shouldn’t have to pay money to learn valuable information. This website guarantees having an experience comparable to premium websites while still being completely free.</div>
              </div>
              <div className="SvgTextContainer">
                <img src={happyMan} className="svgImg"></img>
                <div className="imgTag">Worth Your Time!</div>
                <div className="textTag">The thing this website guarantees above all else, is having a good time learning, and feeling like you came out of it learning something worthwhile. </div>
              </div>
          </div>
        </div>
    </>
  );
}

export default HomePage;