import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './HomePage'
import Roadmap from './Roadmap'
import Games from './Games'
import About from './About'
import SignUp from './SignUp'  
import Header from './Header'   

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
            </Routes>
        </BrowserRouter>
        </>
    );
}
export default App