import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/pages/main";
import catalog from "@/pages/catalog";

import cat from "@/pages/cat";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: main
  },
  {
    path: "/catalog/",
    component: catalog,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cat/:id/",
    component: cat,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  }
];

const router = new VueRouter({
  base: '/test/',
  mode: "history",
  routes,
});

export default router;
