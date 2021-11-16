<template>
  <div class="catalog">
    <div class="container">
      <h1 class="catalog__title">Каталог товаров</h1>
      <div class="catalog__wrapper">
        <catalog-item
          v-for="product in products"
          :key="product.uid"
          :product="product"
        ></catalog-item>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from "../components/CatalogItem.vue";

export default {
  name: "Catalog",
  components: {
    CatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
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
