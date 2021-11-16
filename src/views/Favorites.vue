<template>
  <div class="catalog">
    <div class="container">
      <h1 class="favorites__title">Избранное</h1>
      <div v-if="!$store.getters.isFavEmpty" class="favorites__wrapper">
        <catalog-item
          v-for="product in favorites"
          :key="product.uid"
          :product="product"
        ></catalog-item>
      </div>
      <p v-else>В данный момент в избранном пусто</p>
    </div>
  </div>
</template>

<script>
import CatalogItem from "../components/CatalogItem.vue";
export default {
  components: { CatalogItem },
  data() {
    return {};
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
};
</script>

<style lang="scss" scoped>
.favorites {
  &__title {
    text-align: center;
  }
  &__wrapper {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 240px));
    gap: 20px;
    margin: 0 auto;
  }
}
</style>
