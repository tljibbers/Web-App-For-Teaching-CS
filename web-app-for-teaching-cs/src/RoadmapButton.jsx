import hexagonImagePlain from './assets/hexagon-fill-svgrepo-com.svg';
import hexagonImageAvailable from './assets/hexagon-green.svg';
import lockImage from './assets/lock-svgrepo-com.svg';

function RoadmapButton(props){
    if (props.available === true) {
        return (
            <div className="roadmapButtonContainer" id={props.id}>
                <img src={hexagonImageAvailable} className="roadmapButton" width="120" height="116"></img>
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

export function LineConnector(props) {
    return (
        <svg width="200" height="100">
            <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} stroke="#FFFFFF" strokeWidth="3" />
        </svg>
    )
}

export default RoadmapButton;