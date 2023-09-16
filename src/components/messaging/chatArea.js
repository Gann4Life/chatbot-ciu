import React, {useEffect, useRef, useState} from "react";
import Message from "./message"

const ChatArea = ({messagesList}) => {

	const ref = useRef(null);

	useEffect(() => {
		if(messagesList.length) {
			ref.current?.scrollIntoView()
		}
	}, [messagesList.length]);

	return (
		<div className="chat-area">
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
			<div ref={ref}></div>
		</div>
	);
}

export default ChatArea;