const fs = require('fs')
const path = require('path')

// fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
//     console.log('bufferizado')
    

//     fs.writeFile('./assets/salsicha2.jpg', buffer, erro => {
//         console.log('salsicha2 criado')   
//     })
// })
module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg','png','jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1 

    if (tipoEhValido) {
        const novoCaminho = `./assets/images/${nomeDoArquivo}${tipo}`
        /*no curso, a funcao callbackImagemCriada linha 27, retornava falso no cenario de ok para salvar a imagem.
        fazendo com que o callback retornasse falso para funcao Pet.adiciona forçando com que ela
        salvasse o arquivo mas exibisse a mensagem de invalido.
        tambem  
        */ 

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(true, novoCaminho))

    } else {        
        //const erro = "tipo eh invalido"
        console.log('tipo invalido')
        callbackImagemCriada(false)
    }
}

    