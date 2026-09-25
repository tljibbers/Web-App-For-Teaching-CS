import {useNavigate} from 'react-router-dom';
import Header from './Header'
import RoadmapButton from './RoadmapButton'
import './roadmapButton.css'
import { LineConnector } from './RoadmapButton'

function ItpRoadmap() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <RoadmapButton name="Hello World!" available={false} id="hello-world" />
            <LineConnector x1="90" y1="100" x2="250" y2="10" />
            <RoadmapButton name="Variables" available={false} id="variables" />
            <RoadmapButton name="Operators" available={false} id="operators" />
            <RoadmapButton name="Functions" available={false} id="functions" />
            <RoadmapButton name="Arrays" available={true} id="arrays" />
            <RoadmapButton name="Data Types" available={false} id="data-types" />
            <RoadmapButton name="Type Casting" available={false} id="type-casting" />
            <RoadmapButton name= "If/Else/Then" available={true} id="if-else-then" />
            <RoadmapButton name="Loops" available={false} id="loops" />
            <RoadmapButton name="Recursion" available={false} id="recursion" />
        </>
    )
}

export default ItpRoadmap;