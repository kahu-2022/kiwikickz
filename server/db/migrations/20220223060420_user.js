exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.boolean('admin')
    table.string('username')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.integer('contact_number')
    table.string('contact_address')
    table.string('shipping_address')
    table.timestamp('created_date').defaultTo(knex.fn.now())
    table.boolean('auth_status')
    // table.image('profile_pic')
    table.boolean('reg_status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
