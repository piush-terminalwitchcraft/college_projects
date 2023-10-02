import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps{
    children: ReactNode[]
}

const Carousel = (props : CarouselProps) => {
    const {children} = props; 
  const settings = {
    dots: false,
    infinite: true,
    speed: 1600,
    slidesToShow: 2,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '0',
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 1600,   // Set autoplay speed in milliseconds (e.g., 3 seconds)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {
            children.map((child: ReactNode, index: number)=>{
                    return(
                        <div className='carousel-item' key={index}>{child}</div>
                    )
            })
        }
      </Slider>
    </div>
  );
};

export default Carousel;

