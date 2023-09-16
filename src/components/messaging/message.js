import React, {Fragment} from "react";

const Message = ({profileURL, message, author, date}) => {
	return(
		<div className="message-container">
			<img src={profileURL} alt=""/>
			<div className="message-bubble">
				<p>{author ? author + " says:" : ""}</p>
				<p>{message}</p>
			</div>
		</div>
	);
}

export default Message