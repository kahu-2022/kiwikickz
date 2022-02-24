exports.up = function (knex) {
  return knex.schema.createTable('transaction', table => {
    table.increments('id')
    table.int('product_id')
    table.int('buyer_id')
    table.timestamp('created_date').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('transaction')
}