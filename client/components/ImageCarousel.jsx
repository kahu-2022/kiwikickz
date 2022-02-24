import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

function ImageCarousel (props) {

const shoe = props.product
console.log(shoe)

return (
  <>
  <h1>I am a carousel</h1>

    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={3}
    >
      <Slider>
        <Slide tag="a" index={0}>
          <div>{shoe ? <Image width="200px" src={shoe.image1} /> : "loading"}</div>
        </Slide>
        <Slide tag="a" index={1}>
          <div>{shoe ? <Image width="200px" src={shoe.image2} /> : "loading"}</div>
        </Slide>
        <Slide tag="a" index={2}>
          <div>{shoe ? <Image width="200px" src={shoe.image3} /> : "loading"}</div>
        </Slide>
        <Slide tag="a" index={3}>
          <div>{shoe ? <Image width="200px" src={shoe.image4} /> : "loading"}</div>
        </Slide>


      </Slider>

      <Divider />
      {/* <CustomDotGroup slides={3} /> */}
    </CarouselProvider>
    </>
  )
}

export default ImageCarousel;