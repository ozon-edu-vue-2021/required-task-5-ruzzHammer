<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__back">
          <router-link v-if="!isCatalog" to="/">В каталог</router-link>
        </div>
        <div class="header__logo">
          <router-link to="/">
            <img src="@/assets/images/logo.png" alt="" width="60" height="60" />
          </router-link>
        </div>
        <div class="header__buttons">
          <router-link to="Cart">
            <icon-cart />
            <div v-if="!$store.getters.isCartEmpty" class="counter">
              {{ $store.getters.getTotalQuantity }}
            </div>
          </router-link>
          <router-link to="Favorites">
            <icon-heart />
            <div v-if="!$store.getters.isFavEmpty" class="counter">
              {{ $store.getters.getFavQuantity }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconCart from "../icons/IconCart.vue";
import IconHeart from "../icons/IconHeart.vue";
export default {
  components: {
    IconCart,
    IconHeart,
  },
  computed: {
    isCatalog() {
      return this.$route.name === "Catalog";
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 10px 0;
  margin-bottom: 20px;
  &__wrapper {
    display: grid;
    align-items: center;
    grid-template-columns: 80px auto 80px;
  }
  &__back {
    a {
      text-decoration: none;
      color: #2c3e50;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__logo {
    margin: 0 auto;
  }
  &__buttons {
    display: flex;
    gap: 20px;
    svg {
      width: 30px;
    }
    a {
      position: relative;
    }
    .counter {
      position: absolute;
      top: -5px;
      right: -12px;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 12px;
      background: #f91155;
      color: #fff;
      pointer-events: none;
    }
  }
}
</style>
