const server = require('./server');

const port = process.env.PORT || 3355;

server.listen(port, () => console.log(`Servidor executando na porta ${port}`));