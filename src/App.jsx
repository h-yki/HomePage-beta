// App.js
import React from 'react';
import Header from './header';
import Footer from './footer';
import About from './About';
import Eventlog from './Eventlog';
import Contact from './Contact';
import Home from './home';
import './styles/App.css';
import iconImage from "./profileicon.png"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='body-content'>
          <img src={iconImage} alt="アイコン" className="rounded-icon" /> 
          <h2>原ちゃん❄️/ゆうまる🍀</h2>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/Eventlog" element={<Eventlog />}/>
              <Route path="/Contact" element={<Contact />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
