<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container-fluid">
      <div class="row min-vh-100 flex-center g-0">
        <div class="col-lg-8 col-xxl-5 py-3 position-relative"><img class="bg-auth-circle-shape" src="../../assets/img/icons/spot-illustrations/bg-shape.png" alt=""
                                                                    width="250"><img class="bg-auth-circle-shape-2"
                                                                                     src="../../assets/img/icons/spot-illustrations/shape-1.png" alt="" width="150">
          <div class="card overflow-hidden z-index-1">
            <div class="card-body p-0">
              <div class="row g-0 h-100">
                <div class="col-md-5 text-center bg-card-gradient">
                  <div class="position-relative p-4 pt-md-5 pb-md-7 light">
                    <div class="bg-holder bg-auth-card-shape"
                         style="background-image:url(../../assets/img/icons/spot-illustrations/half-circle.png);"></div>
                    <!--/.bg-holder-->
                    <div class="z-index-1 position-relative"><a
                        class="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder" href="/">دیلیت</a>
                      <p class="opacity-75 text-white">پلتفرم اشتغال محور</p>
                    </div>
                  </div>
                  <div class="mt-3 mb-4 mt-md-4 mb-md-5 light">
                    <p class="text-white">حساب کاربری ندارید؟<br>
                      <router-link class="text-decoration-underline link-light" :to="{name: 'signup'}">ایجاد حساب</router-link>
                    </p>
                    <p class="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75"><a
                        class="text-decoration-underline text-white" href="#!">قوانین</a> و <a
                        class="text-decoration-underline text-white" href="#!">شرایط </a> ما را بخوانید</p>
                  </div>
                </div>
                <div class="col-md-7 d-flex flex-center">
                  <div class="p-4 p-md-5 flex-grow-1">
                    <div class="row flex-between-center">
                      <div class="col-auto">
                        <h3>ورود به حساب</h3>
                      </div>
                    </div>
                    <form @submit.prevent="login">
                      <div class="mb-3"><label class="form-label" for="username">نام کاربری</label><input
                          class="form-control" v-model="username" id="username" type="text"/></div>
                      <div class="mb-3">
                        <div class="d-flex justify-content-between"><label class="form-label" for="password">رمز
                          عبور</label></div>
                        <input class="form-control" v-model="password" id="password" type="password"/>
                      </div>
                      <div class="row flex-between-center">
                        <div class="col-auto">
                          <div class="form-check mb-0"><input class="form-check-input" type="checkbox"
                                                              id="card-checkbox" checked="checked"/><label
                              class="form-check-label mb-0" for="card-checkbox">من را به خاطر بسپار!</label></div>
                        </div>
                        <div class="col-auto"><a class="fs--1"
                                                 href="../../../pages/authentication/card/forgot-password.html">فراموشی
                          رمز عبور</a></div>
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">ورود</button>
                      </div>
                    </form>
                    <div class="position-relative mt-4">
                      <hr/>
                      <div class="divider-content-center">ورود با</div>
                    </div>
                    <div class="row g-2 mt-2">
                      <div class="col-sm-6"><a class="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span
                          class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> گوگل</a></div>
                      <div class="col-sm-6"><a class="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span
                          class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> فیسبوک</a></div>
                    </div>
                  </div>
                </div>
              </div>
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
import {login} from "@/api/auth";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      login(this.username, this.password)
          .then((authToken) =>{
            this.setCookie("token", authToken.token, Math.floor(authToken - (Date.now() / 1_000)));
            this.$router.push('/home');
          });
    },
    setCookie(name, value, expired = "1d") {
      this.$cookies.set(name, value, expired);
    },
    closeError() {
      this.$refs.toast.style.display = "none";
    }
  },
};
</script>

<style scoped>
</style>
