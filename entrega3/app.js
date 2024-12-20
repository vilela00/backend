import ProductManager from '../entrega2/ProductManager.js'

const express = require('express')

const app = express()
const port = 3000

const manager = new ProductManager()

app.get('/products/:pid', (req, res) => {
    const id = req.params.id
    const product = manager.getProductById(id)
    if (!product) {
        res.status(404).send({ error: 'Produto nao encontrado' })
    } else {
        res.send(product)
    }
    const products = req.query.limit ? manager.getProducts().slice(0, req.query.limit) : manager.getProducts()
    res.send(products)
    if (!products) {
        res.status(404).send({ error: 'Nenhum produto encontrado' })
    } else {
        res.send(products)
    }
})

app.listen(port, () => {
    console.log(`ProductManager rodando na porta: ${port}`)
})