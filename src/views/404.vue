<template>
  <div id="404">
    <b-jumbotron fluid class="mb-0">
      <template v-slot:header>404: Error</template>
      <template v-slot:lead>The page could not be found</template>
    </b-jumbotron>
    <section>
      <b-container fluid="xl">
        <b-row class="justify-content-center">
          <b-col>
            <b-img :src="require('@/assets/tnt-vitalspots.png')" fluid-grow alt="Fluid-grow image"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>