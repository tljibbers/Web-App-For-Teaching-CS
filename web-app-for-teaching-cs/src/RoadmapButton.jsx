import hexagonImagePlain from './assets/hexagon-fill-svgrepo-com.svg';
import hexagonImageAvailable from './assets/hexagon-green.svg';

function RoadmapButton(props){
    if (props.available === true) {
        return (
            <div className="roadmapButtonContainer">
                <img src={hexagonImageAvailable} className="roadmapButton" width="120" height="116"></img>
                <div className="roadmapButtonText">{props.name}</div>
            </div>
        );
    }

    return (
        <div className="roadmapButtonContainer">
            <img src={hexagonImagePlain} className="roadmapButton" width="120" height="116"></img>
            <div className="roadmapButtonText">{props.name}</div>
        </div>
    );
}

export default RoadmapButton;