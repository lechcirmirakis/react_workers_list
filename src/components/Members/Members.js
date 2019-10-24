import React from 'react';
import Container from '../Container/container';
import membersList from '../../static/team';
import Member from './Member';

const Members = (props) => {

  const showAllMembers = member => {
    const { id, name, position, location, email, avatar } = member;

    return <Member
      name={name}
      position={position}
      location={location}
      // avatar={"http://lorempixel.com/g/400/400/people/" + Math.floor(Math.random() * 10)}
      avatar={avatar}
      key={id}
      email={email}
      click={() => props.sliderToggle(id)}
    />
  }

  return (
    <section className="OurTeam">
      <Container>
        <h2 className="OurTeam__title">Meet our team</h2>
        <div className="OurTeam__members">
          {membersList.map(showAllMembers)}
        </div>
      </Container>
    </section>
  )
}

export default Members
