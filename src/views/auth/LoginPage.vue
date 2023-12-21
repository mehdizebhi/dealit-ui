<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->

  <main class="main" id="top">
    <div class="container" data-layout="container">
      <div class="row flex-center min-vh-100 py-6">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4"><a class="d-flex flex-center mb-4" href="/"><img class="me-2" src="../../assets/img/icons/spot-illustrations/dealit.png" alt="" width="58" /><span class="font-sans-serif fw-bolder fs-5 d-inline-block">دیلیت</span></a>
          <div class="card">
            <div class="card-body p-4 p-sm-5">
              <div class="row flex-between-center mb-2">
                <div class="col-auto">
                  <h5>ورود به حساب</h5>
                </div>
                <div class="col-auto fs--1 text-600"><span class="mb-0 undefined">یا</span> <span><a href="/signup">ایجاد حساب کاربری</a></span></div>
              </div>
              <form class="needs-validation" @submit.prevent="onLogin" novalidate="">
                <div class="mb-3">
                  <label class="form-label" for="username">نام کاربری</label>
                  <input id="username" v-model="username" autocomplete="on" class="form-control" dir="ltr"
                         pattern="^[a-zA-Z][a-zA-Z0-9_]{4,}$" required="" type="text"/>
                  <div class="invalid-feedback">نام کاربری باید حداقل 5 کاراکتر باشد و ترکیبی از حروف انگلیسی، اعداد و _ باشد</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="password">رمز عبور</label>
                  <input id="password" v-model="password" autocomplete="on" class="form-control" dir="ltr"
                         pattern="^.{6,}$" required="" type="password"/>
                  <div class="invalid-feedback">رمز عبور نامعتبر است</div>
                </div>
                <div class="row flex-between-center">
                  <div class="col-auto">
                    <div class="form-check mb-0">
                      <input class="form-check-input" type="checkbox" id="card-checkbox" checked="checked"/>
                      <label class="form-check-label mb-0" for="card-checkbox">من را به خاطر بسپار!</label>
                    </div>
                  </div>
                  <div class="col-auto">
                    <a class="fs--1" href="/reset-password">
                      فراموشی رمز عبور
                    </a>
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-block w-100 mt-3 text-light" type="submit" name="submit">ورود</button>
                </div>
                <div class="text-center">
                  <small class="text-danger mt-2" v-show="status === 'fail'">
                    رمزعبور یا نام کاربری اشتباه است
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

<!--  <main class="main" id="top">
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
                    &lt;!&ndash;/.bg-holder&ndash;&gt;
                    <div class="z-index-1 position-relative"><a
                        class="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder" href="/">دیلیت</a>
                      <p class="opacity-75 text-white">پلتفرم اشتغال محور</p>
                    </div>
                  </div>
                  <div class="mt-3 mb-4 mt-md-4 mb-md-5 light">
                    <p class="pt-3 text-white">حساب کاربری ندارید؟<br>
                      <router-link class="btn btn-outline-light mt-2 px-4" :to="{name: 'signup'}">
                        ایجاد حساب کاربری
                      </router-link></p>
                    <p class="mb-0 mt-4 mt-md-5 fs&#45;&#45;1 fw-semi-bold text-white opacity-75"><a
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
                    <form class="needs-validation" @submit.prevent="onLogin" novalidate="">
                      <div class="mb-3">
                        <label class="form-label" for="username">نام کاربری</label>
                        <input id="username" v-model="username" autocomplete="on" class="form-control" dir="ltr"
                               pattern="^[a-zA-Z][a-zA-Z0-9_]{4,}$" required="" type="text"/>
                        <div class="invalid-feedback">نام کاربری باید حداقل 5 کاراکتر باشد و ترکیبی از حروف انگلیسی، اعداد و _ باشد</div>
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="password">رمز عبور</label>
                        <input id="password" v-model="password" autocomplete="on" class="form-control" dir="ltr"
                               pattern="^.{6,}$" required="" type="password"/>
                        <div class="invalid-feedback">رمز عبور نامعتبر است</div>
                      </div>
                      <div class="row flex-between-center">
                        <div class="col-auto">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="checkbox" id="card-checkbox" checked="checked"/>
                            <label class="form-check-label mb-0" for="card-checkbox">من را به خاطر بسپار!</label>
                          </div>
                        </div>
                        <div class="col-auto">
                          <a class="fs&#45;&#45;1" href="/reset-password">
                            فراموشی رمز عبور
                          </a>
                        </div>
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-primary d-block w-100 mt-3 text-light" type="submit" name="submit">ورود</button>
                      </div>
                      <div class="text-center">
                        <small class="text-danger mt-2" v-show="status === 'fail'">
                          رمزعبور یا نام کاربری اشتباه است
                        </small>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>-->
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->
</template>

<script>
import {login} from "@/service/auth-service";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      status: "",
    };
  },
  methods: {
    onLogin() {
      this.status = "";
      if (this.validate()) {
        login(this.username, this.password)
            .then((token) => {
              const expiredPeriod = Math.floor(token.exp - (Date.now() / 1_000));
              this.setCookie("access_token", token.accessToken, expiredPeriod);
              this.$router.push('/home');
            }).catch(() => {
          this.status = "fail";
        });
      }
    },
    setCookie(name, value, expired = "1d") {
      this.$cookies.set(name, value, expired);
    },
    closeError() {
      this.$refs.toast.style.display = "none";
    },
    validate() {
      return this.username.length > 0 && this.password.length > 0;
    }
  },
};
</script>

<style scoped>
</style>
