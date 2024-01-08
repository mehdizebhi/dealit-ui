<template>
  <MainLayout>
    <template #container>
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
                           pattern="^.{6,}$" required="" :type="passwordType" />
                    <div class="invalid-feedback">رمز عبور نامعتبر است</div>
                  </div>
                  <div class="form-check mb-4">
                    <input class="form-check-input" id="show-password" type="checkbox" v-model="showPassword" />
                    <label class="form-check-label" for="show-password">نمایش رمز عبور</label>
                  </div>
                  <div class="row flex-between-center">
                    <div class="col-auto">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="card-checkbox" checked="checked"/>
                        <label class="form-check-label mb-0" for="card-checkbox">من را به خاطر بسپار!</label>
                      </div>
                    </div>
                    <div class="col-auto">
                      <a class="fs--1" href="/forget-password">
                        فراموشی رمز عبور
                      </a>
                    </div>
                  </div>
                  <div class="mb-0">
                    <button class="btn btn-primary d-block w-100 mt-3 text-light" type="submit" name="submit" :disabled="loading">
                      ورود
                      <v-progress-circular v-show="loading" :width="3" :size="20" indeterminate></v-progress-circular>
                    </button>
                  </div>
                  <div class="text-center mt-2">
                  </div>
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
  name: "LoginPage",
  components: {MainLayout},
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      passwordType: "password",
    };
  },
  methods: {
    async onLogin() {
      if (this.validate()) {
        await this.login({username: this.username, password: this.password})
            .then(() => {
              this.$router.push('/home');
            }).catch(() => {});
      }
    },
    validate() {
      return this.username.length > 0 && this.password.length > 0;
    },
    ...mapActions(["login"]),
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
  mounted() {
  },
  computed: {
    ...mapState(["loading"]),
  }
};
</script>

<style scoped>
</style>
<script setup>
</script>