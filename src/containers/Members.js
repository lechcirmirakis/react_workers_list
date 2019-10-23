import React from 'react';
import membersList from '../static/team';
import Member from '../components/Member';
import './Members.scss';

const Members = (props) => {

    const showAllMembers = member => {
        const { name, position, location, email } = member;

        return <Member
            name={name}
            position={position}
            location={location}
            avatar={"http://lorempixel.com/g/400/400/people/" + Math.floor(Math.random() * 10)}
            key={name}
            email={email}
            click={props.sliderToggle}
        />
    }

    return (
        <div className="OurTeam__members">
            {membersList.map(showAllMembers)}
        </div>
    )
}

export default Members
