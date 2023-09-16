import React, {useState} from "react";
import ChatArea from "./chatArea";
import MessageInputArea from "./messageInputArea";

const ChatPanel = () => {

	const [ messages, setMessages ] = useState([])

	const botProfileURL = "https://dthezntil550i.cloudfront.net/35/0023927117/e62cb797-db81-4f82-8320-388f910b38ec.jpg"
	const userProfileURL = "";

	function sendMessageAsUser(newMessage) {
		newMessage.profileURL = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
		logNewMessage(newMessage);
		getThirdBotResponse(newMessage);
	}

	function logNewMessage(newMessage) {
		setMessages(messages => [...messages, newMessage])
	}


	async function getFirstBotResponse(message){
		const url = "https://ai-chatbot.p.rapidapi.com/chat/free?message=" + message.message + "&uid=user1";
		const options = {
		  method: 'GET',
		  headers: {
		    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
		    'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
		  }
		};

		try {
			const response = await fetch(url, options);
			const result = await response.text();
			const resultJSON = JSON.parse(result)

			const botMessage = {
				message: resultJSON.chatbot.response,
				author: "BOT",
				profileURL: botProfileURL
			}

			logNewMessage(botMessage)
			console.log(resultJSON);
		} catch (error) {
			console.error(error);
			logNewMessage({message: "Sorry, I can't answer right now.", author: "BOT", profileURL: botProfileURL})
		}
	}

	async function getSecondBotResponse(message){
		const url = "https://chat-gpt-ai-bot.p.rapidapi.com/GenerateAIWritter?prompt=" + message.message;
		const options = {
		  method: 'GET',
		  headers: {
		    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
		    'X-RapidAPI-Host': 'chat-gpt-ai-bot.p.rapidapi.com'
		  }
		};

		try {
			const response = await fetch(url, options);
			const result = await response.text();

			const botMessage = {
				message: result,
				author: "BOT",
				profileURL: botProfileURL
			}

			logNewMessage(botMessage);
		} catch (error) {
			console.error(error);
		}
	}

	async function getThirdBotResponse(message) {
		const encodedParams = new URLSearchParams();
		encodedParams.set('in', message);
		encodedParams.set('op', 'in');
		encodedParams.set('cbot', '1');
		encodedParams.set('SessionID', 'RapidAPI1');
		encodedParams.set('cbid', '1');
		encodedParams.set('key', 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP');
		encodedParams.set('ChatSource', 'RapidAPI');
		encodedParams.set('duration', '1');

		const url = 'https://robomatic-ai.p.rapidapi.com/api';
		const options = {
		  method: 'POST',
		  headers: {
		    'content-type': 'application/x-www-form-urlencoded',
		    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
		    'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
		  },
		  body: encodedParams
		};

		try {
			const response = await fetch(url, options);
			const result = await response.text();
			const resultJSON = JSON.parse(result);

			const botMessage = {
				message: resultJSON.out,
				author: resultJSON.who,
				profileURL: botProfileURL
			}

			logNewMessage(botMessage)

		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="chat-panel">
			<h1 className="center">Chat panel</h1>
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