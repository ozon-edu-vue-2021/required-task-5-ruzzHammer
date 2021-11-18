import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../views/Catalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../views/Favorites.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
