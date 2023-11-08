<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      token: "",
    };
  },
  mounted() {
    this.token = this.$cookies.get("token");
  },
};
</script>

<style>
body {
  font-family: Vazirmatn, sans-serif !important;
}
</style>
