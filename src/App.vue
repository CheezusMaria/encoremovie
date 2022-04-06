<template>
  <div id="app">
    <hedaer-comp></hedaer-comp>
    <router-view />
    <footer-comp></footer-comp>
  </div>
</template>
<script>
import footerComp from "./components/footerComp.vue";
import hedaerComp from "./components/headerComp.vue";

export default {
  components: {
    footerComp,
    hedaerComp,
  },
};
</script>
<style>
@import "./assets/style.css";
</style>
