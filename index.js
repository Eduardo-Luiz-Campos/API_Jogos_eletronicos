const express = require('express');
const rotasJogos = require('./routes/jogos');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/jogos', rotasJogos);

app.get('/', (req,res) => {
    res.json({ mensagem: 'API jogos funcionando!'});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
