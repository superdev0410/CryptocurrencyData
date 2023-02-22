import React  from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Paginater from './components/paginater'
import "./App.css"

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<div className='main-app'><Paginater/></div>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
  );
}

export default App;
