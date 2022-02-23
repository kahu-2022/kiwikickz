exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transaction').del()
    .then(function () {
      // Inserts seed entries
      return knex('transaction').insert([
        {id: 1, product_id: '1', buyer_id: '1'},
        {id: 2, product_id: '2', buyer_id: '2'},
        {id: 3, product_id: '3', buyer_id: '3'}
      ]);
    });
};
