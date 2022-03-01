# KiwiKickz

## Final Group Project

Welcome to KiwiKickz, New Zealands one stop shop for buying and selling Authenticated Footwear. Buyers can purchase and view new & used products on our nationwide market place with the confidence that the products are Authentic, not fake.

It is our goal to link buyers and sellers in NZ and create a safe market place for trade. We also want to create a competitive market that allows sellers to sell items close to their current market value without the added costs incurred when on selling at a retail store. Buyers can negotiate with sellers and get the best value for money.

We offer sellers the ability to Authenticate their shoes using a Third-Party service which we will process once we have received the shoes, this service is quick and affordable (only $3us per check). Once Authenticated, the product will be flagged as "Authenticated". We highly recommend the use of this service as it will increase the chances of selling the item (close to market Value) and buyers will bid with Confidence.

## Organising ourselves
- [Social contracting](https://docs.google.com/document/d/1pwtqSxUZA12r6_vuwfvo1w0ZCwHQp8M2m3-ed3RIxl0/edit)
- [Mural with Wireframes of MVP](https://app.mural.co/t/mahimanager3059/m/mahimanager3059/1645566429135/9f3cb87d7f24a01b6e26a00814d2d034cc4686ae?sender=u1a5b680ac0db02b3c2df7835)
- [Trelloboard to organise our work (prioritising, planning, assign, manage (standup))](https://trello.com/b/YlvgGwxG/kiwikickz)

## Tech Explorations / Spikes
- [Tech explorations](https://docs.google.com/document/d/1ucV3Lx6aF0YxyyNZHwbWLwv6ZnwMj8RLgUb4K3503GU/edit?usp=sharing)

## The Tech
- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [Express](https://expressjs.com/en/api.html)
- [Knex.js (SQL)](https://knexjs.org/)
- [Semantic UI)](https://react.semantic-ui.com/)
- [Auth0)](https://auth0.com/)

## MVP
On the homepage, as an unregistered user I can...<br>
... see a curated list of products, well shoes.<br>
... filter and search the products<br>
... click on a product and explore details of the product<br>
... get general information about the company and the authentication process<br>

as an unregistered user viewing a single product I can...<br>
... carussel through pictures of the product and click on pics to enlarge it<br>
... read a description of the product<br>
... read past questions and their answers and post my own question(s)<br>
... "buy now" and see the items I have bought in a cart<br>
... "make an offer" and see a confirmation of my offer<br>
<br>
as an unregistered user viewing the cart, I can...<br>
... see all the shoes I have bought and then proceed to checkout (enter my details and submit)<br>
... get a confirmation of my purchase (faked for MVP)<br>
<br>
As an Admin I can upload a product on behalf of a seller<br>

### Stretch
Plenty of ideas which we will discuss later

## Views (Client Side)

| name          | purpose                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Home          | View to browse products                                                                                                  |
| Product       | View to inspect a single product and decide to either "buy now" or "make an offer"                                       |
| Cart          | View for buyer to see all items that have been bought and proceed to checkout                                            |
| PostProduct   | View for admin to post a product                                                                                         |
| about         | View for user to get general information about store and show authentication process                                     |

Later maybe:

| name          | purpose                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Login         | View for user to enter their login credentials                                                                           |
| Register      | View for user to sign up for the App                                                                                     |

## Setup

Run the following commands in your terminal:

```sh
npm install
npm run knex migrate:latest
npm run knex seed:run
```

To run in development:

```sh
npm run dev
```

To run in production:

```sh
npm start
```
## Actions

### shoes

| type             | data     | purpose                                                 |
| ---------------- | -------- | ------------------------------------------------------- |
| GET_ALL_PRODUCTS | product  | retreive all products from the db and store in redux    |
<br>

## Reducers (Client Side)

| name           | purpose                                                              |
| -------------- | -------------------------------------------------------------------- |
| AllProduct     | Store all product information of all products in the store           |
| product        | Store and track all product information for a selected product       |
<br>

## API (Client - Server)

| Method | Endpoint                | Protected | Usage                          | Response                                          |
| ------ | ----------------------- | --------- | ------------------------------ | ------------------------------------------------- |
| Get    | /api/v1/product         | No        | Get All Products               | An Array Products                                 |
<br>

## DB (Server Side)
[DB diagramm](https://dbdiagram.io/d/6215b80e485e433543fee930)
<br>





