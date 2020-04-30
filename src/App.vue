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
        <router-view />
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
.fullbleed,
.fullbleed * {
  position: relative;
}

.fullbleed:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: inherit;
  top: 0;
  left: 0;
  opacity: 0.8;
}
</style>
