import Header from './Header'
import './roadmap.css'

function Roadmap() {
  return (
    <>
        <Header />
        <div id="roadmapTitle">Roadmap</div>
        <div className="roadmapButtonFlex">
           <button id="itpButton">Intro to Programming</button>
           <button id="dsaButton">Data Structures And Algorithms</button>
        </div>
    </>
    );
}

export default Roadmap;