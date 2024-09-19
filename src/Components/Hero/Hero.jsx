import React from 'react';
import "./Hero.css";
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>FOR NEW ARRIVALS ONLY</h2>
            <div className='hero-hand-icon-1'>
                <div className="hero-hand-icon">
                    <p>BestWatch</p>
                    <img src={hand_icon} alt="" />
                    <p>collection</p>
                </div>
                
                <p>for every one</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            
        </div>
    </div>
  )
}

export default Hero;