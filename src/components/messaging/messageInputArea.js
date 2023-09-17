import React from "react";

const MessageInputArea = ({addNewMessageFunction}) => {

	const sendMessage = (e) => {
		e.preventDefault();
		const messageInputElement = document.getElementById("inputMessage");
		const message = messageInputElement.value;

		if(!message)
		{
			alert("Please provide a message.");
			return;
		}

		addNewMessageFunction(
			{
				author: "USER",
				message: message,
			}
		);

		// Clear previous message
		messageInputElement.value = "";
	}

	return (
		<div className="message-input-area">
			<form onSubmit={sendMessage}>
				<input id="inputMessage" type="text" placeholder="¡Hola! ¿Qué tal?"/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
}

export default MessageInputArea;