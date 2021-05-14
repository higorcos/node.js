enviarEmail = (para,corpo,callback) =>{
setTimeout(()=>{

  const err = false;
  if(err){
    callback("4s","err");
  }else{
    callback("4s");
  }
},4000)
}
console.log('/////')

enviarEmail('higorpinheirocosta@gmail.com', "Como vai o curso ?", (time,status) => {
  if(status == undefined){// não deu erro
     console.log("tempo de execução", time)
     console.log("")

  }else{
  console.log(status)
  }
})
