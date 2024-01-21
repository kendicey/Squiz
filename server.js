const express = require("express");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
const CORS = require("cors");

require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(bodyParser.json());
app.use(CORS());

let conversationLog = []

const quizPrompt = (info) => {
    return `File content: ${info.fileContent}. 
            Based on the file content provided, generate ${info.questionNumber} quiz questions to test my knowledge.
            Level of difficulty: ${info.difficulty}.
            Return the questions in this JSON format:
            {
                "questions": [
                    {
                        "question1": "Question 1 Text",
                        "options": [
                            {"id": 1, "text": "Option 1 Text"},
                            {"id": 2, "text": "Option 2 Text"},
                            {"id": 3, "text": "Option 3 Text"},
                            {"id": 4, "text": "Option 4 Text"}
                        ],
                        "correctOptionId": 3
                    },
                    {
                        "question2": "Question 2 Text",
                        "options": [
                            {"id": 5, "text": "Option 1 Text"},
                            {"id": 6, "text": "Option 2 Text"},
                            {"id": 7, "text": "Option 3 Text"},
                            {"id": 8, "text": "Option 4 Text"}
                        ],
                        "correctOptionId": 5
                    },
                    {
                        "question3": "Question 3 Text",
                        "options": [
                            {"id": 9, "text": "Option 1 Text"},
                            {"id": 10, "text": "Option 2 Text"},
                            {"id": 11, "text": "Option 3 Text"},
                            {"id": 12, "text": "Option 4 Text"}
                        ],
                        "correctOptionId": 9
                    }
                ]
            }
            Return the JSON Object only. Do Not add other things.`;
};

const reQuizPrompt = (info) => {
    return `Please generate another ${info.questionNumber} questions for me.`;
}

app.get("/", (req, res) => {
  res.send("This is a GET!");
});

app.post("/quiz", async (req, res) => {
    const conversation = quizPrompt(req.body);

    conversationLog = [];

    conversationLog.push({
        role: "user",
        content: conversation,
    });

    try {
        const completion = await openai.chat.completions.create({
            messages: conversationLog,
            model: "gpt-3.5-turbo-1106",
        });

        conversationLog.push({
            role: "assistant",
            content: completion.choices[0].message.content,
        });

        res.send(completion.choices[0].message.content);
    } catch (error) {
        console.log(error);
    }

    console.log(conversationLog);
});

app.post("/new-questions-quiz", async (req, res) => {
    const conversation = reQuizPrompt(req.body);

    conversationLog.push({
        role: "user",
        content: conversation,
    });

    console.log(conversationLog);

    try {
        const completion = await openai.chat.completions.create({
            messages: conversationLog,
            model: "gpt-3.5-turbo-1106",
        });

        conversationLog.push({
            role: "assistant",
            content: completion.choices[0].message.content,
        });

        res.send(completion.choices[0].message.content);
    } catch (error) {
        console.log(error);
    }

    console.log(conversationLog);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Listening on 8000...");
});