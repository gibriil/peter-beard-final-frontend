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
  </div>
</template>

<style lang="less" scoped>
.bg-image {
  background-size: cover;
  background-position: center 59%;
  background-repeat: no-repeat;
}
</style>