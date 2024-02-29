// Importando os módulos Express e cors
const express = require('express');
const cors = require('cors');

// Inicializando o Express
const app = express();

// Habilitando o parsing de JSON
app.use(express.json());

// Habilitando o CORS para permitir acesso de qualquer origem
app.use(cors());

// Rota 1: Página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});

// Rota 2: Página sobre
app.get('/sobre', (req, res) => {
  res.send('Esta é a página sobre nós.');
});

// Rota POST: Recebe informações e escreve no console
app.post('/informacoes', (req, res) => {
  const informacoes = req.body;
  console.log('Informações recebidas:', informacoes);
  res.send('Informações recebidas com sucesso.');
});

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
