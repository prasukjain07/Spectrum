import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Team from "./Pages/Team"
import Event from './Pages/Event';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/event" element={<Event/>}/>
        </Routes>
    </div>
  );
}

export default App;
