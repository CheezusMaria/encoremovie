<template>
  <div>
    <carousel :per-page="1">
      <slide v-for="(slide, index) in slides" :key="index">
        <div class="slider_bck" :style="{ background: `url(${slide.bck})` }">
          <div class="gradient">
            <div class="container">
              <div class="content">
                <!-- <app-button
                                    type="link"
                                    linkTo="#"
                                    :addClass="['hello','there']"
                                >
                                    See review
                                </app-button> -->
                <div class="item">
                  {{ slide.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import SlideOne from "../assets/1.jpg";
import SlideTwo from "../assets/2.jpg";
import SlideThree from "../assets/3.jpg";
import SlideFour from "../assets/3.jpg";

export default {
  data() {
    return {
      slides: [
        {
          title: "Movie 1",
          bck: SlideOne,
        },
        {
          title: "Movie 2",
          bck: SlideTwo,
        },
        {
          title: "Movie 3",
          bck: SlideThree,
        },
        {
          title: "Movie 4",
          bck: SlideFour,
        },
      ],
    };
  },
  components: {
    Slide,
    Carousel,
  },
};
</script>
