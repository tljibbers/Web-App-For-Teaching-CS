import {useNavigate} from 'react-router-dom';
import Header from './Header'
import RoadmapButton from './RoadmapButton'
import './roadmapButton.css'

function ItpRoadmap() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <RoadmapButton name="Hello World!" available={true} />
        </>
    )
}

export default ItpRoadmap;