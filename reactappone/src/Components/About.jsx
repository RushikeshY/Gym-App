import React from 'react'
import aboutimage from "../images/about.png"
const About = () => {
  return (
    <div>
    <div id="about">
        <div className="about-image">
           <img src={aboutimage} alt="" />
         </div>
         <div className="about-text">
             <h1>LEARN MORE</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia velit quis ex illo cupiditate recusandae quod, commodi autem nostrum voluptatum?</p>
             <button>READ MORE</button>
         </div>
    </div>
    </div>
  )
}

export default About