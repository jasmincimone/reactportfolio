import react from 'react';
import './App.css';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../imgs/img1';
import image2 from '../imgs/img2';
import image3 from '../imgs/img3';
import image4 from '../imgs/img4';
import image5 from '../imgs/img5';
import image6 from '../imgs/img6';
import image7 from '../imgs/img7';
import image8 from '../imgs/img0';

function GDdata() {
    return(
        <div className="GDdata">
            <AliceCarousel 
            autoPlay={true}
            responsive={this.responsive} 
            autoPlayInterval={3000}
            autoPlayDirection="rtl"
            fadeOutAnimation={true}
            disableAutoPlayOnAction={true}
            >
            <img src={image1} className="sliderimg"/>
            <img src={image2} className="sliderimg"/>
            <img src={image3} className="sliderimg"/>
            <img src={image4} className="sliderimg"/>
            <img src={image5} className="sliderimg"/>
            <img src={image6} className="sliderimg"/>
            <img src={image7} className="sliderimg"/>
            <img src={image8} className="sliderimg"/>
</AliceCarousel>
        </div>
    );
}

export default GDdata;