const fs = require  ('fs').promises
const crypto = require('crypto')

async function exemplo () {
    try {
        // criar arquivo de conteudo
        await fs.writeFile('exemplo.txt', 'Mensagem secreta sem criptografia', 'utf-8')
        // ler arquivo
        const content = await fs.readFile('exemplo.txt', 'utf-8')
        // criptografar o conteudo
        const hash = crypto.createHash('sha256').update(content).digest('hex')
        console.log(content)
        console.log(hash)
        // deletar arquivo
        await fs.unlink('exemplo.txt')
        } catch (error) {
            console.log('Erro:', error)
        }
    }
exemplo()