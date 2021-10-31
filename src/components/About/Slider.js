/*
* Code written by: Jason You 
*/
import React, { useState } from 'react';
import { Photos1 } from './Photos1';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Slider.css';
const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className="slider" >
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {Photos1.map((slide, index) => {
                return (

                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <LazyLoadImage
                                alt="My Pictures"
                                src= {slide.image} 
                                className='image'
                                effect="blur"/>
                        )}
                    </div>
                )
            })}
        </section>
    );
};

export default Slider;
