import React from 'react'
import "./experience.css"
import image1 from "../../assets/price-1.svg";
import image2 from "../../assets/price-2.svg";
import image3 from "../../assets/price-3.svg";

export default function Experience() {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      
      <div className="experience__container grid">
        
        <div className="experience__item">
          <img src={image1} alt="" className="experience__img"></img>
          <h3 className="experience__title">DSA Scholar Intern</h3>
          <ul>
            <li className="experience__description">• Reviewed technical content, codes, and articles</li>
            <li className="experience__description">• Beginnerto advance extensive DSA covered.</li>
            <li className="experience__description">• Solved questions on Data structures on different platforms like Leetcode, GFG etc.</li>
          </ul>
        </div>

        <div className="experience__item">
          <img src={image2} alt="" className="experience__img"></img>
          <h3 className="experience__title">Tech Lead</h3>
          <ul>
            <li className="experience__description">• Manages workloads to ensure even distribution of responsibilities.</li>
            <li className="experience__description">• Solve doubts related to different topics such as Dynamic Programming, recursion, etc.</li>
            <li className="experience__description">• Helped individuals to get started with Web Development and DSA</li>
          </ul>
        </div>

        <div className="experience__item">
          <img src={image3} alt="" className="experience__img"></img>
          <h3 className="experience__title">Lorem</h3>
          <ul>
            <li className="experience__description">• Reviewed technical content, codes, and articles</li>
            <li className="experience__description">• Beginnerto advance extensive DSA covered.</li>
            <li className="experience__description">• Solved questions on Data structures on different platforms like Leetcode, GFG etc.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
