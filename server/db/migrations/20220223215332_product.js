exports.up = function (knex) {
    return knex.schema.createTable('product', (table) => {
        table.increments('id').primary()
        table.integer('seller_id')
        table.boolean('hot_pick')
        table.string('status')
        table.string('name')
        table.string('details')
        table.boolean('auth_status')
        table.string('brand')
        table.integer('size')
        table.string('color')
        table.string('make')
        table.string('model')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.integer('year')
        table.integer('price')
        table.string('condition')
        table.string('receipt')
        table.string('image1', 1000)
        table.string('image2')
        table.string('image3')
        table.string('image4')
    })
};

exports.down = (knex) => {
    return knex.schema.dropTable('product')
}