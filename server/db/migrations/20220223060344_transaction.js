exports.up = function (knex) {
  return knex.schema.createTable('transaction', table => {
    table.increments('id')
    table.string('products_purchased')
    table.int('transaction_amount')
    table.string('buyer_email')
    table.timestamp('created_date').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('transaction')
}