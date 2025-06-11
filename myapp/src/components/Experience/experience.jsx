import React from 'react'
import "./experience.css"
import twowaits from "../../assets/twowaits_logo.png";
import maven from '../../assets/maven_technosoft_logo.jpeg'
import faclon from "../../assets/faclon_logo.jpeg";

export default function Experience() {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      
      <div className="experience__container grid">

        {/* <div className="experience__item">
          <img src={byte} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">Tech Lead</h3>
          <h4 className="subtitle">BYTE | Coding Club</h4>
          <ul>
            <li className="experience__description">• Manages workloads to ensure even distribution of responsibilities.</li>
            <li className="experience__description">• Solve doubts related to different topics such as Dynamic Programming, recursion, etc.</li>
            <li className="experience__description">• Helped individuals to get started with Web Development and DSA</li>
          </ul>
        </div> */}

        {/* <div className="experience__item">
          <img src={opensource} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">Open Source</h3>
          <h4 className="subtitle">Github</h4>
          <ul>
            <li className="experience__description">• Added a carousel slider to the landing page.</li>
            <li className="experience__description">• The slider showcased the project's main features and improved the page's visual appeal.</li>
            <li className="experience__description">• Adhering to coding standards, the project maintainers approved and merged my pull request.</li>
          </ul>
        </div> */}

        <div className="experience__item">
          <img src={maven} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">Software Developer</h3>
          <h4 className="subtitle">Maven Technosoft</h4>
          <h6 className='duration'>Mar 2024 - Present</h6>
          <ul>
            <li className="experience__description">• Led the development of new projects from bootstrap level to deployment.</li>
            <li className="experience__description">• Developed and maintained web applications using Angular 13+ and .NET frameworks.</li>
            <li className="experience__description">• Collaborated Directly with clients to gather and analyze requirements, technical specifications, and deliver customized solutions tailored to their unique objectives.</li>
            {/* <li className="experience__description">• Assisted in resolving production issues, improving code quality via reviews and optimizations.</li>
            <li className="experience__description">• Implemented unit test cases to ensure code reliability and functionality, using Jasmine and karma, and integrated testing processes into the development workflow.</li> */}
          </ul>
        </div> 

        <div className="experience__item">
          <img src={faclon} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">Frontend Developer</h3>
          <h4 className="subtitle">Faclon Labs</h4>
          <h6 className='duration'>May 2023 - Feb 2024</h6>
          <ul>
            <li className="experience__description">• Implemented a range of new features like creating widgets for IoT device data to craft dynamic visualizations for enhanced data representation using Highcharts.</li>
            <li className="experience__description">• Created dynamic dashboard aligning feature, crafting dynamic forms, Additionally, contributed to feature implementation in new products utilizing the GoJS framework.</li>
            <li className="experience__description">• Led complete product version upgrade of Angular from version 13 to 15, optimizing performance and embracing the latest features.</li>
            {/* <li className="experience__description">• Assisted in debugging and troubleshooting production issues to ensure smooth operation and user satisfaction.</li>
            <li className="experience__description">• Contributed to the continuous improvement of code quality, performance, and usability through code reviews and optimizations.</li> */}
          </ul>
        </div> 

        <div className="experience__item">
          <img src={twowaits} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">DSA Scholar Intern</h3>
          <h4 className="subtitle">TwoWaits Technologies</h4>
          <h6 className='duration'>Oct 2022 - Dec 2022</h6>
          <ul>
            <li className="experience__description">• Reviewed technical content, codes, and articles</li>
            <li className="experience__description">• Beginner to advance extensive DSA covered.</li>
            <li className="experience__description">• Solved questions on Data structures on different platforms like Leetcode, GFG etc.</li>
            <li className="experience__description">• Reached Among the Top 8.2% of users on Leetcode(Max-1777)</li><br></br>
            {/* <li className="experience__description"></li> */}
            {/* <li className="experience__description"></li> */}
          </ul>
        </div>

      </div>
    </section>
  )
}
