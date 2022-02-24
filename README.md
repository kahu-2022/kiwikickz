# KiwiKickz

## Final Group Project

@Lewis: Please add a short blurb about:
1) What this app is in 1 sentence
2) Why the world (or your son) needs it
3) What it does / what the main user-roles can do

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
| GET_ALL_SHOES    | product  | retreive all shoes from the db and store in redux       |
<br>

## Reducers (Client Side)

| name           | purpose                                                              |
| -------------- | -------------------------------------------------------------------- |
| AllShoes       | Store all product information of all shoes in the store              |
| shoe           | Store and track all product information for a selected shoe          |
<br>

## DB (Server Side)
[DB diagramm:](https://dbdiagram.io/d/6215b80e485e433543fee930)
<br>
<br>
<br>
<br>
#🚧🚧🚧 the following sections are boilerplate and need to be filled with real information once available🚧🚧🚧
<br>

### users

| type          | data  | purpose                            |
| ------------- | ----- | ---------------------------------- |
| RECEIVE_USERS | users | retreive the users from the server |

### currentMeeting

| type            | data                         | purpose                                          |
| --------------- | ---------------------------- | ------------------------------------------------ |
| START_MEETING   | attendees ([]), meeting_name | a meeting has started, set initial meeting state |
| END_MEETING     | null                         | Set meeting in progress flag to false            |
| TICK_ONE_SECOND | null                         | Increase running total by 1s worth of $          |
| RESET_MEETING   | null                         | Revert to initial state                          |

## API (Client - Server)

| Method | Endpoint                | Protected | Usage                          | Response                                          |
| ------ | ----------------------- | --------- | ------------------------------ | ------------------------------------------------- |
| Post   | /api/auth/login         | Yes       | Log In a User                  | The Users JWT Token                               |
| Post   | /api/auth/register      | Yes       | Register a User                | The Users JWT Token                               |
| Get    | /api/meetings           | Yes       | Get a Users Meeting Histroy    | An Array of Meetings                              |
| Post   | /api/meetings           | Yes       | Save a completed meeting       | The Meeting that has been saved in db read format |
| Get    | /api/meetings/:id/users | Yes       | Get the attendees of a Meeting | An Array of User objects                          |
| Get    | /api/users              | Yes       | Get the users of the app       | An Array of User Objects                          |

