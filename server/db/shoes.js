const connection = require('./connection')

function getShoes(db = connection) {
    return db('product')
}

function addProduct (newProduct, db = connection) {
    return db('product')
    .insert({
        seller_id: newProduct.sellerId,
        hot_pick: newProduct.hotPick,
        status: newProduct.status,
        name: newProduct.name,
        details: newProduct.details,
        auth_status: newProduct.authStatus,
        brand: newProduct.brand,
        size: newProduct.size,
        color: newProduct.color,
        make: newProduct.make,
        model: newProduct.model,
        year: newProduct.year,
        price: newProduct.price,
        condition: newProduct.condition,
        receipt: newProduct.receipt,
        image1: newProduct.image1,
        image2: newProduct.image2,
        image3: newProduct.image3,
        image4: newProduct.image4
    })
}

module.exports = {
    getShoes,
    addProduct
}