import React, { Component } from 'react';
import membersList from '../static/team';
import Member from '../components/Member';
import './Members.scss';

class Members extends Component {

    showAllMembers = member => {
        const { name, position, location, email } = member;
        return <Member
            name={name}
            position={position}
            location={location}
            avatar={"https://picsum.photos/id/"+ Math.floor(Math.random() * 100) + "/400/400"}
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
