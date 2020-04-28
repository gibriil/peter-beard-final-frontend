# Tunnels & Trolls Game Master's App
Vue.js Front-End for DGM 4790. Attaches to locally run Apollo Server for GraphQL endpoints & a Heroku deployed Express server for RESTful endpoints.

## Get Started
Follow the [How To Use](https://github.com/gibriil/peter-beard-final-graphql#how-to-use) section to clone the [peter-beard-final-graphql](https://github.com/gibriil/peter-beard-final-graphql) repo.

Once ```npm start``` has been run following the [How To Use](https://github.com/gibriil/peter-beard-final-graphql#how-to-use) section and you can access the GraphQL Playground, you can clone and start the front end.

__*Note:*__ The RESTful server is deployed on heroku, so you do not need to worry about cloning and running the [peter-beard-final-rest repo](https://github.com/gibriil/peter-beard-final-rest).

### Starting the front-end
#### 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/gibriil/peter-beard-final-rest
```

Change into project's root directory and install:

```
cd peter-beard-final-rest
npm install
```
#### 2. Run the Vue.js app in development mode

```
npm run serve
```

## Using the App
Once you have both the Apollo GraphQL server and this Vue.js app running locally, you can start to explore the app.

### RESTful functionality
Start with [The General Supplies](http://localhost:8080/gm-guide/supplies). This is uses axios to hit a Heroku deployed Express server to GET a list of general supplies. You can read about the endpoint on the [RESTful README](https://github.com/gibriil/peter-beard-final-rest#get-all-general-supplies).

__*Note:*__ It will take a moment to load due to waking up the Heroku server.

Once the server is awake, you can got to [The Character Sheets](http://localhost:8080/character). This again uses axios to GET a list of character sheets from the Heroku deployed Express server. You can read about the endpoint on the [RESTful README](http://localhost:8080/character).

By clicking the __Create New Character Sheet__ button, you can fill out the form to create a new Character sheet. This uses a RESTful endpoint on the same Heroku deployed Express server.

### GraphQL functionality
You can view [Weapons](http://localhost:8080/gm-guide/weapons), [Armour](http://localhost:8080/gm-guide/armour), or [Spells](http://localhost:8080/gm-guide/spells). Each of these routes uses Apollo Vue to connect the the [locally running Apollo GraphQL server](http://localhost:4000/) to __query__ the GraphQL endpoint.

Next to the title, you will see an add button. This will open a modal to a form that uses a __mutation__ to Create a new item. Once you submit the form, the modal will close and the associated query will refetch. Scroll down find the item you just added.

On the [Spells page](http://localhost:8080/gm-guide/spells) you can click on any spell in the table and it will take you to an edit form. This uses a __mutation__ to update that entry in the postgres database.