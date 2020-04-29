# Tunnels & Trolls Game Master's App
Vue.js Front-End for DGM 4790. Attaches to Heroku deployed Apollo Server for GraphQL endpoints & a Heroku deployed Express server for RESTful endpoints.

### RESTful functionality
Start with [The General Supplies](https://pbeard-tunnelsntrolls.netlify.app/gm-guide/supplies). This is uses axios to hit a Heroku deployed Express server to GET a list of general supplies. You can read about the endpoint on the [RESTful README](https://github.com/gibriil/peter-beard-final-rest#get-all-general-supplies).

__*Note:*__ It will take a moment to load due to waking up the Heroku server.

Once the server is awake, you can got to [The Character Sheets](https://pbeard-tunnelsntrolls.netlify.app/character). This again uses axios to GET a list of character sheets from the Heroku deployed Express server. You can read about the endpoint on the [RESTful README](http://localhost:8080/character).

By clicking the __Create New Character Sheet__ button, you can fill out the form to create a new Character sheet. This uses a RESTful endpoint on the same Heroku deployed Express server.

### GraphQL functionality
You can view [Weapons](https://pbeard-tunnelsntrolls.netlify.app/gm-guide/weapons), [Armour](https://pbeard-tunnelsntrolls.netlify.app/gm-guide/armour), or [Spells](https://pbeard-tunnelsntrolls.netlify.app/gm-guide/spells). Each of these routes uses Apollo Vue to connect the the [Heroku deployed Apollo GraphQL server](https://pbeard-tunnels-and-trolls-gql.herokuapp.com/) to __query__ the GraphQL endpoint.

On the [Spells page](http://localhost:8080/gm-guide/spells), Next to the title, you will see an add button. This will open a modal to a form that uses a __mutation__ to Create a new item. Once you submit the form, the modal will close and the associated query will auto refetch. Scroll down find the item you just added.

Still on the spells page, you can click on any spell in the table and it will open a modal with options. The modal has a button to edit the selected spell or delete the selected spell. Each uses a __mutation__ to update or delete that entry in the Postgres database.