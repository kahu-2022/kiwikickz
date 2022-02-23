import request from "superagent"

export function getAllShoes() {
  return request.get('/api/v1/shoes')
  .then( res => res.body)
}