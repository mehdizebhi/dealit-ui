<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
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
