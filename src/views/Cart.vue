<template>
  <div class="cart">
    <div class="container">
      <h1 class="cart__title">Корзина</h1>
      <div class="cart__wrapper">
        <div class="cart__products">
          <template v-if="cart.length">
            <catalog-item
              v-for="product in cart"
              :key="product.uid"
              :product="product"
              class="cart__item"
            />
          </template>
          <p v-else>В данный момент корзина пуста.</p>
        </div>
        <div class="cart__sidebar">
          <div class="sidebar__header">
            <p class="sidebar__title">Ваша корзина</p>
            <p>Товаров: {{ $store.getters.getTotalQuantity }}</p>
          </div>
          <div class="sidebar__body">
            <p class="sidebar__title">
              Общая стоимость: {{ $store.getters.getTotalPrice }} ₽
            </p>
          </div>
        </div>
      </div>
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
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__title {
    text-align: center;
  }
  &__wrapper {
    display: flex;
    gap: 30px 20px;
  }
  &__products {
    display: grid;
    gap: 20px;
    flex: 1;
  }
  &__sidebar {
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    height: 100%;
    .sidebar__header {
      padding-bottom: 5px;
      border-bottom: 1px solid #939393;
      margin-bottom: 5px;
    }
    .sidebar__title {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
