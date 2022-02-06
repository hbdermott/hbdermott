import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
		prompt: `Add a creative sentence to the fantasy fiction novel:
    ${req.body.story}
    `,
		// temperature: 0.9,
    max_tokens: 16,
		frequency_penalty: 1.8,
		n: 4,
	});
  res.status(200).json({ options: completion.data.choices});
}