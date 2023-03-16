import React from 'react'
import "./experience.css"
import image1 from "../../assets/price-1.svg";
import image2 from "../../assets/price-2.svg";
import image3 from "../../assets/price-3.svg";

export default function Experience() {
  return (
    <section className="experience container section">
      <h2 className="section__title">Experience</h2>
      
      <div className="experience__container grid">
        
        <div className="experience__item">
          <img src={image1} alt="" className="experience__img"></img>
          <h3 className="experience__title">DSA Scholar Intern</h3>
          <p className="experience__description">sfsfdfsfdffsdf dsfdfsfsfsdd sdfsdfdfffrtt rtgdxvxcvjg iffbwifjbuijbrg ijbijb bijbfiekjbg</p>
        </div>

        <div className="experience__item">
          <img src={image2} alt="" className="experience__img"></img>
          <h3 className="experience__title">Tech Lead</h3>
          <p className="experience__description">sfsfdfsfdffsdf dsfdfsfsfsdd sdfsdfdfffrtt rtgdxvxcvjg iffbwifjbuijbrg ijbijb bijbfiekjbg</p>
        </div>

        <div className="experience__item">
          <img src={image3} alt="" className="experience__img"></img>
          <h3 className="experience__title">Lorem</h3>
          <p className="experience__description">sfsfdfsfdffsdf dsfdfsfsfsdd sdfsdfdfffrtt rtgdxvxcvjg iffbwifjbuijbrg ijbijb bijbfiekjbg</p>
        </div>

      </div>
    </section>
  )
}
