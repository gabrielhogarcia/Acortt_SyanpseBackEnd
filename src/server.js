const app = require('./app');
const http = require('http');

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Servidor esttá rodando em http://localhost:${PORT}`)
})
// app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`));

