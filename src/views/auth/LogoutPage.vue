<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <div class="row flex-center min-vh-100 py-6">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 text-center">
          <div class="card">
            <div class="card-body p-4 p-sm-5">
              <div class="avatar avatar-3xl">
                <v-progress-circular
                    color="primary"
                    indeterminate
                    :size="50"
                    :width="4"
                ></v-progress-circular>
              </div>
              <h5 class="mt-3 mb-0">درحال خارج شدن</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->
</template>
  
<script>
import { logoutApi } from "@/api/auth-api";

export default {
  name: "LogoutPage",
  async created() {
    await logoutApi();
    await this.$store.reset();
    this.$cookies.remove("access_token");
    this.$router.push('/login');
  },
  methods: {
  }
};
</script>
  
<style scoped>
</style>
  