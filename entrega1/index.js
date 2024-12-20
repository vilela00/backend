class ProductManager {
    constructor () {
        this.products = []
    }

    getProducts() {
        return this.products
    }
    addProduct({ title, description, price, thumbnail, codigo, stock }) {
        const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            codigo,
            stock
        }
        this.products.push(product)
    }
    getProductById(productId, codigo) {
        const getProduct = this.products.find(e => e.id === productId)
        if (!getProduct) {
            throw new Error("Produto nao encontrado")
        }
        if (getProduct.codigo.includes(codigo)) {
            throw new Error("Produto ja cadastrado")
        }
        console.log(getProduct)
    }
}

const manager = new ProductManager()
manager.addProduct({
    title: "Camiseta",
    description: "Camiseta de futebol",
    price: 100,
    thumbnail: "https://example.com/camiseta.jpg",
    codigo: "12345",
    stock: 10
})