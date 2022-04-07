<template>
  <div>
    <home-slider></home-slider>
    <content-comp></content-comp>
  </div>
</template>

<script>
import homeSlider from "./homeSlider.vue";
import contentComp from "./contentComp.vue";
export default {
  components: {
    homeSlider,
    contentComp,
  },
};
</script>
