import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
console.log(process.env.OPENAI_API_KEY ,'key')

export default async function (req, res) {
    const{prompt } = req.body
    const resultimage = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024"
    });
    res.status(200).json({ result: resultimage.data.data[0].url });
}

