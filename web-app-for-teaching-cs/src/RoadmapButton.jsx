import hexagonImagePlain from './assets/hexagon-fill-svgrepo-com.svg';
import hexagonImageAvailable from './assets/hexagon-green.svg';
import lockImage from './assets/lock-svgrepo-com.svg';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';



function RoadmapButton(props){
    const navigate = useNavigate();
    
    function displayText(titleName, description) {
        
        const displayContainer = document.querySelector('.displayContainer')
        if(displayContainer){
            const createTitle = document.createElement('div')
            const createDescription = document.createElement('div')
        
            createTitle.textContent= titleName
            createTitle.id = 'titleDisplay'
            createDescription.textContent = description
            createDescription.id = 'titleDescription'
            displayContainer.appendChild(createTitle)
            displayContainer.appendChild(createDescription)
        }
    }

    function destroyText(){
        const displayContainer = document.querySelector('.displayContainer')
        if(displayContainer){
            displayContainer.replaceChildren()
        }
        

    }
    
    

    if (props.available === true) {
        return (
            <div className="roadmapButtonContainer" id={props.id} onClick={() => navigate('/' + props.navigation)} onMouseEnter={() => displayText(props.titleName, props.description)} onMouseLeave={()=> destroyText()}>
                <img src={hexagonImageAvailable} className="roadmapButton" width="120" height="116" ></img>
                <div className="roadmapButtonText">{props.name}</div>
            </div>
        );
    }

    return (
        <div className="roadmapButtonContainer" id={props.id} >
            <img src={hexagonImagePlain} className="roadmapButton" width="120" height="116"></img>
            <img src={lockImage} className="lockImage" width="20" height="20"></img>
            <div className="roadmapButtonTextLocked">{props.name}</div>
        </div>
    );
}



export default RoadmapButton;