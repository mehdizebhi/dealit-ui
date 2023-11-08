<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>

          <div class="row mb-3">
            <div class="col">
              <div class="card bg-100 shadow-none border">
                <div class="row gx-0 flex-between-center">
                  <div class="col-sm-auto d-flex align-items-center"><img class="ms-n2" src="../../assets/img/illustrations/crm-bar-chart.png" alt="" width="90" />
                    <div>
                      <h4 class="text-primary fw-bold mb-0">آمار کارفرما</h4>
                    </div><img class="ms-n4 d-md-none d-lg-block" src="../../assets/img/illustrations/crm-line-chart.png" alt="" width="150" />
                  </div>
                  <div class="col-md-auto p-3">
                    <form class="row align-items-center g-3">
                      <div class="col-auto">
                        <h6 class="text-700 mb-0">انتخاب بازه زمانی:</h6>
                      </div>
                      <div class="col-md-auto position-relative">
<!--                        <input class="form-control form-control-sm datetimepicker ps-4" id="CRMDateRange" type="text" data-options="{&quot;mode&quot;:&quot;range&quot;,&quot;dateFormat&quot;:&quot;M d&quot;,&quot;disableMobile&quot;:true , &quot;defaultDate&quot;: [&quot;Oct 11&quot;, &quot;Oct 18&quot;] }" />-->
<!--                        <flat-pickr v-model="date" :config="config" @on-close="dateHandler" />-->
<!--                        <span class="fas fa-calendar-alt text-primary position-absolute top-50 translate-middle-y me-2"> </span>-->
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-3 g-3">
            <div class="col-lg-12 col-xxl-9">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-4 border-lg-end border-bottom border-lg-0 pb-3 pb-lg-0">
                      <div class="d-flex flex-between-center mb-3">
                        <div class="d-flex align-items-center">
                          <div class="icon-item icon-item-sm bg-soft-success shadow-none me-2 bg-soft-primary">
                            <span class="fs--2 fas fa-dollar-sign text-success"></span>
                          </div>
                          <h6 class="mb-0">پرداختی‌ها</h6>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="d-flex">
                          <p class="font-sans-serif lh-1 mb-1 fs-4 pe-2">350</p>
                          <div class="d-flex flex-column">
                            <span class="me-1 text-success fas fa-caret-up"></span>
                            <p class="fs--2 mb-0 text-nowrap">میلیون تومان</p>
                          </div>
                        </div>
                        <div class="echart-crm-statistics w-100 ms-2" data-echart-responsive="true" data-echarts='{"series":[{"type":"line","data":[200,150,175,130,150,115,130,100],"color":"#00d27a","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"#00d27a3A"},{"offset":1,"color":"#00d27a0A"}]}}}],"grid":{"bottom":"-10px"}}'></div>
                      </div>
                    </div>
                    <div class="col-lg-4 border-lg-end border-bottom border-lg-0 py-3 py-lg-0">
                      <div class="d-flex flex-between-center mb-3">
                        <div class="d-flex align-items-center">
                          <div class="icon-item icon-item-sm bg-soft-primary shadow-none me-2 bg-soft-info">
                            <span class="fs--2 far fa-handshake text-info"></span>
                          </div>
                          <h6 class="mb-0">قراردادهای جدید</h6>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="d-flex">
                          <p class="font-sans-serif lh-1 mb-1 fs-4 pe-2">15</p>
                          <div class="d-flex flex-column"> <span class="me-1 text-success fas fa-caret-up text-success"></span>
                            <p class="fs--2 mb-0 text-nowrap">عدد</p>
                          </div>
                        </div>
                        <div class="echart-crm-statistics w-100 ms-2" data-echart-responsive="true" data-echarts='{"series":[{"type":"line","data":[90,160,150,120,230,155,220,240],"color":"#27bcfd","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"#27bcfd3A"},{"offset":1,"color":"#27bcfd0A"}]}}}],"grid":{"bottom":"-10px"}}'></div>
                      </div>
                    </div>
                    <div class="col-lg-4 pt-3 pt-lg-0">
                      <div class="d-flex flex-between-center mb-3">
                        <div class="d-flex align-items-center">
                          <div class="icon-item icon-item-sm bg-soft-primary shadow-none me-2">
                            <span class="fs--2 far fa-address-card text-primary"></span>
                          </div>
                          <h6 class="mb-0">پروپوزال‌های دریافتی</h6>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="d-flex">
                          <p class="font-sans-serif lh-1 mb-1 fs-4 pe-2">19</p>
                          <div class="d-flex flex-column"> <span class="me-1 fas fa-caret-down text-danger"></span>
                            <p class="fs--2 mb-0 text-nowrap">عدد</p>
                          </div>
                        </div>
                        <div class="echart-crm-statistics w-100 ms-2" data-echart-responsive="true" data-echarts='{"series":[{"type":"line","data":[220,230,150,175,200,170,70,160],"color":"#2c7be5","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"#2c7be53A"},{"offset":1,"color":"#2c7be50A"}]}}}],"grid":{"bottom":"-10px"}}'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header d-flex flex-between-center ps-0 py-0 border-bottom">
                  <ul class="nav nav-tabs border-0 flex-nowrap tab-active-caret" id="crm-revenue-chart-tab" role="tablist" data-tab-has-echarts="data-tab-has-echarts">
                    <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0 active" id="crm-revenue-tab" data-bs-toggle="tab" href="#crm-revenue" role="tab" aria-controls="crm-revenue" aria-selected="true">پرداختی‌ها</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-users-tab" data-bs-toggle="tab" href="#crm-users" role="tab" aria-controls="crm-users" aria-selected="false">درآمدها</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-deals-tab" data-bs-toggle="tab" href="#crm-deals" role="tab" aria-controls="crm-deals" aria-selected="false">ساعات صرف شده</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-profit-tab" data-bs-toggle="tab" href="#crm-profit" role="tab" aria-controls="crm-profit" aria-selected="false">توجهات</a></li>
                  </ul>
                  <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-session-by-country" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                    <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-session-by-country">
                      <a class="dropdown-item" href="#!">دانلود</a>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row g-1">
                    <div class="col-xxl-3">
                      <div class="row g-0 my-2">
                        <div class="col-md-6 col-xxl-12">
                          <div class="border-xxl-bottom border-xxl-200 mb-2">
                            <h2 class="text-primary">$37,950</h2>
                            <p class="fs--2 text-500 fw-semi-bold mb-0"><span class="fas fa-circle text-primary me-2"></span>مقدار اصلی</p>
                            <p class="fs--2 text-500 fw-semi-bold"><span class="fas fa-circle text-warning me-2"></span>مورد انتظار</p>
                          </div>
                        </div>
                        <div class="col-md-6 col-xxl-12 py-2">
                          <div class="row mx-0">
                            <div class="col-6 border-end border-bottom py-3">
                              <h5 class="fw-normal text-600">350 میلیون تومان</h5>
                              <h6 class="text-500 mb-0">پرداختی</h6>
                            </div>
                            <div class="col-6 border-bottom py-3">
                              <h5 class="fw-normal text-600">220 میلیون تومان</h5>
                              <h6 class="text-500 mb-0">درآمد</h6>
                            </div>
                            <div class="col-6 border-end py-3">
                              <h5 class="fw-normal text-600">1123</h5>
                              <h6 class="text-500 mb-0">ساعات صرف شده</h6>
                            </div>
                            <div class="col-6 py-3">
                              <h5 class="fw-normal text-600">489 کلیک</h5>
                              <h6 class="text-500 mb-0">توجهات</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-9">
                      <div class="tab-content">
                        <div class="tab-pane active" id="crm-revenue" role="tabpanel" aria-labelledby="crm-revenue-tab">
                          <div class="echart-crm-revenue" data-echart-responsive="true" data-echart-tab="data-echart-tab" style="height:320px;"></div>
                        </div>
                        <div class="tab-pane" id="crm-users" role="tabpanel" aria-labelledby="crm-users-tab">
                          <div class="echart-crm-users" data-echart-responsive="true" data-echart-tab="data-echart-tab" style="height:320px;"></div>
                        </div>
                        <div class="tab-pane" id="crm-deals" role="tabpanel" aria-labelledby="crm-deals-tab">
                          <div class="echart-crm-deals" data-echart-responsive="true" data-echart-tab="data-echart-tab" style="height:320px;"></div>
                        </div>
                        <div class="tab-pane" id="crm-profit" role="tabpanel" aria-labelledby="crm-profit-tab">
                          <div class="echart-crm-profit" data-echart-responsive="true" data-echart-tab="data-echart-tab" style="height:320px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </template>
      </ContentLayout>
      <!--End Content Layout-->
    </div>
  </main>
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->
</template>

<script>
import ContentLayout from "@/components/layouts/ContentLayout.vue";
// import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';
// import {Persian} from 'flatpickr/dist/l10n/fa';

export default {
  name: "ClientStatsPage",
  components: {ContentLayout,
    // flatPickr
  },
  data(){
    return{
      date: '2022-10-28 to 2022-10-29',
      config: {
        mode: 'range',
        wrap: true,
        altFormat: 'M j',
        altInput: true,
        dateFormat: 'Y-m-d',
        locale: "Persian"
      }
    }
  },
  methods: {
    dateHandler(date) {
      console.log("new date = ", date.toString());
    },
  }
}
</script>


<style scoped>

</style>