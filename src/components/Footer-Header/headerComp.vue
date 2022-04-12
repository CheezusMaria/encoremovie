<template>
  <header>
    <div class="container header_container">
      <div class="logo">
        <router-link to="/">EncoreMovie</router-link>
      </div>
      <div>
        <router-link v-if="!isAuth" class="login1" to="/login"
          >Login</router-link
        >
        <router-link v-if="!isAuth" class="login1" to="/register"
          >Register</router-link
        >
      </div>
      <div v-if="isAuth">
        <ul>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><span @click="logoutUser">Logout</span></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("logoutUser");
    },
  },
};
</script>
