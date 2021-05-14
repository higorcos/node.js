enviarEmail = (para, corpo) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const err = true;
  
      if (err) {
        reject('404');
      } else {
        resolve({time: 6, to: "gmail"});
      }
    }, 2000);
  });
};

enviarEmail("Olá, mundo").then((dados)=>{  //then(({time, to })=>{  ====== destrateri time = dados.time
  console.log(`sucesso ${dados.time}`);
}).catch((err)=>{
  console.log(`erro ${err}`)
})
/* 
// promise hell == varias promises uma dentro da outra
function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("victorlima@guia.com.br")
        },2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "victor@udemy.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },4000)
    });
}


console.log("Inicio!");
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => { 
        enviarEmail("Olá, como vai?",email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("FIM"); */