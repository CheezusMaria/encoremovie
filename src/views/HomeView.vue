<template>
  <div class="home">
    <!-- <home-slider></home-slider> -->
    <home-slider-2></home-slider-2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HomeSlider from "../components/homeSlider.vue";
import HomeSlider2 from "../components/homeSlider2.vue";
export default {
  name: "HomeView",
  components: { HomeSlider2 },
};
</script>
