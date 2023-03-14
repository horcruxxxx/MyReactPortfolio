import React from 'react'
import "./home.css";
import Mypic from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src = {Mypic} alt = "pic" className="home__img"/>
        <h1 className="home__name">Rachit Saxena</h1>
        <span className="home__designation">I am a MERN Stack Developer</span>
        

        <HeaderSocials/>
        <a href = "#contact" className="btn">Hire Me</a>
        <ScrollDown/>
      
      </div>
      
      <Shapes/>
    </section>
  )
}
