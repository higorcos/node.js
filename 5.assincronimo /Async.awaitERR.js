function pegarId(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(1)   
      },1500)
  })
}

function buscarEmailNoBanco(id){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(id != 0){
          resolve("victorlima@guia.com.br")
        }else{
          reject("email não encontrado")
        }
      },2000);
  })
}

function enviarEmail(msg, email){
  return new Promise((resolve, reject) => {
      setTimeout(() => {  
          var deuErro = false;
          if(!deuErro){
              resolve("sucesso") // Promessa OK!
          }else{
              reject("erro") // Foi mal, eu falhei :(
          }
      },4000)
  });
}

async function Go(){
  const Id = await pegarId();
  console.log(Id);
  //tratamento de erro com await 
  try{
    const Email = await buscarEmailNoBanco(Id);
    console.log(Email)

    //promise não trava na ação mesmo dentro do try ela funciona bem 
    enviarEmail('Email do servidor online linux', Email).then((email) =>{
      console.log("email enviado")
    }).catch((err)=>{
      console.log("Erro no envio")
    }) 
    console.log('...')
   
  }catch(err){
    console.log(err)
  }
  /*    
  enviarEmail('Email do servidor online linux', Email).then((email) =>{
    console.log("email enviado")
  }).catch((err)=>{
    console.log("Erro no envio")
  })  */

}

Go()
/*
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
console.log("FIM");
*/