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
                <h3 class="text-primary mb-1">{{ message }}</h3>
                <p> {{ info }} </p>
              </div>
              <div class="d-flex py-3" v-if="isFreelancer">
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">شغل‌های فعال</p>
                  <h4 class="text-800 mb-0">{{ freelancerInfo.activeContracts }}</h4>
                </div>
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">پروپوزال‌های فعال</p>
                  <h4 class="text-800 mb-0">{{ freelancerInfo.activeProposal }}</h4>
                </div>
                <div class="ps-3">
                  <p class="text-600 fs--1 fw-medium">درآمد ماه جاری (تومان)</p>
                  <h4 class="text-800 mb-0">{{ freelancerInfo.lastMonthIncome }}</h4>
                </div>
              </div>
              <div class="d-flex py-3" v-if="isClient">
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">قراردادهای فعال</p>
                  <h4 class="text-800 mb-0">{{ clientInfo.activeContracts }}</h4>
                </div>
                <div class="pe-3">
                  <p class="text-600 fs--1 fw-medium">پروپوزال‌های دریافتی</p>
                  <h4 class="text-800 mb-0">{{ clientInfo.newProposal }}</h4>
                </div>
                <div class="ps-3">
                  <p class="text-600 fs--1 fw-medium">پرداختی ماه جاری (تومان)</p>
                  <h4 class="text-800 mb-0">{{ clientInfo.lastMonthOutcome }}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <ul class="mb-0 list-unstyled">
              <DashboardTinyNotification v-if="newMessages > 0" :title="newMessages + ' پیام جدید،'" text="پیام های خوانده نشده‌ای دارید." type="warning" link="/chat" link-title="نمایش پیام‌ها" />
              <DashboardTinyNotification v-if="freelancerInfo.invitations > 0" :title="freelancerInfo.invitations + ' دعوتنامه جدید،'" text="دعوتنامه جدیدی از سمت کارفرما برای شما ارسال شده است." type="info" link="/freelancer/proposals" link-title="نمایش پروپوزال‌ها" />
              <DashboardTinyNotification v-if="newWithdrawConfirmation > 0" :title="newWithdrawConfirmation + ' تاییدیه پرداخت،'" text="درخواست انتقال پرداختی شما تایید شد." type="simple" link="/report/transactions" link-title="نمایش پرداختی‌ها" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardTinyNotification from "@/components/dashboard/DashboardTinyNotification.vue";
import {mapGetters} from "vuex";

export default {
  name: "HomeDashboard",
  components: {DashboardTinyNotification},
  props: {
    freelancerInfo: {
      type: Object,
      required: false
    },
    clientInfo: {
      type: Object,
      required: false
    },
    accountInfo: {
      type: Object,
      required: false
    },
    isFreelancer: {
      type: Boolean,
      required: true
    },
    isClient: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["newMessages", "newWithdrawConfirmation"]),
  }
}
</script>


<style scoped>

</style>