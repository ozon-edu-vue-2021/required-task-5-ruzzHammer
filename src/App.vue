<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>
<script>
import AppHeader from "./components/layout/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  methods: {},
  computed: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px 15px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
p {
  margin: 0 0 5px;
}
</style>
