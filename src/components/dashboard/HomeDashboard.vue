<template>
  <div class="col-xxl-6 col-xl-12">
    <div class="row g-3">
      <div class="col-12">
        <div class="card bg-transparent-50 overflow-hidden">
          <div class="card-header position-relative">
            <div class="bg-holder d-none d-md-block bg-card z-index-1"
                 style="
                          background-image: url(../../assets/img/illustrations/bg-wave.png);
                          background-size: 230px;
                          background-position: right bottom;
                          z-index: -1;
                        "
            ></div>
            <!--/.bg-holder-->
            <div class="position-relative z-index-2">
              <div>
                <h3 class="text-primary mb-1">{{ accountOverview.message }}</h3>
                <p> {{ accountOverview.info }} </p>
              </div>
              <div class="d-flex py-3" v-if="accountOverview.freelancer != null">
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">شغل‌های فعال</p>
                  <h4 class="text-800 mb-0">{{ accountOverview.freelancer.jobs }}</h4>
                </div>
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">پروپوزال‌های فعال</p>
                  <h4 class="text-800 mb-0">{{ accountOverview.freelancer.proposals }}</h4>
                </div>
                <div class="ps-3">
                  <p class="text-600 fs--1 fw-medium">درآمد ماه جاری (تومان)</p>
                  <h4 class="text-800 mb-0">{{ accountOverview.freelancer.income }}</h4>
                </div>
              </div>
              <div class="d-flex py-3" v-if="accountOverview.client != null">
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">قراردادهای فعال</p>
                  <h4 class="text-800 mb-0">{{ accountOverview.client.contracts }}</h4>
                </div>
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">پروپوزال‌های دریافتی</p>
                  <h4 class="text-800 mb-0">{{ accountOverview.client.proposals }}</h4>
                </div>
                <div class="ps-3">
                  <p class="text-600 fs--1 fw-medium">پرداختی ماه جاری (تومان)</p>
                  <h4 class="text-800 mb-0">{{ accountOverview.client.outcome }}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <ul class="mb-0 list-unstyled">
              <DashboardTinyNotification title="9 پیام جدید" text="پیام های خوانده نشده‌ای دارید." type="warning" link="/link" link-title="نمایش پیام‌ها" />
              <DashboardTinyNotification title="2 دعوتنامه جدید" text="دعوتنامه جدیدی از سمت کارفرما برای شما ارسال شده است." type="info" link="/link" link-title="نمایش پروپوزال‌ها" />
              <DashboardTinyNotification title="1 تاییدیه پرداخت" text="درخواست انتقال پرداختی شما تایید شد." type="simple" link="/link" link-title="نمایش پرداختی‌ها" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardTinyNotification from "@/components/dashboard/DashboardTinyNotification.vue";

export default {
  name: "HomeDashboard",
  components: {DashboardTinyNotification},
  props: {
    accountOverview: {
      type: Object
    }
  }
}
</script>


<style scoped>

</style>