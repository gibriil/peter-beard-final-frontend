<template>
  <div id="home">
    <b-jumbotron
      fluid
      class="fullbleed bg-image"
      :style="'background-image: url('+require('@/assets/bg-2.jpg')+');'"
    >
      <template v-slot:header>Tunnels & Trolls</template>
      <template v-slot:lead>
        This is a fullstack app for the
        <abbr titl="Tunnels & Trolls">T&T</abbr> role-playing game
      </template>
    </b-jumbotron>
    <section>
      <b-container fluid="xl">
        <b-row class="justify-content-center">
          <b-col cols="7">
            <b-card
              title="Game Master's Guide"
              :img-src="require('@/assets/bg-1.jpg')"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <b-card-text>
                The GM Guide contains a GraphQL query for 3 items and with full
                <abbr
                  title="Create, Read, Update, and Delete"
                >CRUD</abbr>. The GM Guide also contains a RESTful output of General Supplies. Start there to awaken the Heroku server.
              </b-card-text>

              <b-button to="/gm-guide/supplies">Go to GM Guide</b-button>
            </b-card>
          </b-col>
          <b-col cols="4">
            <b-card
              title="Character Sheets"
              :img-src="require('@/assets/tnt-box.jpg')"
              img-alt="Image"
              img-top
              class="mb-2"
              id="charactersLink"
            >
              <b-card-text>
                The Character Sheets routes contains a full RESTful
                <abbr
                  title="Create, Read, Update, and Delete"
                >CRUD</abbr> interface for Tunnels & Trolls Characters.
              </b-card-text>

              <b-button to="/character">Go to Character Sheets</b-button>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card
              title="DGM 4790 Final - Express.js RESTful API server"
              :img-src="require('@/assets/rest-api-code.png')"
              img-alt="RESTful API expres node server"
              img-top
              class="mb-2"
            >
              <b-card-text>I had to build a set of REST APIs using Node and ExpressJS. The API needed to allow users to Create, Read, Update, and Delete (CRUD) the items.</b-card-text>

              <b-button
                href="https://github.com/gibriil/peter-beard-final-rest"
                variant="primary"
                target="_blank"
              >View GitHub Repo</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              title="DGM 4790 Final - Apollo GraphQL server"
              :img-src="require('@/assets/graphql-app-prisma-apollo.png')"
              img-alt="GraphQL api with prisma"
              img-top
              class="mb-2"
            >
              <b-card-text>I had to build GraphQL using Node, Prisma, and Apollo Server. The API needed to allow users to Create, Read, Update, and Delete (CRUD) the items.</b-card-text>

              <b-button
                href="https://github.com/gibriil/peter-beard-final-graphql"
                variant="primary"
                target="_blank"
              >View GitHub Repo</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              title="DGM 4790 Final - Vue app"
              :img-src="require('@/assets/fullstack-graphql-app-prisma-apollo-vue-header.png')"
              img-alt="GraphQL primsa apollo vue"
              img-top
              class="mb-2"
            >
              <b-card-text>Vue.js Front-End for DGM 4790. Attaches to Heroku deployed Apollo Server for GraphQL endpoints & a Heroku deployed Express server for RESTful endpoints.</b-card-text>

              <b-button
                href="https://github.com/gibriil/peter-beard-final-frontend"
                variant="primary"
                target="_blank"
              >View GitHub Repo</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<style lang="less" scoped>
.bg-image {
  background-size: cover;
  background-position: center 59%;
  background-repeat: no-repeat;
}

img.card-img-top {
  height: 205px;
  width: 100%;
  object-fit: cover;
}

#charactersLink img.card-img-top {
  object-position: center 86%;
}
</style>