import React, { Component } from 'react';
import './App.scss';
import Container from './hoc/container';

class OurTeam extends Component {

  render() {
    return (
      <section className="OurTeam">
        <Container>
          <h2 className="OurTeam__title">Meet our team</h2>
          <div className="OurTeam__members">
            <div className="member">
          
            </div>
          </div>
        </Container>
      </section>
    )
  }
}

export default OurTeam;
