import Header from './Header'
import './roadmap.css'
import {useNavigate} from 'react-router-dom'

function Roadmap() {
  const navigate = useNavigate();
  return (
    <>
        <Header />
        <div id="roadmapTitle">Roadmap</div>
        <div className="roadmapButtonFlex">
           <button id="itpButton" onClick={() => navigate('/intro-to-programming')}>Intro to Programming</button>
           <button id="dsaButton" onClick={() => navigate('/data-structures-and-algorithms')}>Data Structures And Algorithms</button>
        </div>
    </>
    );
}

export default Roadmap;