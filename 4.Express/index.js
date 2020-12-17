const express = require('express'); //importando biblioteca 
const app = express(); //Inciciando e passando o express para uma outra const


app.get('/',function(req, res){ //cria uma rota(tem varias formas de criar uma rota) //toda rota tem que ter uma respota e apenas uma resposta
  res.send('<h1>Bem vindo ao servidor!!</h1>');//send pode enviar qualquer tipo de resposta 
});
app.get('/site',function(req,res){
  res.send('<h1>Bem vindo ao site </h1>');
});
app.get('/canal/youtube', function(req,res){
  res.send('<h1>Bem vindo ao canal do Youtube</h1>');
});



app.listen(8181,function(erro){ //iniciando servidor http (sempre é a última coisa a se fazer)
  if(erro){
    console.log('Ocorreu um erro !!!')
  }else{
    console.log('Servidor Online!')
  }
})