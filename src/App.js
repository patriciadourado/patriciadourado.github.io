import React from 'react';
import './js/main.js';
import '../node_modules/jquery/dist/jquery';
/* import 'font-awesome/css/font-awesome.min.css'; */
import Menu from './components/Menu';
import Intro from './components/Intro';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
        <fragment>
        <Menu/>
        <Intro/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        </fragment>

  );
}

export default App;
