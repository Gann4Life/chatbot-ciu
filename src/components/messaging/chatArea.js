import React, { useState } from "react";
import Message from "./message"

const ChatArea = ({messagesList}) => {

	return (
		<div className="chat-area">
			<h1>This is the chat area.</h1>

			{
				messagesList.map((item, index) => (
					<Message
						key={index}
						author={item.author}
						message={item.message}
						profileURL={item.profileURL}
					/>
				))
			}

			{/*<Message*/}
			{/*	profileURL="https://dthezntil550i.cloudfront.net/35/0023927117/e62cb797-db81-4f82-8320-388f910b38ec.jpg"*/}
			{/*	message="IM YOUR DADDY"*/}
			{/*	author="SKITTLE-CHAN"*/}
			{/*/>*/}
		</div>
	);
}

export default ChatArea;