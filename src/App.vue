<template>
  <router-view :key="$route.fullPath" :accountInfo="accountInfo"></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      token: "",
      accountInfo: null
    };
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
};
</script>

<style>
body {
  font-family: Vazirmatn, sans-serif !important;
}
</style>
