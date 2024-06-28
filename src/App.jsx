// App.js
import React from 'react';
import Header from './header';
import Footer from './footer';
import About from './Contents/About';
import Eventlog from './Contents/Eventlog';
import Contact from './Contents/Contact';
import Home from './Contents/home';
import Blog from './Contents/Blog';
import NotFound from './Contents/Notfound';
import './styles/App.css';
import iconImage from "./Data/profileicon.png"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='body-content'>
          <img src={iconImage} alt="アイコン" className="rounded-icon" /> 
          <h2>ゆうまる🍀</h2>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/Eventlog" element={<Eventlog />}/>
              <Route path="/Contact" element={<Contact />}/>
              <Route path='/Blog' element={<Blog />}/>
              <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
