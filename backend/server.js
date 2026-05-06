require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Analysis = require('./models/Analysis');
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes");

mongoose.connect('mongodb://127.0.0.1:27017/refactorx')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Code Analysis API is running.'
  });
});

app.post('/api/analyze', async (req, res) => {
  const { code, language } = req.body;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({
      error: 'Request body must include a code string.'
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: 'OpenAI API key is not configured.'
    });
  }

  const prompt = `Analyze the following ${language || 'code'} and return a JSON object with the keys:\n` +
    `bugs: an array describing any issues or bugs,\n` +
    `optimizedCode: a rewritten improved version of the code if applicable,\n` +
    `explanation: a concise explanation of the findings and improvements.\n` +
    `Only return valid JSON. Do not include any extra text.\n\nCode:\n${code}`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful code analysis assistant.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 1200
    });

    const aiText = response.choices[0].message.content || '';
    let analysis;

    try {
      analysis = JSON.parse(aiText);
    } catch (parseError) {
      analysis = {
        language: language || 'unknown',
        bugs: [],
        optimizedCode: null,
        explanation: 'Unable to parse response from OpenAI.',
        raw: aiText
      };
    }


    await Analysis.create({
      code: code,
      language: language,
      result: analysis
    });


    res.json({
      success: true,
      analysis
    });
  } catch (error) {
    console.error('OpenAI request failed:', error);
    res.status(500).json({
      error: 'Failed to analyze code with OpenAI.',
      details: error.message || 'Unknown error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
