exports.up = function (knex) {
    return knex.schema.createTable('product', (table) => {
        table.increments('id').primary()
        table.integer('seller_id')
        table.boolean('hot_pick')
        table.string('status')
        table.string('gender')
        table.string('box')
        table.string('name')
        table.text('details')
        table.boolean('auth_status')
        table.string('brand')
        table.decimal('size')
        table.string('color')
        table.string('make')
        table.string('model')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.integer('year')
        table.integer('price')
        table.string('condition')
        table.string('receipt')
        table.text('image1')
        table.text('image2')
        table.text('image3')
        table.text('image4')
    })
};

exports.down = (knex) => {
    return knex.schema.dropTable('product')
}