exports.up = function (knex) {
  return knex.schema.createTable('transaction', table => {
    table.increments('id')
    // array of objects and stringify
    table.int('product_id')
    // amount of transaction
    amount
    //change to user email / token.email
    table.int('buyer_id')
    //check to see if i can get buyer name
    table.timestamp('created_date').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('transaction')
}