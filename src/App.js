import React, { Component } from 'react';
import Members from './components/Members/Members';
import Slider from './components/Slider/Slider';
import './App.scss';

class OurTeam extends Component {
  state = {
    isSlider: false,
    slideInitial: 0
  }

  sliderHandler = (element) => {
    const sliderStatus = this.state.isSlider;
    element !== 'close' ? this.setState({ isSlider: !sliderStatus, slideInitial: element - 1 }) : this.setState({ isSlider: !sliderStatus });
  }

  render() {
    let mainView = (
      !this.state.isSlider ? <Members sliderToggle={this.sliderHandler} /> : <Slider slideInitial={this.state.slideInitial} sliderToggle={this.sliderHandler} />
    )

    return (
      <>
        {mainView}
      </>
    )
  }
}

export default OurTeam;
