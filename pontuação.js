function formacaoDeTime(pontuacao, tamanho_do_time, k) {
  var pontuacao01 = [];
  //var pontuacaoDinamica = []

  pontuacao = [17, 12, 10, 2, 7, 2, 11, 20, 8];

  var pontuacaoDinamica = pontuacao01.concat(pontuacao);
  tamanho_do_time = 3;
  k = 4;

  //partes = Math.floor(pontuacao.length / 2);

 
  
  // separação dos primeiros e ultimos números 
  var primeiroK = pontuacao.slice(0, k);
  var ultimoK = pontuacao.slice(-k);
  var possiveisPontos = primeiroK.concat(ultimoK);

  //maior ponto
  soma = [];
  novaPontuacao = [];

  var numMax = Math.max.apply(null, possiveisPontos); //maior valor
  var posicao = possiveisPontos.indexOf(numMax); //maior valor


  //tira o maior valor do array

  if (posicao <= 3) {
   
    for (let i in primeiroK) {
      if (primeiroK[i] < numMax) {
        novaPontuacao.push(primeiroK[i]);
      } else if (primeiroK[i] == numMax) {
        //para evitar q tire todos os valores iguais do array
        //vai retirar o maior valor aparecer primeiro
        if (soma.indexOf(numMax) == -1) {
          //se não for encontrado o maior valor
          soma.push(primeiroK[i]);
        } else {
          //se o maior numero já estiver no array de soma
          novaPontuacao.push(primeiroK[i]);
        }
      } else {
        soma.push(primeiroK[i]);
      }
    }
    var complementoArray = pontuacao.slice(k);
    novaPontuacao = novaPontuacao.concat(complementoArray) //vai juntas a parte dos primeiros K numeros(já sem a pontuação da pessoa) com o restante do array original com as pontuações
    console.log(novaPontuacao, soma);

  } else if (posicao >= 4) {
   
    for (let i in ultimoK) {
      if (ultimoK[i] < numMax) {
        novaPontuacao.push(ultimoK[i]);
      } else if (ultimoK[i] == numMax) {
        //para evitar q tire todos os valores iguais do array
        //vai retirar o maior valor aparecer primeiro
        if (soma.indexOf(numMax) == -1) {
          //se não for encontrado o maior valor
          soma.push(ultimoK[i]);
        } else {
          //se o maior numero já estiver no array de soma
          novaPontuacao.push(ultimoK[i]);
        }
      } else {
        soma.push(ultimoK[i]);//reduce
      }
    }
    
    var complementoArray = pontuacao.slice(0,-k);
    
    novaPontuacao = complementoArray.concat(novaPontuacao) //vai juntas a parte dos ultimos K numeros(já sem a pontuação da pessoa) com o restante do array original com as pontuações
    console.log(novaPontuacao, soma);
  }

}

  

formacaoDeTime();



 /*   for (let i in pontuacao) {
    if (pontuacao[i] < numMax) {
      novaPontuacao.push(pontuacao[i]);

    } else if (pontuacao[i] == numMax) {

        //para evitar q tire todos os valores iguais do array
        //vai retirar o maior valor aparecer primeiro 
      if( soma.indexOf(numMax) == -1){  //se não for encontrado o maior valor  
        soma.push(pontuacao[i]);
        
      }else { //se o maior numero já estiver no array de soma
        novaPontuacao.push(pontuacao[i]);

      }

    } else {
      soma.push(pontuacao[i]);
    }
  }
  console.log(novaPontuacao, soma);
  */