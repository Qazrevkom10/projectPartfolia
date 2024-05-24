import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import Image from '../images/image1.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>HELLO!</h1>
          <h1>Я <b>Mukanbet Iliyas</b></h1>
          <Typed/>   
        </div>

        <img src={Image} alt=""/>
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className="Name">About the title of the text</h1>
          <p>
            I like the process of turning a raw idea into a website or product that affects people's lives.
            I want to do a job that challenges me as a developer and that I can be proud of.<br/><br/>
            I work with <b>React</b>, <b>Node</b>, <b>MongoDB</b>, <b>Express</b>, and <b>Git</b>.<br/><br/>
            I like to drink coffee and watch movies.
          </p>
          <CiCoffeeCup style={{scale: "1.5", rotate: "15deg"}}/>

      </div>
      <Tilt>
        <img className='Avatar' src={Avatar} alt=""/>
      </Tilt>
    </div>
</div>
)
}

export default Home