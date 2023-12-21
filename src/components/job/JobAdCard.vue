<template>
  <article class="card mb-3 overflow-hidden">
    <div class="card-body p-0">
      <div class="row g-0">
        <div class="col-md-12 col-lg-12 p-card">
          <div class="row g-0 h-100">
            <div class="col-lg-8 col-xxl-9 d-flex flex-column pe-card">
              <div class="d-flex gap-2 flex-wrap mb-3">
                <span class="badge rounded-pill badge-soft-info">
                  <span class="far fa-gem me-1" data-fa-transform="shrink-4"></span>
                  <span>آگهی ویژه</span>
                </span>
                <span class="badge rounded-pill badge-soft-success">
                  <span class="fas fa-check me-1" data-fa-transform="shrink-4"></span>
                  <span>پرداخت تایید شده</span>
                </span>
              </div>
              <h5 class="fs-0"><a href="../../../app/e-learning/trainer-profile.html">توسعه وب</a></h5>
              <h4 class="mt-3 mt-sm-0 fs-0 fs-lg-1">
                <a class="text-900" href="../../../app/e-learning/course/course-details.html">
                  توسعه دهنده فریمورک اسپرینگ برای یک پروژه بانکی
                </a>
              </h4>
              <p class="fs--1 mt-2">
                ما در تیم خود نیاز به یک فرد باتجربه و خلاق نیاز داریم که در توسعه سرویس ها جاوا تخصص
                داشته
                باشد.
              </p>
<!--              <p class="fs&#45;&#45;1 mt-2 d-none d-lg-block">
                ما در تیم خود نیاز به یک فرد باتجربه و خلاق نیاز داریم که در توسعه سرویس ها جاوا تخصص
                داشته
                باشد.
              </p>-->
              <div class="d-flex align-items-start mt-4 small">
                <v-rating
                    :model-value="3"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                ></v-rating>
                <div class="d-flex align-items-center mx-1">
                  <span class="fas fa-map-marker-alt mx-1"></span>
                  <span class="fw-normal">یزد</span>
                </div>
                <div class="d-flex align-items-center mx-1">
                  <span class="fas fa-dollar-sign mx-1"></span>
                  <span class="fw-normal">350 میلیون</span>
                </div>
              </div>
<!--              <div class="flex-1 d-flex align-items-end fw-semi-bold fs&#45;&#45;1">
                <span class="me-1 text-900">4.9</span>
                <div>
                  <span class="fa fa-star text-warning"></span>
                  <span class="fa fa-star text-warning"></span>
                  <span class="fa fa-star text-warning"></span>
                  <span class="fa fa-star text-warning"></span>
                  <span class="fa fa-star-half-alt text-warning star-icon"></span>
                </div>
                <span class="ms-2 text-secondary">(از 25 نظر)</span>
              </div>-->
            </div>
            <div class="col-lg-4 col-xxl-3 mt-4 mt-lg-0">
              <div class="h-100 d-flex flex-lg-column justify-content-between p-lg-3">
                <div class="mb-lg-4 mt-auto mt-lg-0">
                  <h4 class="mb-1 lh-1 fs-2 text-800 d-flex align-items-end">15,000,000
                    <span class="ms-1 fs--1 text-facebook mb-1">تومان</span>
                  </h4>
                  <p class="mb-0 fs--1 text-800">کانکشن موردنیاز: 16</p>
                </div>
                <div class="mt-3 d-flex flex-lg-column gap-2">

                  <v-btn prepend-icon="mdi-heart-outline" variant="tonal">
                    <template v-slot:prepend>
                      <v-icon color="red-lighten-1"></v-icon>
                    </template>
                    <span class="ms-1 d-sm-none d-md-flex d-none d-sm-flex">ذخیره آگهی</span>
                  </v-btn>
                  <v-btn prepend-icon="mdi-eye-outline" color="blue-darken-2" variant="tonal">
                    <span class="ms-1 d-sm-none d-md-flex d-none d-sm-flex">نمایش آگهی</span>
                  </v-btn>

<!--                  <button class="btn btn-md btn-falcon-default hover-danger fs&#45;&#45;1 text-600"><span-->
<!--                      class="far fa-heart"></span><span-->
<!--                      class="ms-1 text-600 d-none d-lg-inline">ذخیره آگهی</span>-->
<!--                  </button>-->
<!--                  <button class="btn btn-md btn-primary fs&#45;&#45;1"><span class="far fa-eye"></span><span-->
<!--                      class="ms-1 d-none d-lg-inline">نمایش آگهی</span>-->
<!--                  </button>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "JobAdCard",
  props: {
    jobAd: {
      type: Object
    }
  }
}
</script>


<style scoped>

</style>