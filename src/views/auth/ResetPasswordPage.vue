<template>
  <MainLayout>
    <template #container>
      <div class="container" data-layout="container">
      <div class="row flex-center min-vh-100 py-6">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <a class="d-flex flex-center mb-4" href="/">
            <img class="me-2" src="../../assets/img/icons/spot-illustrations/dealit.png" alt="" width="58" />
            <span class="font-sans-serif fw-bolder fs-5 d-inline-block">دیلیت</span></a>
          <div class="card">
            <div class="card-body p-4 p-sm-5">
              <h5 class="text-center">تنظیم رمز عبور جدید</h5>
              <form class="mt-3 needs-validation" @submit.prevent="onResetPassword">
                <div class="mb-3">
                  <label class="form-label"></label>
                  <input dir="ltr" class="form-control" v-model="password" :type="passwordType" placeholder="رمز عبور جدید" required="" />
                </div>
                <div class="mb-3">
                  <input dir="ltr" class="form-control" v-model="confirmPassword" :type="passwordType" placeholder="تکرار رمز عبور جدید" required="" />
                </div>
                <div class="form-check">
                  <input class="form-check-input" id="show-password" type="checkbox" v-model="showPassword" />
                  <label class="form-check-label" for="show-password">نمایش رمز عبور</label>
                </div>
                <button class="btn btn-primary d-block w-100 mt-3 text-light" type="submit" name="submit" :disabled="loading">
                  ویرایش رمز عبور
                  <v-progress-circular v-show="loading" :width="3" :size="20" indeterminate></v-progress-circular>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layouts/MainLayout.vue";
import {mapState, mapActions} from "vuex";

export default {
  name: "ResetPasswordPage",
  components: {MainLayout},
  data() {
    return {
      showPassword: false,
      passwordType: "password",
      resetPasswordToken: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async onResetPassword() {
      await this.resetPassword({"password": this.password, "confirmPassword": this.confirmPassword, "token": this.resetPasswordToken})
          .then(() => {
            this.$router.push("/login");
          }).catch(() => {});
    },
    ...mapActions(["checkResetPasswordToken", "resetPassword"]),
  },
  watch: {
    showPassword(value) {
      if (value) {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    }
  },
  computed: {
    ...mapState(["loading"]),
  },
  async created() {
    if (typeof this.$route.query.token === 'undefined') {
      this.$router.push("/login");
    } else {
      this.resetPasswordToken = this.$route.query.token;
      await this.checkResetPasswordToken(this.$route.query.token);
    }
  }
}
</script>

<style scoped>

</style>