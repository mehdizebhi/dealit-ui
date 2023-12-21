<template>
  <div class="col-xxl-6 col-xl-12">
    <div class="row g-3">
      <div class="col-12">
        <div class="card bg-transparent-50 overflow-hidden">
          <div class="card-header position-relative">
            <div class="bg-holder d-none d-md-block bg-card z-index-1"
                 style="
                          background-image: url(../assets/img/illustrations/bg-wave.png);
                          background-size: 230px;
                          background-position: right bottom;
                          z-index: -1;
                        "
            ></div>
            <!--/.bg-holder-->
            <div class="position-relative z-index-2">
              <div>
                <h3 class="text-primary mb-1">سلام وقت بخیر</h3>
                <p>خلاصه ای جزئیات حساب شما
                </p>
              </div>
              <div class="d-flex py-3">
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">شغل‌های فعال</p>
                  <h4 class="text-800 mb-0">1</h4>
                </div>
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">پروپوزال‌های فعال</p>
                  <h4 class="text-800 mb-0">6</h4>
                </div>
                <div class="ps-3">
                  <p class="text-600 fs--1 fw-medium">موجودی (تومان)</p>
                  <h4 class="text-800 mb-0">7,365,000</h4>
                </div>
              </div>
              <div class="d-flex py-3">
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">شغل‌های فعال</p>
                  <h4 class="text-800 mb-0">1</h4>
                </div>
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">پروپوزال‌های فعال</p>
                  <h4 class="text-800 mb-0">6</h4>
                </div>
                <div class="ps-3">
                  <p class="text-600 fs--1 fw-medium">موجودی (تومان)</p>
                  <h4 class="text-800 mb-0">7,365,000</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <ul class="mb-0 list-unstyled">
              <li class="alert mb-0 rounded-0 py-3 px-card alert-warning border-x-0 border-top-0">
                <div class="row flex-between-center">
                  <div class="col">
                    <div class="d-flex">
                      <div class="fas fa-circle mt-1 fs--2"></div>
                      <p class="fs--1 ps-2 mb-0">
                        <strong>9 پیام جدید</strong>
                        پیام های خوانده نشده‌ای دارید.
                      </p>
                    </div>
                  </div>
                  <div class="col-auto d-flex align-items-center">
                    <a class="alert-link fs--1 fw-medium" href="#!"
                    >نمایش پیام‌ها<i
                        class="fas fa-chevron-left ms-1 fs--2"
                    ></i
                    ></a>
                  </div>
                </div>
              </li>
              <li class="alert mb-0 rounded-0 py-3 px-card greetings-item border-top border-x-0 border-top-0">
                <div class="row flex-between-center">
                  <div class="col">
                    <div class="d-flex">
                      <div
                          class="fas fa-circle mt-1 fs--2 text-primary"
                      ></div>
                      <p class="fs--1 ps-2 mb-0">
                        <strong>1 تاییدیه پرداخت</strong>
                        درخواست انتقال پرداختی شما تایید شد.
                      </p>
                    </div>
                  </div>
                  <div class="col-auto d-flex align-items-center">
                    <a class="alert-link fs--1 fw-medium" href="#!"
                    >نمایش پرداختی‌ها<i
                        class="fas fa-chevron-left ms-1 fs--2"
                    ></i
                    ></a>
                  </div>
                </div>
              </li>
              <li class="alert mb-0 rounded-0 py-3 px-card greetings-item border-top border-0">
                <div class="row flex-between-center">
                  <div class="col">
                    <div class="d-flex">
                      <div
                          class="fas fa-circle mt-1 fs--2 text-primary"
                      ></div>
                      <p class="fs--1 ps-2 mb-0">
                        <strong>2 دعوتنامه جدید</strong>
                        دعوتنامه جدیدی از سمت کارفرما برای شما ارسال شده است.
                      </p>
                    </div>
                  </div>
                  <div class="col-auto d-flex align-items-center">
                    <a class="alert-link fs--1 fw-medium" href="#!"
                    >نمایش پروپوزال‌ها<i
                        class="fas fa-chevron-left ms-1 fs--2"
                    ></i
                    ></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeDashboard",
  props: {

  }
}
</script>


<style scoped>

</style>