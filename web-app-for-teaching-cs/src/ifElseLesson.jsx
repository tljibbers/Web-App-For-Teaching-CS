import Header from "./Header";
import {useNavigate} from 'react-router-dom';
import {useRef} from 'react';

function IfElseLesson() {

    const navigate = useNavigate();
    const jumpRef = useRef(null);
    const scroll = () => {
        jumpRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef2 = useRef(null);
    const scroll2 = () => {
        jumpRef2.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef3 = useRef(null);
    const scroll3 = () => {
        jumpRef3.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef4 = useRef(null);
    const scroll4 = () => {
        jumpRef4.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef5 = useRef(null);
    const scroll5 = () => {
        jumpRef5.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef6 = useRef(null);
    const scroll6 = () => {
        jumpRef6.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef7 = useRef(null);
    const scroll7 = () => {
        jumpRef7.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef8 = useRef(null);
    const scroll8 = () => {
        jumpRef8.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef9 = useRef(null);
    const scroll9 = () => {
        jumpRef9.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }


    return (
        <>
            <Header />
            <div>
                <div className="tableOfContentsIfElse">
                    <div onClick={() => navigate('/intro-to-programming')}> Back To Roadmap </div>
                    <div>Table of Contents</div>
                    <div id="what-is-an-array" onClick={scroll}>What is an Array?</div>
                    <div id="storing-things-in-an-array" onClick={scroll2}>Storing Things in an Array</div>
                    <div id="indexes" onClick={scroll3}>Indexes</div>
                    <div id="interactive-quiz" onClick={scroll4}>Interactive Quiz</div>
                    <div id="removing-things-in-an-array" onClick={scroll5}>Removing Things in an Array</div>
                    <div id="swapping-and-replacing-elements" onClick={scroll6}>Swapping and Replacing Elements</div>
                    <div id="interactive-quiz-2" onClick={scroll7}>Interactive Quiz #2</div>
                    <div id="some-extra-concepts" onClick={scroll8}>Some Extra Concepts</div>
                    <div id="conclusion" onClick={scroll9}>Conclusion</div>
                </div>
            </div>
        </>
    )
}