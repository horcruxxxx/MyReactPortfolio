import React from 'react';
import "./about.css";
import Mypic from "../../assets/dsa_logo.webp";
// import Mypic from "../../assets/avatar-2.svg";
import Aboutbox from './Aboutbox';

export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Mypic} alt="" width="190" className="about__img"/>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Rachit Saxena, a Seasoned Software Developer with <strong>2+ Years of experience in modern web technologies</strong>,
              which includes <strong>Angular, React</strong>, Node.js, and .NET . Over the years, I have honed my skills in 
              System Design, Data Structures & Algorithms, and Competitive Programming, 
              enabling me to build scalable and efficient solutions.
              <br></br><br></br>
              My passion for programming drives me to stay at the forefront of technology. 
              I have successfully delivered numerous <strong>Full Stack</strong> projects, 
              demonstrating strong problem solving abilities and a focus on delivering quality software.
            </p>
            <a href="https://drive.google.com/file/d/1EjTYznqV8VOVY2UBccxiV2uHiQsuwSEc/view?usp=drivesdk" className="btn">Download CV</a>
          </div>

          {/* SKILLS */}
          <div className="about__skills grid">

          <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Angular</h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage angular"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React.js</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage reactjs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage nodejs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">.NET Core</h3>
                <span className="skills__number ">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage dotnet"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C++</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage cpp"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles"> 
                <h3 className="skills__name">TypeScript</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage typescript"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Aboutbox/>
    </section>
  )
}
