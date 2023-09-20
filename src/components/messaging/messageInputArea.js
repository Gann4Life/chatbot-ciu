import React from "react";

const MessageInputArea = ({addNewMessageFunction}) => {

	const sendMessage = (e) => {
		e.preventDefault();
		const messageInputElement = document.getElementById("inputMessage");
		const message = messageInputElement.value;

		if(!message)
		{
			// This shouldn't be required thanks to the form, but who knows...
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
		<form className="message-input-area" onSubmit={sendMessage}>
			<input
				id="inputMessage"
				required="true"
				type="text"
				placeholder="Escribe tu mensaje..."
			/>
			<button type="submit">Enviar</button>
		</form>
	);
}

export default MessageInputArea;