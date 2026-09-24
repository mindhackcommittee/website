import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Executives from './pages/Executives'
import Registration from './pages/Registration'
import Gallery from './pages/Gallery'
import Schedule from './pages/Schedule'

function App() {
    return (
        <>
            <div class="navbar">
                <div class="logodiv">
                    <img class="logo" src="TPMH2027Logo.png"></img>
                    <h>MindHack Carleton</h>
                </div>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/registration">Register</Link>
                    <Link to="/schedule">Schedule</Link>
                    <Link to="/executives">Executive Team</Link>
                    <Link to="/gallery">Gallery</Link>
                </nav>
            </div>
            <div class="page">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/schedule" element={<Schedule/>} />
                    <Route path="/executives" element={<Executives />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </div>
        </>
    )
}

export default App