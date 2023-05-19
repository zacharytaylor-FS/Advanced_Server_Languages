let products = [
    {
        id: 1,
        brand:"Apple",
        title:"iPhone 14 Pro",
        is_published:true,
        price: 999,
        description: "Brand new 14 Pro"

    },
    {
        id: 2,
        brand:"Apple",
        title:"iPhone 14 Pro Max",
        is_published:true,
        price: 1099,
        description: "Brand new 14 Pro Max"
    },
    {
        id: 3,
        brand:"Apple",
        title:"iPhone SE",
        is_published:true,
        price: 429,
        description: "Dependable Go-To for Apple users"
    },
    {
        id: 4,
        title: 'Nike Shoe',
        price: 29.00,
        is_published: true,
        description: "Brand new Nike Shoe"
    }
]

const all = () => {
    return products
}

const find = (id) => {
    // const id = Number(req.params.id)
    return products.find(p => p.id === id)
}

const create = (product) => {
    products.push(product)
    return products
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter(p => p.id !== id)
    return products
}

module.exports = { all, find, create, update, remove}