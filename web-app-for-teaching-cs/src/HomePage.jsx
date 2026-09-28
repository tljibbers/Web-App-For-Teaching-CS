import Header from './Header';
import './homepage.css'

function HomePage() {


  return (
    <>
        <Header />
        <div className= "mainTaglineContainer">
          <div className= "tagline1">
            <p className = "taglineHeader">Learn Computer Science in a fun, engaging way.</p>
            <p className = "taglineSubText">This website was designed specifically for anyone who shows an interest in Computer Science, but doesn't know where to start.</p>
              
          </div>

          <div className = "tagline2">
              <p className = "taglineHeader">Made for Visual and Kinesthetic Learners.</p>
              <p className = "taglineSubText">This website guarantees that it will help those who need a more hands on experience.</p>
          </div>
        </div>
        <div className = "guaranteeContainer">
          <div id="guarantees">Guarantees</div>
          <div>
              <div>Easy To Pick Up</div>
              <div>Completely Free</div>
              <div>Worth Your Time!</div>
          </div>
        </div>
    </>
  );
}

export default HomePage;