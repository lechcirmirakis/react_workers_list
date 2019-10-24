import React from 'react';
import Slider from "react-slick";
import Container from '../Container/container';
import membersList from '../../static/team';
import Slide from "./slide";
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 0.6s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const MembersSlider = props => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: props.slideInitial,
    arrows: true
  }

  const showAllSlides = slide => {
    const { id, name, position } = slide;
    return <Slide key={id} name={name} position={position} />
  }

  const changeSlide = (element) => document.querySelector(element).click()

  return (
    <StyleRoot>
      <div className="Slider" style={styles.fadeIn}>
        <div onClick={() => props.sliderToggle('close')} className="Slider__close">
          <img src="images/close.png" alt="" />
        </div>
        <Container>
          <div className="Slider__arrow Slider__arrow--left" onClick={() => changeSlide('.slick-prev')}>
            <img src="images/angle-left.png" alt="" />
          </div>
          <Slider {...settings}>
            {membersList.map(showAllSlides)}
          </Slider>
          <div className="Slider__arrow Slider__arrow--right" onClick={() => changeSlide('.slick-next')}>
            <img src="images/angle-right.png" alt="" />
          </div>
        </Container>
      </div>
    </StyleRoot>
  )
}

export default MembersSlider;