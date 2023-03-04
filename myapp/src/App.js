import React from 'react';
import './App.css';

//COMPONENTS
import Projects from "./components/Projects/projects";
import Contact from './components/Contact/contact';
import Sidebar from './components/Sidebar/sidebar';
import Home from './components/Home/home';
import About from './components/About/about';
import Education from './components/Education/education';
import Resume from './components/Resume/resume';
import Portfolio from './components/Portfolio/portfolio';
import Experience from './components/Experience/experience';
import Achievements from './components/Achievements/achievements';

function App() {
  return (
    <>
      <Sidebar/>
      <main classname = "main">
        <Home/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Achievements/>
        <Portfolio/>
        <Resume/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
