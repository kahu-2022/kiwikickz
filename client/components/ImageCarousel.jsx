import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroup";

function ImageCarousel (props) {

const shoe = props.product

return (
  <>
     <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={500}
      totalSlides={4}
    >
      <Slider>
        <Slide tag="a" index={0}>
        {shoe ? <Image src={shoe.image1} /> : "loading"}
        </Slide>
        <Slide tag="a" index={1}>
        {shoe ? <Image src={shoe.image2} /> : "loading"}
        </Slide>
        <Slide tag="a" index={2}>
        {shoe ? <Image src={shoe.image3} /> : "loading"}
        </Slide>
        <Slide tag="a" index={3}>
        {shoe ? <Image src={shoe.image4} /> : "loading"}
        </Slide>
      </Slider>

      <Divider />
      <CustomDotGroup slides={4} />
    </CarouselProvider>
    </>
  )
}

export default ImageCarousel;