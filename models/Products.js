let products = [
    {
        id: 1,
        brand:"Apple",
        title:"iPhone 14 Pro",
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487460_sd.jpg;maxHeight=640;maxWidth=550",
        is_published:true,
        price: 999,
        description: "Brand new 14 Pro"

    },
    {
        id: 2,
        brand:"Apple",
        title:"iPhone 14 Pro Max",
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487405_sd.jpg;maxHeight=640;maxWidth=550",
        is_published:true,
        price: 1099,
        description: "Brand ew 14 Pro Max"
    },
    {
        id: 3,
        brand:"Apple",
        title:"iPhone SE",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487206_sd.jpg;maxHeight=640;maxWidth=550",
        is_published:true,
        price: 429,
        description: "Dependable Go-To for Apple users"
    },
    {
        id: 4,
        title: 'Nike Shoe',
        img: "https://images.stockx.com/360/Air-Jordan-1-OG-Chicago-1985/Images/Air-Jordan-1-OG-Chicago-1985/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1635283046&h=384&q=60",
        price: '28,000.00',
        is_published: true,
        description: "Brand new Nike Shoe"
    }
]

const all = () => {
    return products
}

const find = (id) => {
    // const id = Number(req.params.id)
    const product = products.find((r) => r.id == id)
    return product
}

const create = (product) => {
    const id = Number(products[products.length -1].id) + 1 + ''
    products.push({id, ...product})
    return products[products.length - 1]
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter((p) => p.id !== id)
    return products
}

module.exports = { products, all, find, update, create, remove }