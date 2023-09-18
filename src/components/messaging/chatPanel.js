import React, {useState} from "react";
import ChatArea from "./chatArea";
import MessageInputArea from "./messageInputArea";
import { getChatbotAnswerFromPrompt } from "../chatbot"

export const botProfileURL = "https://dthezntil550i.cloudfront.net/35/0023927117/e62cb797-db81-4f82-8320-388f910b38ec.jpg"
export const userProfileURL = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

const ChatPanel = () => {

	const [ messages, setMessages ] = useState([]);
	const [ isTyping, setIsTyping] = useState(() => false);

	async function sendMessageAsUser(newMessage) {
		newMessage.profileURL = userProfileURL;
		logNewMessage(newMessage);
		sendMessageAsBotFromPrompt(newMessage);
	}

	async function sendMessageAsBotFromPrompt(prompt) {
		setIsTyping(true);
		const botMessage = {
			message: await getChatbotAnswerFromPrompt(prompt),
			author: "BOT",
			profileURL: botProfileURL,
		}
		logNewMessage(botMessage);
		setIsTyping(false);
	}

	function logNewMessage(newMessage) {
		setMessages(messages => [...messages, newMessage])
	}

	return (
		<div className="chat-panel">
			<ChatArea
				messagesList={messages}
				isTyping={isTyping}
			/>
			<MessageInputArea addNewMessageFunction={sendMessageAsUser}/>
		</div>
	)
}

export default ChatPanel