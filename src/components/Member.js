import React from 'react';
import Mail from './Mail';

const member = (props) => {
    return (
        <div className="member">
            <img src={props.avatar} alt=""/>
            <h3 className="member__name">{props.name}</h3>
            <h5 className="member__position">{props.position}</h5>
            <h5 className="member__location">{props.location}</h5>
            <Mail mail={props.email} />
        </div>
    )
}


export default member;