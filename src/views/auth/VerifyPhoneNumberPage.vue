<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main id="top" class="main">
    <div class="container" data-layout="container">
      <div class="row flex-center min-vh-100 py-6 text-center">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4"><a class="d-flex flex-center mb-4"
                                                                       href="/home"><img alt="" class="me-2"
                                                                                         src="../../assets/img/icons/spot-illustrations/dealit.png"
                                                                                         width="58"/><span
            class="font-sans-serif fw-bolder fs-5 d-inline-block">دیلیت</span></a>
          <div class="card">
            <div class="card-body p-4 p-sm-5">
              <h5 class="mb-0">تایید شماره تلفن همراه</h5>
              <small>
                جهت دریافت کد تایید، روی دکمه ارسال کد کلیک کنید.
              </small>
              <br>
              <span class="font-weight-black text-primary">{{ phoneNumber }}</span>
              <div class="mt-4">
                <v-otp-input dir="ltr" type="number" v-model="otpCode"></v-otp-input>
                <small class="text-danger mt-2" v-show="error === 'fail'">
                  کد وارد شده اشتباه است
                </small>
                <div class="mb-2"></div>
                <div class="d-grid mb-2">
                  <div class="btn-group" role="group">
                    <button @click="verifyCode" class="btn btn-primary d-block w-100 mt-3 text-light" name="submit" type="button">تایید</button>
                    <button @click="sendCode" class="btn btn-primary d-block w-100 mt-3 text-light" name="send-code" type="button" :disabled="sendButtonDisabled">
                      {{ sendButtonText }}
                    </button>
                  </div>
                  <small class="text-success mt-2" v-show="sendButtonDisabled">
                    کد ارسال شد
                  </small>
                </div>
              </div>
              <a class="fs--1 text-600" href="#!">
                <span class="d-inline-block ms-1">&larr;</span>
                تغییر شماره تلفن همراه
              </a>
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
import {userInfo} from "@/service/account-service";
import {sendOTP, verifyOTP} from "@/service/auth-service";

export default {
  name: "VerifyPhoneNumberPage",
  data() {
    return {
      otpCode: "",
      sendButtonText: "ارسال کد",
      sendButtonDisabled: false,
      countdownSeconds: 120,
      phoneNumber: "",
      error: ""
    };
  },
  methods: {
    sendCode() {
      this.sendButtonDisabled = true;
      this.error = "";
      sendOTP().then(() => {
        const countdownInterval = setInterval(() => {
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
    verifyCode() {
      if (this.otpCode) {
        verifyOTP(this.otpCode).then(() => {
          this.$router.push('/home');
        }).catch(() => {
          this.error = 'fail'
        })
      }
    }
  },
  mounted() {
    userInfo().then((userInfo) => {
      this.phoneNumber = userInfo.phoneNumber;
      if (userInfo.confirmedPhone){
        this.$router.push('/home');
      }
    }).catch(() => {
      this.phoneNumber = "صفحه را دوباره رفرش کنید";
    })
  }
}
</script>


<style scoped>

</style>