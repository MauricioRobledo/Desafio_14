const numeroRandom = (cant) =>{
    const numeros =[]
    for(let i=0;i<cant;i++){
        const num = Math.random() * 1000
        numeros.push(num)
        
    }
    return numeros
}

process.send("listo")

process.on("message",(parentMsg)=>{
    if(parentMsg === "iniciar"){
        const resultado = numeroRandom(500000000)
        process.send(resultado)
    }
})