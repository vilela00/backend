const fs = require('fs').promises

export default class ProductManager {
    constructor () {
        this.filePath = 'Products.json'
        this.products = []
    }
    async createProduct (product) {
        try {
            const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock']
            for (const field of requiredFields) {
                if (!(field in product)) {
                    throw new Error(`O campo ${field} é obrigatorio`)
                }
            }
            if (typeof product.price !== 'number') {
                throw new Error('O preco deve ser um numero')
            }
        } catch (error) {
            throw error
        }
        try {
            const data = await fs.readFile(this.filePath, 'utf-8')
            products - JSON.parse(data)
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.writeFile(this.filePath, '[]', 'utf-8')
            } else {
                throw error
            }
        }       
        products.push(product)
        await fs.writeFile(this.filePath, JSON.stringify(products, null, 2), 'utf-8')
        return product
    }
    getProducts() {
        return this.products
    }
    addProduct({ title, description, price, thumbnail, code, stock }) {
        const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product)
    }
    getProductById(productId, code) {
        const getProduct = this.products.find(e => e.id === productId)
        if (!getProduct) {
            throw new Error("Produto nao encontrado")
        }
        if (getProduct.code.includes(code)) {
            throw new Error("Produto ja cadastrado")
        }
        console.log(getProduct)
    }
    updateProduct(productId, { title, description, price, thumbnail, code, stock }) {
        const productIndex = this.products.findIndex(e => e.id === productId)
        if (productIndex === -1) {
            throw new Error("Produto nao encontrado")
        }
        this.products[productIndex] = {
            ...this.products[productIndex],
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
    }
    deleteProduct(productId) {
        const productIndex = this.products.findIndex(e => e.id === productId)
        if (productIndex === -1) {
            throw new Error("Produto nao encontrado")
        }
        this.products.splice(productIndex, 1)
    }
}

const manager = new ProductManager()
manager.addProduct({
    title: "Camiseta",
    description: "Camiseta de futebol",
    price: 100,
    thumbnail: "https://example.com/camiseta.jpg",
    code: "12345",
    stock: 10
})