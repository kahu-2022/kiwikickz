const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getProducts(db = connection) {
    return db('product')
}

function searchProducts (searchText, db = connection) {
    
    return db('product')
    .select('name','brand','details','make','model','color')
        .where('brand', 'like', `%${searchText || ''}%`)
        .orWhere('name', 'like', `%${searchText  || ''}%`)
        .orWhere('details', 'like', `%${searchText  || ''}%`)
        .orWhere('make', 'like', `%${searchText  || ''}%`)
        .orWhere('model', 'like', `%${searchText  || ''}%`)
        .orWhere('year', 'like', `%${searchText  || ''}%`)
        .orWhere('color', 'like', `%${searchText  || ''}%`)
}

function addProduct (newProduct, db = connection) {
    return db('product')
    .insert(snakecase(newProduct))
}

function getQuestions(db = connection) {
    return db('question')
}

module.exports = {
    getProducts, 
    addProduct,
    getQuestions,
    searchProducts
}