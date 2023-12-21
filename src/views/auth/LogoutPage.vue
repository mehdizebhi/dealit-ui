<template>
  <br />
</template>
  
<script>
import { logout } from '@/service/auth-service';
export default {
  name: "LogoutPage",
  mounted() {
    logout();
    this.$cookies.remove("access_token");
    this.$router.push('/login');
  }
};
</script>
  
<style scoped>
</style>
  