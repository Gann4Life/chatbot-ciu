import React from "react";

const Message = ({profileURL, message, author, date}) => {
	return(
		<div className={"message-container" + (author === "USER" ? " message-client" : "")}>
			<div>
				<img src={profileURL} alt=""/>
			</div>
			<div className="message-bubble">
				{!message
					?
					<div>
						<div className="typing-message">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					:
					<p>{message}</p>
				}
			</div>
		</div>
	);
}

export default Message