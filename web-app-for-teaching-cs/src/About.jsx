import Header from './Header'
import './about.css'
import handStars from './assets/hand-stars.svg'
import roadMap from './assets/road-map-icon.svg'
import game from './assets/game.svg'
import free from './assets/free.svg'

function About() {
  return (
    <>
        <Header />
        <div className="entireAboutContainer">
          <div className='why-container'>
            <div id="the-Why">The Why Of It All</div>
            <p className='why-text'>To get a bit personal, when I was starting out learning Computer Science as a student, I had a lot of trouble following along in certain classes, which left me feeling consistently confused. Things like Data Structures were the bane of my existence when it came to CS, even though it was so important. I tried to keep up by learning things after class, and came to learn that I had trouble understanding certain topics because I couldn’t visualize what was happening very well. When I adapted the lessons I was learning to a more visual style, I was able to comprehend what was going on a lot better. </p>
            <p className='why-text'>I also noticed a lot of the time that trying to learn things online meant having to spend a lot of money to get the most premium of content. I don’t personally agree with the idea of having to pay money to learn, so I wanted to create a platform that both taught well and taught for free. </p>
            <p className='why-text'>The goals below illustrate what I really want out of this website, so if I could hit all of those and have people come out learning anything useful, I’m satisfied.</p>
          </div>
          <div className='goalContainer'>
            <div className="goalOneContainer">
              <div>
                <div className="goal">Goal #1: Implementing Structure For Easier Learning</div>
                <div>This website uses a progression system where the user can unlock lessons as they finish previous ones, which gives a greater incentive to continue working through the roadmap. However, if you already know these topics, feel free to toggle off the progression system. </div>  
              </div>
              <img src={roadMap} width='100'></img>
            </div>
            <div className="goalTwoContainer">
              <div>
                <div className="goal">Goal # 2: Dodging the Paywall</div>
                <div>Every single lesson, game, quiz, and feature on this website is 100 percent free, no strings attached. The content also strives to be on the level of premium content, so as to save a bit of money. </div>
              </div>
              <img src={free} width='100'></img>
            </div>
            <div className="goalThreeContainer">
              <div>
                <div className="goal">Goal #3: Maintaining User Engagement</div>
                <div>Just having words on the screen feels like it wouldn’t be enough. This website has micro-games, which are short games that are supposed to be supplementary to the lesson, and would be interesting enough to keep users engaged. There are also quizzes in the middle of lessons that users can do to make sure that they’ve been paying attention. These two hand in hand hope to make a memorable experience for those who interact with them. </div>
              </div>
              <img src={game} width='100'></img>
            </div>
            <div className="goalFourContainer">
              <div>
                <div className="goal">Goal #4: Appealing to Visual and Kinesthetic Learners</div>
                <div>As a follow up to the last goal, having pictures that help to explain the lesson is really valuable to Visual learners. This helps to strengthen the quality of the lessons. The quizzes and the games help to strengthen a Kinesthetic learner’s knowledge. This website sets out to make sure that those two types of learners are accounted for in the best ways possible. </div>
              </div>
              <img src={handStars} width='100'></img>
            </div>
          </div>
        </div>
    </>
    );
}

export default About;