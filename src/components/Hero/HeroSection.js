import React from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';
function HeroSection(props) {
    return (
			<div>
				<div className='hero-container'></div>
				{/* <video src='/public/Video/video-2.mp4' autoPlay loop muted /> */}
				<h1> Get a quote today </h1>
				<p> Shop with us for all your apparel needs </p>
                <div>
                    <Button
                     className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    ></Button> 
                </div>
			</div>
            
		);
}

export default HeroSection;