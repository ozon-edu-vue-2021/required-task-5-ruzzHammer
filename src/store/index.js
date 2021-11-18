import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import getRandomImage from "../utils/getRandomImage";
import _ from "lodash";
import { MIN_PRICE, MAX_PRICE } from "../consts";
export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    favorites: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products.map((product) => {
        product.price = _.random(MIN_PRICE, MAX_PRICE);
        product.image = getRandomImage();
        product.quantInCart = 0;
        product.isFav = false;
        return product;
      });
    },
    addToCart(state, product) {
      if (!state.cart.includes(product)) {
        product.quantInCart = 1;
        state.cart.push(product);
      }
    },
    removeFromCart(state, product) {
      if (state.cart.includes(product)) {
        product.quantInCart = 0;
        state.cart = state.cart.filter((cartItem) => cartItem !== product);
      }
    },
    addToFav(state, product) {
      if (!state.favorites.includes(product)) {
        product.isFav = true;
        state.favorites.push(product);
      }
    },
    removeFromFav(state, product) {
      if (state.favorites.includes(product)) {
        product.isFav = false;
        state.favorites = state.favorites.filter(
          (favItem) => favItem !== product
        );
      }
    },
  },
  actions: {
    async loadProducts({ commit }) {
      const productsFetch = await fetch(
        "https://random-data-api.com/api/food/random_food?size=30"
      );
      const products = await productsFetch.json();
      commit("setProducts", products);
    },
  },
  getters: {
    isCartEmpty(state) {
      return state.cart.length === 0;
    },
    isFavEmpty(state) {
      return state.favorites.length === 0;
    },
    getTotalPrice(state) {
      return state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantInCart;
      }, 0);
    },
    getTotalQuantity(state) {
      return state.cart.reduce((acc, item) => {
        return acc + item.quantInCart;
      }, 0);
    },
    getFavQuantity(state) {
      return state.favorites.length;
    },
  },
});
