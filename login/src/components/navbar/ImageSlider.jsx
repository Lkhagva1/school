import React from 'react'
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
const ImageSlider = ({slides}) => {
   
  return (
    <Carousel infiniteLoop autoPlay showThumbs={false} >
      {slides.map((slide) => {
        return <Image src={slide.image} borderRadius='70px 0px' />;
      })}
    </Carousel>
  )
}

export default ImageSlider
