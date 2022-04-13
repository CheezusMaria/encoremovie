<template>
  <div class="dashboard_form deneme">
    <div v-if="loadAnimation" class="spin">
      <div class="ring">
        <div class="lds-dual-ring"></div>
      </div>
    </div>
    <h1>Add Post</h1>
    <form @submit.prevent="submitForm">
      <div class="input_filed">
        <label>Title</label>
        <input v-model="formdata.title" type="text" />
      </div>
      <div class="input_field">
        <wysiwyg v-model="formdata.content" />
      </div>

      <div class="input_field">
        <label>Rating</label>
        <select v-model="formdata.rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit">Add Post</button>
    </form>

    <md-dialog :md-active="dialog">
      <p>There is no content add something</p>
      <md-dialog-actions>
        <md-button class="md-primary" @click="onCancel"
          >I will go back and add it</md-button
        >
        <md-button class="md-primary" @click="onConfirm"
          >Yes i am sure</md-button
        >
      </md-dialog-actions>
    </md-dialog>
    <div v-if="isPosted" class="post_succesfull">Your Post is posted</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadAnimation: false,
      isPosted: false,
      dialog: false,
      formdata: {
        title: "",
        description: "",
        rating: "",
        content: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.formdata.content === "") {
        //show a dialog
      } else {
        this.addPost();
      }
    },
    async addPost() {
      this.loadAnimation = true;
      await this.$store.dispatch("addPost", this.formdata);
      this.loadAnimation = false;
      this.isPosted = true;
      console.log("isPosted True");
    },
    onCancel() {
      this.dialog = false;
    },
    onConfirm() {
      this.dialog = false;
      this.addPost();
    },
  },
  computed: {
    addingPost() {
      let status = this.$store.getters.addPostStatus;
      return status;
    },
  },
};
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
/* loading animation */
.test {
  padding-top: 200px;
}
.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  height: 100%;
}
.spin {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(24, 24, 24);
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #cef;
  border-color: #cef transparent #cef transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* end loading animation */

.deneme {
  background-color: white;
}
.input_field.invalid input,
.input_field.invalid select {
  border: 1px solid red;
}
</style>
