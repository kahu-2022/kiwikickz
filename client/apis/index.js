import request from "superagent"

export function getAllProduct() {
  return request.get('/api/v1/product')
  .then( res => res.body)
}

export function addProduct(product) {
  return request.post('/api/v1/product')
  .send( product)
  .then(res => res.body)
}

export function getAllQuestion() {
  return request.get('/api/v1/question')
  .then( res => res.body)
}

export function addQuestion(question) {
  return request
  .post('/api/v1/question')
  .send(question)
  .then(res => res.body)
}

export function updateQuestion(questionToUpdate) {
  // console.log('hello API', questionToUpdate)
  return request
  .patch('/api/v1/question')
  .send(questionToUpdate)
  .then(res => res.body)
}