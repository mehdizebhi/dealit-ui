<template>
  <br />
</template>
  
<script>
export default {
  name: "LogoutPage",
  mounted() {
    this.$cookies.remove("token");
    this.$router.push('/');
  }
};
</script>
  
<style scoped>
</style>
  