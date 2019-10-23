import React, { Component } from 'react';
import Container from './hoc/container';
import { fadeInDownBig } from 'react-animations';
import Members from './containers/Members';
import Radium, { StyleRoot } from 'radium';
import './App.scss';

const styles = {
	fadeInDownBig: {
		animation: 'x 0.5s',
		animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
	}
}

class OurTeam extends Component {
	state = {
		isSlider: true
	}

	sliderHandler = () => {
		const sliderStatus = this.state.isSlider;
		this.setState({
			isSlider: !sliderStatus
		})
	}

	render() {
		let mainView;

		if (this.state.isSlider) {
			mainView = (
				<section className="OurTeam">
					<Container>
						<h2 className="OurTeam__title">Meet our team</h2>
						<Members sliderToggle={this.sliderHandler} />
					</Container>
				</section>
			)
		}

		else {
			mainView = (
				<StyleRoot>
					<div className="Slider" style={styles.fadeInDownBig}>
						DUPA
					</div>
				</StyleRoot>
			)
		}

		return (
			<>
				{mainView}
			</>
		)
	}
}

export default OurTeam;
