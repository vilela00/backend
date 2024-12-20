const numeros = {}

for (let i=0; i<10000; i++) {
    const num = Math.floor(Math.random() * 20) + 1
    numeros [num] = (numeros[num] || 0) + 1
}

console.log("Numero: Quantidade de vezes")
Object.entries(numeros).forEach(([num, quant]) => {
    console.log(`${num}: ${quant}`)
})