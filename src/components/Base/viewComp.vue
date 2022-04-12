<template>
  <div>
    <header-comp></header-comp>
    <router-view />
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import footerComp from "@/components/Footer-Header/footerComp.vue";
import headerComp from "@/components/Footer-Header/headerComp.vue";
export default {
  components: {
    headerComp,
    footerComp,
  },
};
</script>
