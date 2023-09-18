import React, {useState} from "react";
import ChatArea from "./chatArea";
import MessageInputArea from "./messageInputArea";
import { getChatbotAnswerFromPrompt } from "../chatbot"

const ChatPanel = () => {

	const [ messages, setMessages ] = useState([])

	const botProfileURL = "https://dthezntil550i.cloudfront.net/35/0023927117/e62cb797-db81-4f82-8320-388f910b38ec.jpg"
	const userProfileURL = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

	async function sendMessageAsUser(newMessage) {
		newMessage.profileURL = userProfileURL;
		logNewMessage(newMessage);
		sendMessageAsBot(await getChatbotAnswerFromPrompt(newMessage));
	}

	function sendMessageAsBot(newMessage) {
		const botMessage = {
			message: newMessage,
			author: "BOT",
			profileURL: botProfileURL
		}
		logNewMessage(botMessage)
	}

	function logNewMessage(newMessage) {
		setMessages(messages => [...messages, newMessage])
	}

	return (
		<div className="chat-panel">
			<ChatArea
				messagesList={messages}
			/>
			<MessageInputArea
				addNewMessageFunction={sendMessageAsUser}
			/>

		</div>
	)
}

export default ChatPanel