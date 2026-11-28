
import Header from './Header'
import RoadmapButton from './RoadmapButton'
import './roadmapButton.css'

function ItpRoadmap() {

    return (
        <>
            <Header />
            <div id='itpTitle'>Intro To Programming</div>
            <div className= "RoadmapButtonContainer" id='ITPButtonContainer'> 
                <RoadmapButton name="Hello World!" available={false} id="hello-world" />
                <RoadmapButton name="Variables" available={false} id="variables"/>
                <RoadmapButton name="Operators" available={false} id="operators"/>
                <RoadmapButton name="Functions" available={false} id="functions"/>
                <RoadmapButton name="Arrays" available={true} id="arrays" navigation="arrays" titleName='Arrays' description='One of the most important fundamentals of programming.'/>
                <RoadmapButton name="Data Types" available={false} id="data-types"/>
                <RoadmapButton name="Type Casting" available={false} id="type-casting"/>
                <RoadmapButton name= "If/Else/Then" available={true} id="if-else-then" navigation="if-else-then" titleName="If, Else, Then" description='Another building block towards understanding programming! (GAME COMES INCLUDED)'/>
                <RoadmapButton name="Loops" available={false} id="loops"/>
                <RoadmapButton name="Recursion" available={false} id="recursion"/>
            </div>
            <div className='displayContainer'>

            </div>
        </>
    )
}

export default ItpRoadmap;