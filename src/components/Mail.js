import React from 'react';

const mail = props => {
    return (
        <a href={"mailto:" + props.mail}>
            <img src="/static/images/mail.png" alt="" />
        </a>
    )
}

export default mail;