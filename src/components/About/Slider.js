import React, { useState } from 'react';
import { Photos1 } from './Photos1';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './Slider.css';
const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
   const length = slides.length;
    
   const nextSlide  = () => {
       setCurrent(current === length - 1 ? 0 : current + 1)
   }

   const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

   if(!Array.isArray(slides) || slides.length <= 0) {
       return null;
   }
    return (
        <section className="slider">
                            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                            <div className="header"><h2>Photos</h2></div>
                            <div className="counter">{current+1}/{length}</div>
                            {Photos1.map((slide, index) => {

                                return (
                                    
                                    <div
            className={index === current ? 'slide active' : 'slide'}
            key={index} marginBottom= '4rem'
          >
                                        {index === current && ( <img src={slide.image} alt ="test" className="image"/>
                                       
                                    )} 
                                </div> 
                                )
                            })}
                            </section>
    );
};

export default Slider;
