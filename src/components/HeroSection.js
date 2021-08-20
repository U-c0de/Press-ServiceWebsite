import React from 'react';
import '../App.css';
import vid2 from '../img/vid2.mp4';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vid2} autoPlay loop muted alt='vid' />
      <h1>DADA PRINTING WORKS</h1>
      <br></br>
      <br></br>
      <br></br>
      <p><b>Delhi's Famous Press</b></p>
      <br></br>
      <br></br>
      <p>For Queries Dial: 941XXXXXXX</p>
      <p></p>

    </div>
  );
}

export default HeroSection;
