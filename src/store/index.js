/* eslint-disable */
import Vue from "vue";
import router from "../router/index";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const FbAuth = "https://identitytoolkit.googleapis.com/v1";
const FbApiKey = " AIzaSyCI_VmJl5QEh7kYHcI7mFWtoJ8CzsK8r3A ";

// const store = new Vuex.Store
export default new Vuex.Store({
  namespaced: true,
  state: {
    token: null,
    refresh: null,
    authFailed: false,
    addPost: false,
  },
  getters: {
    isAuth(state) {
      if (state.token) {
        return true;
      }
      return false;
    },
    addPostStatus(state) {
      return state.addPost;
    },
  },
  mutations: {
    addingPost(state) {
      state.addPost = true;
    },
    authUser(state, authData) {
      state.token = authData.idToken;

      if (authData.type === "signin") {
        router.push("/dashboard");
      }
    },

    logoutUser(state, token) {
      state.token = null;
      localStorage.removeItem("token");
      if (state.token == null) {
        router.push("/");
      }
    },
    authFailed(state, type) {
      if (type === "reset") {
        state.authFailed = false;
      } else {
        state.authFailed = true;
      }
    },
  },
  actions: {
    signIn({ commit }, payload) {
      Vue.http
        .post(`${FbAuth}/accounts:signInWithPassword?key=${FbApiKey}`, {
          ...payload,
          returnSecureToken: true,
        })
        .then((response) => response.json())
        .then((authData) => {
          commit("authUser", { ...authData, type: "signin" });
          console.log(authData);
          localStorage.setItem("token", authData.idToken);
        })
        .catch((error) => {
          commit("authFailed");
        });
    },

    // async , await ile revize edilecek
    async addPost({ commit, state }, payload) {
      let response = await Vue.http.post(
        `posts.json?auth=${state.token}`,
        payload
      );
      console.log("task is added");
      return response.json();
    },
  },
});
