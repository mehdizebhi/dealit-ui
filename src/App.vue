<template>
  <router-view :key="$route.fullPath" :accountInfo="accountInfo"></router-view>
</template>

<script>
import {getAccountInfo} from "@/service/account-service";

export default {
  name: "App",
  data() {
    return {
      token: "",
      accountInfo: null
    };
  },
  mounted() {
    this.token = this.$cookies.get("token");
    getAccountInfo().then((info) => {
      this.accountInfo = info;
    }).catch(() => {
      console.log("Can not get Accounts Type for Nav Bar")
    });
  },
};
</script>

<style>
body {
  font-family: Vazirmatn, sans-serif !important;
}
</style>
