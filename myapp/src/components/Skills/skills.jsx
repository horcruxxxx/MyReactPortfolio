import React from 'react'
import "./skills.css"
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

export default function skills() {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container grid">
      
            <div className="skills__card">
              <img src = {Image1} alt = "" className="skills__img"/> 
              <h3 className="skills__title">Frameworks/Libraries</h3>
              <ul type="disc">
                <li className="skills__description">• React js</li>
                <li className="skills__description">• Redux </li>
                <li className="skills__description">• Node js</li>
                <li className="skills__description">• Express js</li>
                <li className="skills__description">• jQuery</li>
                <li className="skills__description">• Bootstrap</li>
              </ul>
            </div>

            <div className="skills__card">
              <img src = {Image2} alt = "" className="skills__img"/> 
              <h3 className="skills__title">Languages</h3>
              <ul type="disc">
                <li className="skills__description">• Javascript</li>
                <li className="skills__description">• HTML/CSS</li>
                <li className="skills__description">• C++ </li>
                <li className="skills__description">• Python</li>
              </ul>
            </div>

            <div className="skills__card">
              <img src = {Image3} alt = "" className="skills__img"/> 
              <h3 className="skills__title">Database</h3>
              <ul type="disc">
                <li className="skills__description">• MongoDB</li>
                <li className="skills__description">• MySQl </li>
              </ul>
            </div>

            <div className="skills__card">
              <img src = {Image1} alt = "" className="skills__img"/> 
              <h3 className="skills__title">Others</h3>
              <ul type="disc">
                <li className="skills__description">• Rest API's</li>
                <li className="skills__description">• Competitive Programming </li>
                <li className="skills__description">• Data Structures</li>
                <li className="skills__description">• Git/Github</li>
                <li className="skills__description">• OpenCV</li>
              </ul>
            </div>
      </div>
      {/* <div className="skills__container grid">
        {data.map(({id,image,title,description})=>{
          return (
            <div className="skills__card" key={id}>
              <img src = {image} alt = "" className="skills__img"/> 
              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>

            </div>
          );
        })}
      </div> */}
    </section>
  )
}
