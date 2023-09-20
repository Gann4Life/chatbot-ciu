export const welcomeMessage = "You're currently on the 'dev' branch. Got something to say?"

export const getChatbotAnswerFromPrompt = async (prompt) => {

	try {
		// USE ONLY ONE OF THE FOLLOWING FUNCTIONS

		// return await lowQualityResponse(prompt);
		return await midQualityResponse(prompt);
		// return await highQualityResponse(prompt);
	} catch (error) {
		console.log(error);
		return "Lo siento, no puedo responderte ahora mismo.";
	}
}

// Low quality response, meaant to be used in the dev branch for testing out messages.
async function lowQualityResponse(message) {
	// Using robomatic.ai

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

	const response = await fetch(url, options);
	const result = await response.text();
	const resultJSON = JSON.parse(result);
	return resultJSON.out;
}

// Mid quality response, meant to be used in the main branch for testing purposes.
async function midQualityResponse(message){
	const url = "https://ai-chatbot.p.rapidapi.com/chat/free?message=" + message.message + "&uid=user1";
	const options = {
	  method: 'GET',
	  headers: {
	    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
	    'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
	  }
	};

	const response = await fetch(url, options);
	const result = await response.text();
	const resultJSON = JSON.parse(result)

	return  resultJSON.chatbot.response;
}

// High quality response, meant to be used in the release branch.
async function highQualityResponse(message){
	const url = "https://chat-gpt-ai-bot.p.rapidapi.com/GenerateAIWritter?prompt=" + message.message;
	const options = {
	  method: 'GET',
	  headers: {
	    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
	    'X-RapidAPI-Host': 'chat-gpt-ai-bot.p.rapidapi.com'
	  }
	};

	const response = await fetch(url, options);
	const result = await response.text();
	return result;
}
