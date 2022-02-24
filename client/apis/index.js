import request from "superagent"

export function getAllProduct() {
  return request.get('/api/v1/product')
  .then( res => res.body)
}