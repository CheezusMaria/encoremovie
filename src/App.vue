<template>
  <div id="app">
    <header-comp></header-comp>
    <router-view />
    <footer-comp></footer-comp>
  </div>
</template>
<script>
import footerComp from "./components/footerComp.vue";
import headerComp from "./components/headerComp.vue";

export default {
  components: {
    footerComp,
    headerComp,
  },
};
</script>
<style>
@import "./assets/style.css";
</style>
