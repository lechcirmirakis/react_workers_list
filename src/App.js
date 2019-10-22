import React, { Component } from 'react';
import Container from './hoc/container';
import Members from './containers/Members';
import './App.scss';

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
				<div className="slider">
					DUPA
			</div>
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
