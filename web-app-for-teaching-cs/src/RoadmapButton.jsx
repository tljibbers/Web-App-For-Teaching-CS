import hexagonImagePlain from './assets/hexagon-fill-svgrepo-com.svg';
import hexagonImageAvailable from './assets/hexagon-green.svg';
import lockImage from './assets/lock-svgrepo-com.svg';
import {useNavigate} from 'react-router-dom';


function RoadmapButton(props){
    const navigate = useNavigate();
    if (props.available === true) {
        return (
            <div className="roadmapButtonContainer" id={props.id} onClick={() => navigate('/' + props.navigation)}>
                <img src={hexagonImageAvailable} className="roadmapButton" width="120" height="116" ></img>
                <div className="roadmapButtonText">{props.name}</div>
            </div>
        );
    }

    return (
        <div className="roadmapButtonContainer" id={props.id}>
            <img src={hexagonImagePlain} className="roadmapButton" width="120" height="116"></img>
            <img src={lockImage} className="lockImage" width="20" height="20"></img>
            <div className="roadmapButtonTextLocked">{props.name}</div>
        </div>
    );
}



export default RoadmapButton;