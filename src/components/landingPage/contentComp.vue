<template>
  <div class="container">
    <div class="home_container">
      <md-card v-for="(post, index) in posts" :key="index">
        <md-card-media md-ratio="16:9">
          <img :src="require(`@/assets/${post.img}`)" alt="" />
        </md-card-media>
        <md-card-header>
          <h2 class="title">{{ posts.title }}</h2>
          <div class="md-subHead">
            <div>{{ posts.description }}</div>
          </div>
        </md-card-header>
        <md-card-actions>
          <app-button
            type="link"
            linkTo="/reviewmovie"
            :addClass="['small_button']"
            @click="seeReview"
          >
            See Review A
          </app-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import posts from "@/assets/posts.js";

export default {
  data() {
    return {
      isAuthed: false,
      posts,
    };
  },

  methods: {
    seeReview() {
      if (this.isAuthed == false) console.log("üyelik girişi yapın");
      else {
        console.log("content");
      }
    },
  },
};
</script>
