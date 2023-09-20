import React, {useEffect, useRef } from "react";
import Message from "./message"
import { botProfilePicture } from "../chatbot";

const ChatArea = ({messagesList, isTyping}) => {

	const ref = useRef(null);

	useEffect(() => {
		if(messagesList.length) {
			ref.current?.scrollIntoView()
		}
	}, [messagesList.length]);

	return (
		<div className="chat-area">
			{/*Render all messages sent by everyone*/
				messagesList.map((item, index) => (
					<Message
						key={index}
						author={item.author}
						message={item.message}
						profileURL={item.profileURL}
					/>
				))
			}

			{
				/*
				I know that what i have below this line is terrible but
				basically when a message value is not assigned, three
				dots appear to show that the chatbot is processing something.
				What I currently do is display an empty message with the
				bot's profile picture when "isTyping" is false,
				and hide it when its true (when the actual message gets sent).
				*/
				isTyping
				? <Message profileURL={botProfilePicture}/>
				: ""
			}

			<div ref={ref} id="message-area-last"></div>
		</div>
	);
}

export default ChatArea;