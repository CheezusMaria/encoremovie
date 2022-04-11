<template>
  <div class="container h-100">
    <div class="d-flex justify-content-center h-100 upperSpace">
      <div class="user_card deneme">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img src="../assets/encore.jpg" class="brand_logo" alt="Logo" />
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"
                  ><font-awesome-icon icon="fa-solid fa-user-secret"
                /></span>
              </div>
              <input
                type="text"
                class="form-control input_user"
                placeholder="username"
                v-model="user.email"
              />
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"
                  ><font-awesome-icon icon="fa-solid fa-user-secret"
                /></span>
              </div>
              <input
                type="password"
                class="form-control input_pass"
                placeholder="password"
                v-model="user.password"
              />
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customControlInline"
                />
                <label
                  class="custom-control-label links"
                  for="customControlInline"
                  >Remember me</label
                >
              </div>
            </div>
            <div class="d-flex justify-content-center mt-3 login_container">
              <button
                @click="onSubmit"
                type="button"
                name="button"
                class="btn login_btn"
              >
                Register !
              </button>
            </div>
          </form>
        </div>

        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Already Have An Account ?
          </div>
          <div class="text-center login-btn">
            <a href="#" class="ml-2">Login</a>
          </div>
          <!-- <div class="d-flex justify-content-center links">
            <a href="#">Forgot your password?</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      isUser: false,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI_VmJl5QEh7kYHcI7mFWtoJ8CzsK8r3A",
          {
            email: this.user.email,
            password: this.user.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
        });
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

.links {
  text-decoration: none;
  color: white;
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
  background-color: rgb(255, 255, 255) !important;
}
.deneme {
  margin-top: 5rem !important;
}
</style>
