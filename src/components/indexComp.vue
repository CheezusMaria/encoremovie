<template>
  <div>
    <home-slider></home-slider>
    <content-comp></content-comp>
  </div>
</template>

<script>
import homeSlider from "./landingPage/homeSlider.vue";
import contentComp from "./landingPage/contentComp.vue";
export default {
  components: {
    homeSlider,
    contentComp,
  },
};
</script>
