<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <div class="row flex-center min-vh-100 py-6 text-center">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xxl-5"><a class="d-flex flex-center mb-4" href="/"><img class="me-2" src="../../../../assets/img/icons/spot-illustrations/dealit.png" alt="" width="58" />
          <span class="font-sans-serif fw-bolder fs-5 d-inline-block">دیلیت</span></a>
          <div class="card">
            <div class="card-body p-4 p-sm-5">
              <div class="fw-black lh-1 text-300 fs-error">
                <div class="lottie mx-auto" style="width: 250px; height: 250px" data-options='{"path":"../../assets/img/animated-icons/404.json"}'></div>
              </div>
              <p class="lead mt-4 text-800 font-sans-serif fw-semi-bold w-md-75 w-xl-100 mx-auto">صفحه ای که به دنبال آن هستید یافت نشد.</p>
              <hr />
              <p>مطمئن شوید که آدرس صحیح است و صفحه جابجا نشده است. اگر فکر می کنید این یک اشتباه است،
                <a href="mailto:info@exmaple.com">با ما تماس بگیرید</a>.</p>
              <router-link class="btn btn-primary btn-sm mt-3" :to="{name: 'home'}"><span class="fas fa-home me-2"></span>بازگشت به خانه</router-link>
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
  name: "NotFoundPage"
}
</script>

<style scoped>

</style>