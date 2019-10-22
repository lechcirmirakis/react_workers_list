import React, { Component } from 'react';
import membersList from '../static/team';
import Member from '../components/Member';

class Members extends Component {

    showAllMembers = member => {
        const {name, position, location, avatar, email} = member;
        return <Member 
            name={name} 
            position={position} 
            location={location} 
            avatar={avatar} 
            key={name} 
            email={email} />
    }

    render() {
        return (
            <div className="OurTeam__members">
                {membersList.map(this.showAllMembers)}
            </div>
        )
    }
}

export default Members
