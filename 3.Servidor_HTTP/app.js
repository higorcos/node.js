var http = require('http');

http.createServer(function (requisicao, resposta) {
  resposta.end('<h1>Bem vindo ao servidor<h1>');
}).listen(8181);//cria o servidor http na porta indicada 
//acesse o servidor entrando no localhost:'porta escolhida' no seu navegador
console.log('O servidor o servidor tá on');
//para parar o servidor aperte Ctrl+C