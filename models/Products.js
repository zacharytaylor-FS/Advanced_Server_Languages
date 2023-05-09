let products = [
    {
        id:"1",
        "type":"product",
        "brand":"apple",
        "name":"iPhone 14 Pro",
        "price": 999
    },
    {
        id:"2",
        "type":"product",
        "brand":"apple",
        "name":"iPhone 14 Pro Max",
        "price": 1099
    },
    {
        id:"3",
        "type":"product",
        "brand":"apple",
        "name":"iPhone SE",
        "price": 429
    },
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

module.exports = {all, find, create, update, remove}