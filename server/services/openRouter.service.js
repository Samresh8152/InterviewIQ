import axios from 'axios';

export const askAi = async (message) => {
    try {
        if(!message || !Array.isArray(message) || message.length === 0) {
            throw new Error("Message must be a non-empty array");
        }
        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions',
            {
                model: "openai/gpt-4o-mini",
                messages: message
            },
            {headers: {
    Authorization:` Bearer ${process.env.OPENROUTER_API_KEY}`,
   
    'Content-Type': 'application/json',
  },}
        );

    } catch (error) {
        
    }
}