import React from 'react';

const mail = props => {
	return (
		<a className="mail" href={"mailto:" + props.mail}>
			<img src="images/mail.png" alt="" />
		</a>
	)
}

export default mail;