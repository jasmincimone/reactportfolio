import React from 'react';
import '../App.css'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../imgs/img1.JPG';
import image2 from '../imgs/img2.PNG';
import image3 from '../imgs/img3.png';
import image4 from '../imgs/img4.PNG';
import image5 from '../imgs/img5.png';
import image6 from '../imgs/img6.png';

function GDdata() {
    return(
        <div className="GDdata">
            <AliceCarousel 
            autoPlay 
            autoPlayInterval="3000"
            className="alicecarousel"
            
            // autoPlayDirection="rtl"
            // fadeOutAnimation={true}
            // disableAutoPlayOnAction={true}
            >
            <img src={image1} className="sliderimg" alt='AIRO time machine flyer'/>
            <img src={image2} className="sliderimg" alt='NDP Poster'/>
            <img src={image3} className="sliderimg" alt='Raynor Shine Product Label'/>
            <img src={image4} className="sliderimg" alt='Impact Pakistan Flyer'/>
            <img src={image5} className="sliderimg" alt='Raynor Shine Product Label'/>
            <img src={image6} className="sliderimg" alt='The Fix Self-Care Logo Honeysuckly Version'/>
</AliceCarousel>
        </div>
    );
}

export default GDdata;