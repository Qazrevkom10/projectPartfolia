import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import Img from '../images/img2.jpg';
const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
  Hi, my name is <b>Mukanbet Ilyas</b>, and I am from Zharkent, Kazakhstan.
  I am a <b>web developer</b> and a third-year student, pursuing a degree in <b>Digital Management Design</b>. <br/><br/>
  I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
  I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
  Apart from programming, I love watching movies, you can check out my Instagram <a href="https://www.instagram.com/mukanbet_iliyas?igsh=MXFwcG1tcTZ6cmNtdQ%3D%3D&utm_source=qr" target='_blank'>here</a>.
</p>


        </div>

        <div>
            <img src={Img} alt="" width={250} height={400}/>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='MongoDb' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />

      </div>
    </>
  )
}

export default About