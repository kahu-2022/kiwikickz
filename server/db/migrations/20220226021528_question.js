exports.up = function (knex) {
  return knex.schema.createTable('question', (table) => {
      table.increments('id').primary()
      table.integer('product_id')
      table.string('question')
      table.text('answer')
      table.string('status')
      table.timestamps(true, true)
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('question')
}
