<template>
  <div class="home">
    <!-- <home-slider></home-slider> -->
    <!-- <home-slider-2></home-slider-2> -->
    <button>Turn on spinner</button>
    <animation-comp></animation-comp>
  </div>
</template>

<script>
// @ is an alias to /src
// import HomeSlider from "../components/homeSlider.vue";
// import HomeSlider2 from "../components/homeSlider2.vue";
import animationComp from "@/components/Animations/spinnerComp.vue";
export default {
  name: "HomeView",
  components: { animationComp },
};
</script>
