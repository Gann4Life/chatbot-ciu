import React from "react";

const Message = ({profileURL, message, author, date}) => {
	return(
		<div className={"message-container" + (author === "USER" ? " message-client" : "")}>
			<div>
				<img src={profileURL} alt=""/>
			</div>
			<div className="message-bubble">
				{/*<p>{author ? author + " says:" : ""}</p>*/}
				<p>{message}</p>
			</div>
		</div>
	);
}

export default Message