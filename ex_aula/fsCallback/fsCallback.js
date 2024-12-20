const fs = require('fs')

fs.writeFile('exemploCallback.txt', 'Exemplo de fs node com callback', (err) => {
   
    if (err) return console.log('Erro ao gravar arquivo')
    fs.readFile('exemploCallback.txt', 'utf-8', (err, result) => {
        
        if (err) return console.log('Erro ao ler arquivo')
        console.log(result)
        fs.appendFile('exemploCallback.txt', 'Mais conteudo aqui', (err) => {
            
            if (err) return console.log('Erro ao atualizar arquivo')
            fs.readFile('exemploCallback.txt', 'utf-8', (err, result) => {

                if (err) return console.log('Erro ao ler arquivo')
                console.log(result)
                fs.unlink('exemploCallback.txt', (err) => {

                    if (err) return console.log('Erro ao deletar arquivo')
                })
            })
        })
    })
})