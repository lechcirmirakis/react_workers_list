import React from 'react';
import Container from './hoc/container';
import Members from './containers/Members';
import './App.scss';

const OurTeam = () => {
  return (
    <section className="OurTeam">
      <Container>
        <h2 className="OurTeam__title">Meet our team</h2>
        <Members />
        {/* <div className="OurTeam__members">
            <div className="member">

            </div>
          </div> */}
      </Container>
    </section>
  )
}


export default OurTeam;
