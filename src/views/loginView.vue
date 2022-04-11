<template>
  <div class="container h-100">
    <ValidationObserver v-slot="{ invalid }">
      <div class="d-flex justify-content-center h-100 upperSpace">
        <div class="user_card deneme">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
              <img src="../assets/encore.jpg" class="brand_logo" alt="Logo" />
            </div>
          </div>
          <div class="d-flex justify-content-center form_container">
            <form @submit.prevent="onSubmit">
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"
                    ><font-awesome-icon icon="fa-solid fa-user-secret"
                  /></span>
                </div>
                <ValidationProvider
                  name="Email"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <input
                    type="text"
                    name=""
                    class="form-control input_user"
                    value=""
                    placeholder="E-Mail"
                    v-model.trim="formdata.email"
                  />
                  <div v-if="errors.length">
                    <span> {{ errors[0] }} </span>
                  </div>
                </ValidationProvider>
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text"
                    ><font-awesome-icon icon="fa-solid fa-user-secret"
                  /></span>
                </div>
                <ValidationProvider rules="required">
                  <input
                    type="password"
                    name=""
                    class="form-control input_pass"
                    value=""
                    placeholder="Password"
                    v-model.trim="formdata.password"
                /></ValidationProvider>
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customControlInline"
                  />
                  <label
                    class="custom-control-label links2"
                    for="customControlInline"
                    >Remember me</label
                  >
                </div>
              </div>
              <div
                class="d-flex justify-content-center mt-3 links2 login_container"
              >
                <button
                  :disabled="invalid"
                  type="submit"
                  name="button"
                  class="btn login_btn"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              Don't have an account?
              <router-link to="/register">Sign Up</router-link>
            </div>
            <div class="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
            <div>
              <p class="error_label" v-if="authFailed">
                Please Check Your Mail And Password..
              </p>
            </div>
          </div>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
// import { required, email } from "@vuelidate/validators";
// import useVuelidate from "@vuelidate/core";

export default {
  // setup() {
  //   return { v$: useVuelidate() };
  // },
  data() {
    return {
      formdata: {
        email: "my@test.com",
        password: "11111111",
      },
    };
  },
  computed: {
    authFailed() {
      return this.$store.state.authFailed;
    },
  },
  beforeDestroy() {
    this.$store.commit("authFailed", "reset");
  },
  // validations() {
  //   return {
  //     formdata: {
  //       email: {},
  //       password: {},
  //     },
  //   };
  // },
  methods: {
    onSubmit() {
      this.$store.dispatch("signIn", this.formdata);
    },
  },
};
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #000000 !important;
}
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #5f1e1e;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #ffffff;
  padding: 10px;
  text-align: center;
}
.upperSpace {
  margin: auto;
  padding-top: 10%;
  align-content: center;
  align-items: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.links2 {
  color: white;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: rgb(187, 31, 31) !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: rgb(187, 31, 31) !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: rgb(187, 31, 31) !important;
}
.deneme {
  margin-top: 5rem !important;
}
</style>
