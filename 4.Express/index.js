const express = require('express'); //importando biblioteca 
const app = express(); //Inciciando e passando o express para uma outra const


app.get('/', function (req, res) { //cria uma rota(tem varias formas de criar uma rota) //toda rota tem que ter uma respota e apenas uma resposta
  res.send('<h1>Bem vindo ao servidor!!</h1>');//send pode enviar qualquer tipo de resposta 
});

app.get('/site', function (req, res) {
  res.send('<h1>Bem vindo ao site </h1>');
});

app.get('/canal/youtube', function (req, res) {  //usado quando o usúario passou qualquer query 
    var canal = req.query['canal']; //  URL exemplo http://localhost:8181/canal/youtube?canal=dohigor
     res.send(`<h3>O canal passado foi '${canal}'<h3>`); 
  //res.send('<h1>Bem vindo ao canal do Youtube</h1>');
});

app.get('/tec/:nomeDoUsuario', function (req, res) { //:parâmetro é passado pelo usuário
  //req = dados enviados pelo usuário 
  //res = resposta do servidor
  let nome = req.params.nomeDoUsuario;
  res.send('<h1>Olá ' + nome + ', seja bem vindo</h1>'); // ele vai devolver para usuario o parâmetro
});

app.get('/dados/:nomeDoUsuario/:idadeDoUsuario?', function (req, res) { //:parâmetro é opicional
  var nome = req.params.nomeDoUsuario;
  var idade = req.params.idadeDoUsuario;

  if (idade > 18) {
    res.send(`<h3>Olá ${nome}, seja bem vindo ao nosso site para pessoas com ${idade} anos </h3>`);
  }else{
    res.send(`<h3>Olá ${nome}, seja bem vindo ao site kids</h3>`); 
  }
});


app.listen(8181, function (erro) { //iniciando servidor http (sempre é a última coisa a se fazer)
  if (erro) {
    console.log('Ocorreu um erro !!!')
  } else {
    console.log('Servidor Online!')
  }
})