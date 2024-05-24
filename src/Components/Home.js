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
          <h1>всем привет!</h1>
          <h1>Я <b>Муканбет Ильяс</b></h1>
          <Typed/>   
        </div>

        <img src={Image} alt=""/>
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Краткое введение </h1>
          <p>
            Мне нравится процесс превращения сырой идеи в веб-сайт или продукт
            это влияет на жизни людей.
            Я хочу заниматься работой, которая бросает вызов мне как разработчику, и которой я могу
            гордиться.<br /><br />
            Я работаю с <b>React</b>, <b>Node</b>, <b>MongoDb</b>, <b>Express</b> и <b>Git</b>.<br /><br />
            Я люблю пить кофе и смотреть фильмы.<br />
             <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home