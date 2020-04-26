<template>
  <div id="app">
    <Header></Header>
    <main id="page-wrap" class="content-wrap">
      <transition
        appear
        mode="out-in"
        appear-active-class="animated fadeInUpBig fast"
        enter-active-class="animated fadeInUpBig fast"
        leave-active-class="animated fadeOutDownBig faster delay-1s"
        type="animation"
      >
        <b-container fluid="xl">
          <b-row>
            <b-col>
              <router-view />
            </b-col>
          </b-row>
        </b-container>
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/wrapper/Header.vue";
import Footer from "./components/wrapper/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less">
</style>
