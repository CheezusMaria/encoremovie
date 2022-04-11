<template>
  <div class="container">
    <div class="signin_container">
      <h1>Sign in</h1>
      <form @submit.prevent="onSubmit">
        <div class="input_field">
          <label>Email</label>
          <input
            type="email"
            @blur="$v.formdata.email.$touch()"
            v-model.trim="formdata.email"
          />
          <div v-if="$v.formdata.email.$error">
            <p class="error_label">This field is required</p>
            <p class="error_label">Please enter a valid email</p>
          </div>
        </div>

        <div
          class="input_field"
          :class="{ invalid: $v.formdata.password.$error }"
        >
          <label>Password</label>
          <input type="password" v-model.trim="formdata.password" />
          <div v-if="$v.formdata.password.$error">
            <p class="error_label">This field is required</p>
            <p class="error_label">At least 4 characters</p>
          </div>
        </div>

        <button type="submit">Sign in</button>

        <p class="error_label">Something is wrong</p>

        <p class="error_label">Please check your email and password</p>
      </form>
    </div>
  </div>
</template>

<script>
// import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formdata: {
        email: "m@test.com",
        password: "testing",
      },
    };
  },
  computed: {},

  //   validations: {
  //     formdata: {
  //       email: {
  //         required,
  //         email,
  //       },
  //       password: {
  //         required,
  //         minLength: minLength(4),
  //       },
  //     },
  //   },
  methods: {
    onSubmit() {
      //   console.log(this.formdata);
      //   if (!this.$v.$invalid) {
      //   this.$store.dispatch("admin/signIn", this.formdata);
      this.$store.dispatch("../store/admin.js/signIn", this.formdata);
      //   } else {
      //     this.error = true;
      //     setTimeout(() => {
      //       this.error = false;
      //     }, 3000);
      //   }
    },
  },
};
</script>

<style>
.input_field.invalid input,
.input_field.invalid select {
  border: 1px solid red;
}
</style>
