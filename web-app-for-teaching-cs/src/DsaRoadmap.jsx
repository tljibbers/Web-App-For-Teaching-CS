import {useNavigate} from 'react-router-dom';
import Header from './Header'
import RoadmapButton from './RoadmapButton';
import './roadmapButton.css'
import { useEffect } from 'react';

function DsaRoadmap() {
    const navigate = useNavigate();

    return (
        <>
        <Header />
            <div id='dsaTitle'>Data Structures and Algorithms</div>
            <div className= "RoadmapButtonContainer" id='DSAButtonContainer'>
                    <RoadmapButton name="Big O!" available={true} id="big-o" navigation='big-o' titleName="Big O" description="The first of the DSA lessons! Might be a bit tough to follow, but it will make sense over time."/>
                    <RoadmapButton name="Arrays + DSA" available={false} id="arrays-and-dsa"/>
                    <RoadmapButton name="Linked Lists" available={false} id="linked-lists"/>
                    <RoadmapButton name="Stacks/Queues" available={false} id="stacks-queues"/>
                    <RoadmapButton name="Hash Tables" available={false} id="hash-tables"/>
                    <RoadmapButton name="Searching" available={false} id="searching-techniques"/>
                    <RoadmapButton name="Sorting" available={false} id="sorting-techniques"/>
                    <RoadmapButton name= "Trees" available={false} id="trees"/>
                    <RoadmapButton name="DP" available={false} id="dynamic-programming"/>
            </div>
            <div className='displayContainer'>

            </div>
        </>
    )
}



export function destroyText(){
    const displayContainer = document.querySelector('displayContainer')
    displayContainer.replaceChildren()

}

export default DsaRoadmap;