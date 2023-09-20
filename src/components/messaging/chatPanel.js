import React, {useEffect, useState} from "react";
import ChatArea from "./chatArea";
import MessageInputArea from "./messageInputArea";
import { getChatbotAnswerFromPrompt, welcomeMessage } from "../chatbot"

export const botProfileURL = "https://avatars.githubusercontent.com/u/56666653?v=4"
export const userProfileURL = "https://stpao.org/wp-content/uploads/2022/06/avatar-stpao.png";

const ChatPanel = () => {

	const [ messages, setMessages ] = useState([]);
	const [ isTyping, setIsTyping] = useState(() => false);

	useEffect(() => {
		sendMessageAsBot(welcomeMessage)
	}, []);

	async function sendMessageAsUser(newMessage) {
		newMessage.profileURL = userProfileURL;
		logNewMessage(newMessage);
		sendMessageAsBotFromPrompt(newMessage);
	}

	async function sendMessageAsBotFromPrompt(prompt) {
		setIsTyping(true);
		const answer = await getChatbotAnswerFromPrompt(prompt);
		sendMessageAsBot(answer);
	}

	function sendMessageAsBot(newMessage) {
		const botMessage = {
			message: newMessage,
			author: "BOT",
			profileURL: botProfileURL
		}
		logNewMessage(botMessage);
		setIsTyping(false);
	}

	function logNewMessage(newMessage) {
		setMessages(messages => [...messages, newMessage]);
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