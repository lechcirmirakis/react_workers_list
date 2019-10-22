import React from 'react';
import Mail from './Mail';

const member = (props) => {
    return (
        <div className="member">
            <div className="member__avatar">
                <img className="avatar" src={props.avatar} alt=""/>
                <Mail mail={props.email} />
                <div className="overlay"></div>
            </div>
            <div className="member__content">
                <h3 className="name">{props.name}</h3>
                <h5 className="position">{props.position}</h5>
                <h5 className="location">{props.location}</h5>
            </div>
        </div>
    )
}


export default member;