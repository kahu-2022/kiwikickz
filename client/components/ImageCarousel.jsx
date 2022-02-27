import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider, Grid } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroup";

function ImageCarousel (props) {

const shoe = props.product

return (
  <>
  <Grid.Column>
     <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={500}
      totalSlides={4}
    >
      <Slider>
        <Slide tag="a" index={0}>
        {shoe ? <Image src={`data:image/jpg;base64,${shoe.image1}`} /> : "loading"}
        </Slide>
        <Slide tag="a" index={1}>
        {shoe ? <Image src={`data:image/jpg;base64,${shoe.image2}`} /> : "loading"}
        </Slide>
        <Slide tag="a" index={2}>
        {shoe ? <Image src={`data:image/jpg;base64,${shoe.image3}`} /> : "loading"}
        </Slide>
        <Slide tag="a" index={3}>
        {shoe ? <Image src={`data:image/jpg;base64,${shoe.image4}`} /> : "loading"}
        </Slide>
      </Slider>

      <Divider />
      <CustomDotGroup slides={4} />
    </CarouselProvider>
    </Grid.Column>
    </>
  )
}

export default ImageCarousel;