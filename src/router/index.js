import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
// import HomeView from "../views/HomeView.vue";
import loginView from "@/components/Login/viewComp.vue";
import registerView from "@/components/Signin/registerView.vue";
// import homeSlider from "../components/homeSlider.vue";
import indexComp from "@/components/indexComp.vue";
import reviewMovie from "@/components/content/reviewMovie.vue";

import movieContent from "@/components/movieContent.vue";
import dashBoard from "@/components/dashboard/dasboardComp.vue";
import addPosts from "@/components/dashboard/addPosts.vue";
import listPosts from "@/components/dashboard/listPosts.vue";
import welcomeComp from "@/components/dashboard/welcomeComp.vue";

Vue.use(VueRouter);

const authGuard = {
  beforeEach: (to, from, next) => {
    if (store.state.token) {
      next();
    } else {
      next("/login");
    }
  },
};

const routes = [
  {
    path: "/",
    name: "home",
    component: indexComp,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashBoard,
    children: [
      {
        path: "/",
        component: welcomeComp,
      },
      {
        path: "addPost",
        component: addPosts,
      },
      {
        path: "managePost",
        component: listPosts,
      },
    ],
    ...authGuard,
  },
  {
    path: "/reviewmovie",
    name: "reviewmovie",
    component: reviewMovie,
  },

  {
    path: "/login",
    name: "login",
    component: loginView,
  },

  {
    path: "/register",
    name: "register",
    component: registerView,
  },
  {
    path: "/moviecontent",
    name: "moviecontent",
    component: movieContent,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
