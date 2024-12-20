class AsyncCalculator {
    constructor() {
        // armazenar todas as operacoes em andamento
        this.operations = []
    }
    // metodo de adicionar um numero novo na calculadora
    async addNumber(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.operations.push(number)
            }, 1000)
        })
    }
    // metodo para somar todos os numeros
    async sum() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.operations.reduce((a, b) => a + b), 0)
            }, 1000)
        })
    }
    // metodo para subtrair todos os numeros
    async subtract() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.operations.reduce((a, b) => a - b), 0)
            }, 1000)
        })
    }
    // metodo para multiplicar todos os numeros
    async multiply() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.operations.reduce((a, b) => a * b), 0)
            }, 1000)
        })
    }
    // metodo para dividir todos os numeros
    async divide() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.operations.reduce((a, b) => a / b), 0)
            }, 1000)
        })
    }
}