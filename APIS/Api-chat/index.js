const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configuração do CORS para permitir requisições de http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173', // Permite a origem específica
  methods: ['GET', 'POST'], // Permite apenas os métodos especificados
  credentials: true // Permite envio de cookies, se necessário
}));

app.use(express.json());

app.post('/completions', async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    res.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
    res.status(500).send('Erro ao chamar a API');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
