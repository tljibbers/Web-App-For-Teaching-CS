import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './HomePage'
import Roadmap from './Roadmap'
import Games from './Games'
import About from './About'
import SignUp from './SignUp'  
import ItpRoadmap from './ItpRoadmap'
import DsaRoadmap from './DsaRoadmap'
import ArrayLesson from './arrayLesson'
import IfElseThenLesson from './ifElseThenLesson'


function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/games" element={<Games />} />
                <Route path="/about" element={<About />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/intro-to-programming" element={<ItpRoadmap/>} />
                <Route path="/data-structures-and-algorithms" element={<DsaRoadmap/>} />
                <Route path="/arrays" element={<ArrayLesson/>} />
                <Route path="/if-else-then" element={<IfElseThenLesson/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
}
export default App