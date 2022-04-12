<template>
  <div class="dashboard_form deneme">
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
    addPost() {
      this.$store.dispatch("addPost", this.formdata);
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
.deneme {
  background-color: white;
}
.input_field.invalid input,
.input_field.invalid select {
  border: 1px solid red;
}
</style>
