<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <div class="row flex-center min-vh-100 py-6 text-center">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <a class="d-flex flex-center mb-4" href="/">
            <img class="me-2" src="../../assets/img/icons/spot-illustrations/dealit.png" alt="" width="58" />
            <span class="font-sans-serif fw-bolder fs-5 d-inline-block">دیلیت</span></a>
          <div class="card">
            <div class="card-body p-4 p-sm-5">
              <h5 class="mb-0">رمز عبور خود را فراموش کردید؟</h5>
              <small>ایمیل خود را وارد کنید و ما یک لینک برای تنظیم مجدد ارسال میکنیم.</small>
              <form class="my-4 needs-validation" @submit.prevent="onResetPassword" novalidate="">
                <input dir="ltr" id="email" class="form-control" type="email" placeholder="example@email.com" autocomplete="on" required="" />
                <div class="invalid-feedback">ایمیل وارد شده نامعتبر است</div>
                <div class="mb-3"></div>
                <button class="btn btn-primary d-block w-100 mt-3 text-light" type="submit" name="submit">ارسال ایمیل</button>
              </form>
              <a class="fs--1 text-600" href="/login">
                ورود به حساب کاربری
                <span class="d-inline-block ms-1">&larr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main><!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->
</template>

<script>
export default {
  name: "ForgetPasswordPage",
  methods: {
    onResetPassword() {

    }
  }
}
</script>

<style scoped>

</style>