import request from "superagent"

export function getAllProduct() {
  return request.get('/api/v1/product')
  .then( res => res.body)
}

export function addProduct(product) {
  return request.post('/api/v1/shoes')
  .send( product)
  .then(res => res.body)
}