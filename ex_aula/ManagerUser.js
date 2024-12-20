const fs = require('fs').promises

class ManagerUsers {
    constructor () {
        this.filePath = 'Usuarios.json'
    }
    async CriarUsuario (usuario) {
        try {
            const camposRequeridos = ['nome', 'sobrenome', 'idade', 'curso']
            for (const campo of camposRequeridos) {
                if (!(campo in usuario)) {
                    throw new Error(`O campo ${campo} é obrigatorio`)
                }
            }
            if (typeof usuario.idade !== 'number') {
                throw new Error('A idade deve ser um numero')
            }
        } catch (error) {
            throw error
        }
        let usuarios = []
        try {
            const data = await fs.readFile(this.filePath, 'utf-8')
            usuarios = JSON.parse(data)
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.writeFile(this.filePath, '[]', 'utf-8')
            } else {
                throw error
            }
        }
        usuarios.push(usuario)
        await fs.writeFile(this.filePath, JSON.stringify(usuarios, null, 2), 'utf-8')
        return usuario
    }
}