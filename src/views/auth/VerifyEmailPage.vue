<template>
  <MainLayout>
    <template #container>
      <div class="container" data-layout="container">
        <div class="row flex-center min-vh-100 py-6 text-center">
          <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4"><a class="d-flex flex-center mb-4"
                                                                         href="/home"><img alt="" class="me-2"
                                                                                           src="../../assets/img/icons/spot-illustrations/dealit.png"
                                                                                           width="58"/><span
              class="font-sans-serif fw-bolder fs-5 d-inline-block">دیلیت</span></a>
            <div class="card">
              <v-progress-linear
                  :absolute="true"
                  :active="loading"
                  :height="5"
                  :indeterminate="true"
                  color="primary"
              ></v-progress-linear>
              <div class="card-body p-4 p-sm-5">
                <h5 class="mb-0">تایید ایمیل</h5>
                <small>
                  جهت دریافت کد تایید، روی دکمه ارسال کد کلیک کنید.
                </small>
                <br>
                <span class="font-weight-black text-primary">{{ email }}</span>
                <div class="mt-4">
                  <v-otp-input dir="ltr" type="number" v-model="otpCode"></v-otp-input>
                  <div class="mb-2"></div>
                  <div class="d-grid mb-2">
                    <div class="btn-group" role="group">
                      <button @click="verifyCode" class="btn btn-primary d-block w-100 mt-3 text-light" name="submit" type="button" :disabled="loading">تایید</button>
                      <button @click="sendCode" class="btn btn-primary d-block w-100 mt-3 text-light" name="send-code" type="button" :disabled="sendButtonDisabled">
                        {{ sendButtonText }}
                      </button>
                    </div>
                  </div>
                </div>
                <router-link class="fs--1 text-600" :to="{name: 'setting'}">
                  <span class="d-inline-block ms-1">&larr;</span>
                  تغییر ایمیل
                </router-link>
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
import {mapGetters, mapState, mapActions} from "vuex";

export default {
  name: "VerifyEmailPage",
  components: {MainLayout},
  data() {
    return {
      otpCode: "",
      sendButtonText: "ارسال کد",
      sendButtonDisabled: false,
      countdownSeconds: 120,
    };
  },
  methods: {
    ...mapActions(["sendEmailOTP", "verifyEmailOTP"]),
    async sendCode() {
      await this.sendEmailOTP().then(() => {
        const countdownInterval = setInterval(() => {
          this.sendButtonDisabled = true;
          this.countdownSeconds -= 1;
          this.sendButtonText = this.countdownSeconds + ' ثانیه';
          if (this.countdownSeconds <= 0) {
            clearInterval(countdownInterval);
            this.sendButtonDisabled = false;
            this.countdownSeconds = 120;
            this.sendButtonText = 'ارسال مجدد کد';
          }
        }, 1000);
      });
    },
    async verifyCode() {
      if (this.otpCode) {
        await this.verifyEmailOTP(this.otpCode).then(() => {
          this.$router.push('/home');
        }).catch(() => {})
      }
    }
  },
  mounted() {
    if (this.confirmedEmail) {
      this.$router.push("/home");
    }
  },
  watch: {
    confirmedEmail(value) {
      if (value) {
        this.$router.push("/home");
      }
    }
  },
  computed: {
    ...mapGetters(["email", "confirmedEmail"]),
    ...mapState(["loading"])
  }
}
</script>


<style scoped>

</style>