<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->

  <main class="main" id="top">
    <div class="container-fluid">
      <div class="row flex-center min-vh-100 py-6">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4"><a class="d-flex flex-center mb-4" href="/"><img class="me-2" src="../../assets/img/icons/spot-illustrations/dealit.png" alt="" width="58" /><span class="font-sans-serif fw-bolder fs-5 d-inline-block">دیلیت</span></a>
          <div class="card">
            <div class="card-body p-4 p-sm-5">
              <div class="row flex-between-center mb-2">
                <div class="col-auto">
                  <h5>ایجاد حساب کاربری</h5>
                </div>
                <div class="col-auto fs--1 text-600"><span class="mb-0 undefined">حساب کاربری دارید؟</span> <span><a href="/login">وارد شوید</a></span></div>
              </div>
              <form class="needs-validation" @submit.prevent="onSubmit" novalidate="">
                <div class="mb-3">
                  <label class="form-label" for="username">نام کاربری</label>
                  <input dir="ltr" id="username" v-model="username" autocomplete="on" placeholder="نام کاربری برای هر کاربر متفاوت است" pattern="^[a-zA-Z][a-zA-Z0-9_]{4,}$" class="form-control" type="text" required=""/>
                  <div class="invalid-feedback">نام کاربری باید حداقل 5 کاراکتر باشد و ترکیبی از حروف انگلیسی، اعداد و _ باشد</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="display-name">نام نمایشی</label>
                  <input id="display-name" v-model="displayName" placeholder="از این نام برای نمایش به کاربران دیگر استفاده می شود" autocomplete="on" class="form-control" type="text" required=""/>
                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="email">ایمیل</label>
                  <input dir="ltr" id="email" v-model="email" placeholder="example@email.com" autocomplete="on" class="form-control" type="email" required=""/>
                  <div class="invalid-feedback">ایمیل وارد شده نامعتبر است</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="phoneNumber">تلفن همراه</label>
                  <input dir="ltr" id="phoneNumber" v-model="phoneNumber" pattern="^09\d{9}$" placeholder="09123456789" autocomplete="on" class="form-control" type="tel" required=""/>
                  <div class="invalid-feedback">تلفن همراه نامعتبر است</div>
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col-sm-6">
                    <label class="form-label" for="password">رمز عبور</label>
                    <input dir="ltr" id="password" v-model="password" pattern="^.{6,}$" autocomplete="on" class="form-control" type="password" required=""/>
                    <div class="invalid-feedback">رمز عبور نامعتبر است</div>
                  </div>
                  <div class="mb-3 col-sm-6">
                    <label class="form-label" for="confirm-password">
                      تکرار رمز عبور
                    </label>
                    <input dir="ltr" id="confirm-password" v-model="confirmPassword" autocomplete="on" class="form-control" type="password" required=""/>
                    <div class="invalid-feedback">تکرار رمز عبور با رمز عبور متفاوت است</div>
                  </div>
                </div>
                <div class="form-check">
                  <input class="form-check-input" id="freelancer" v-model="account" value="freelancer" type="radio" name="account-type" checked="" />
                  <label class="form-check-label" for="freelancer">ثبت نام به عنوان فریلنسر</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" id="client" v-model="account" value="client" type="radio" name="account-type" />
                  <label class="form-check-label" for="client">ثبت نام به عنوان کارفرما</label>
                </div>
                <div class="form-check">
                  <input id="confirmation" v-model="agreement" class="form-check-input" type="checkbox" required="" />
                  <label class="form-label" for="confirmation">
                    <a href="#!">قوانین و سیاست حفظ حریم خصوصی </a>  می پذیرم
                  </label>
                  <div class="invalid-feedback mt-0">شما باید قبل از ثبت نام موافقت خود را اعلام کنید</div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-block w-100 mt-3 text-light" type="submit" name="submit">ثبت نام</button>
                </div>
              </form>
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
import {signup} from "@/service/auth-service";

export default {
  name: "RegisterPage",
  data() {
    return {
      username: "",
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      account: "",
      agreement: false,
      phoneNumber: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.agreement === false){
        return;
      }
      const user = {
        "username": this.username,
        "password": this.password,
        "confirmPassword": this.confirmPassword,
        "email": this.email,
        "displayName": this.displayName,
        "phoneNumber": this.phoneNumber,
        "account": this.account
      }
      signup(user).then((signedInUser) => {
        this.$cookies.set("access_token", signedInUser.token.accessToken, Math.floor(signedInUser.token.exp - (Date.now() / 1_000)));
        this.$router.push('/verify-phone');
      }).catch(() => {
        this.$router.go();
      });
    }
  }
}
</script>

<style scoped>

</style>