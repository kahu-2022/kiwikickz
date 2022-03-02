exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transaction').del()
    .then(function () {
      // Inserts seed entries
      return knex('transaction').insert([
        {id: 1, products_purchased: "[{},{},{}]", transaction_amount: 456, buyer_email: "sonny.nguyen26@gmail.com"},
        {id: 2, products_purchased: "[{},{},{}]", transaction_amount: 346, buyer_email: "fake@email.com"},
        {id: 3, products_purchased: "[{},{},{}]", transaction_amount: 984, buyer_email: "what@fakeemail.com"}
      ]);
    });
};
