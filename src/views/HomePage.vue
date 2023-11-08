<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main id="top" class="main">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <SearchComponent/>
          <div class="row g-3 mb-3">
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
                        <li
                            class="alert mb-0 rounded-0 py-3 px-card alert-warning border-x-0 border-top-0"
                        >
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
                        <li
                            class="alert mb-0 rounded-0 py-3 px-card greetings-item border-top border-x-0 border-top-0"
                        >
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
                        <li
                            class="alert mb-0 rounded-0 py-3 px-card greetings-item border-top border-0"
                        >
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
            <div class="col-md-6">
              <div class="card font-sans-serif">
                <div class="card-header pb-0">
                  <h6 class="mb-0">دریافتی ماه جاری</h6>
                </div>
                <div class="card-body">
                  <div class="row g-0">
                    <div class="col-6">
                      <h4 class="text-700 lh-1 mb-1"> 25 میلیون تومان</h4><span
                        class="badge rounded-pill badge-soft-danger fs--2 align-bottom"><span
                        class="fas fa-caret-down me-1"
                        data-fa-transform="shrink-4"></span><span>5.1% ماه قبل</span></span>
                    </div>
                    <div class="col-6 mt-n4 d-flex justify-content-end">
                      <div class="echart-default" data-echart-responsive="true"
                           :data-echarts="dataChart">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card font-sans-serif">
                <div class="card-header pb-0">
                  <h6 class="mb-0">ساعات ثبت شده ماه جاری</h6>
                </div>
                <div class="card-body">
                  <div class="row g-0">
                    <div class="col-6">
                      <h4 class="text-700 lh-1 mb-1"> 121h 11m</h4><span
                        class="badge rounded-pill badge-soft-success fs--2 align-bottom"><span
                        class="fas fa-caret-up me-1"
                        data-fa-transform="shrink-4"></span><span>3.6% ماه قبل</span></span>
                    </div>
                    <div class="col-6 mt-n4 d-flex justify-content-end">
                      <div class="echart-default" data-echart-responsive="true"
                           data-echarts='{"xAxis":{"data":["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8"]},"series":[{"type":"line","data":[55,60,40,120,70,80,35,80,85],"smooth":true,"lineStyle":{"width":2}}],"grid":{"bottom":"2%","top":"2%","right":"0px","left":"10px"}}'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-12 order-xxl-3 order-lg-1 order-3">
              <div class="card h-100 font-sans-serif">
                <div class="card-header bg-light d-flex flex-between-center py-2">
                  <h6 class="mb-0">فعالیت های اخیر</h6>
                </div>
                <div class="card-body py-0 scrollbar-overlay recent-activity-body-height" data-simplebar="init">
                  <div class="simplebar-wrapper" style="margin: 0px -20px;">
                    <div class="simplebar-height-auto-observer-wrapper">
                      <div class="simplebar-height-auto-observer"></div>
                    </div>
                    <div class="simplebar-mask">
                      <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                        <div aria-label="scrollable content" class="simplebar-content-wrapper" role="region"
                             style="height: 100%; overflow: hidden scroll;" tabindex="0">
                          <div class="simplebar-content" style="padding: 0px 20px;">
                            <div class="timeline-simple">

                              <div class="timeline-item position-relative">
                                <div class="row g-0 align-items-center">
                                  <div class="col-auto d-flex align-items-center">
                                    <h6 class="timeline-item-date fs--2 text-500 text-truncate mb-0 me-1">3h پیش</h6>
                                    <div class="position-relative">
                                      <div class="icon-item icon-item-md rounded-7 shadow-none bg-200">
                                        <span class="text-primary fas fa-sign-out-alt"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col ps-3 fs--1 text-500">
                                    <div class="py-card">
                                      <h5 class="fs--1">خروج</h5>
                                      <p class="mb-0">خروج از سایت</p>
                                    </div>
                                    <hr class="text-200 my-0">
                                  </div>
                                </div>
                              </div>

                              <div class="timeline-item position-relative">
                                <div class="row g-0 align-items-center">
                                  <div class="col-auto d-flex align-items-center">
                                    <h6 class="timeline-item-date fs--2 text-500 text-truncate mb-0 me-1">3h پیش</h6>
                                    <div class="position-relative">
                                      <div class="icon-item icon-item-md rounded-7 shadow-none bg-200">
                                        <span class="text-primary fas fa-sign-out-alt"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col ps-3 fs--1 text-500">
                                    <div class="py-card">
                                      <h5 class="fs--1">خروج</h5>
                                      <p class="mb-0">خروج از سایت</p>
                                    </div>
                                    <hr class="text-200 my-0">
                                  </div>
                                </div>
                              </div>

                              <div class="timeline-item position-relative">
                                <div class="row g-0 align-items-center">
                                  <div class="col-auto d-flex align-items-center">
                                    <h6 class="timeline-item-date fs--2 text-500 text-truncate mb-0 me-1">3h پیش</h6>
                                    <div class="position-relative">
                                      <div class="icon-item icon-item-md rounded-7 shadow-none bg-200">
                                        <span class="text-primary fas fa-sign-out-alt"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col ps-3 fs--1 text-500">
                                    <div class="py-card">
                                      <h5 class="fs--1">خروج</h5>
                                      <p class="mb-0">خروج از سایت</p>
                                    </div>
                                    <hr class="text-200 my-0">
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="simplebar-placeholder" style="width: auto; height: 403px;"></div>
                  </div>
                  <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                  </div>
                  <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                    <div class="simplebar-scrollbar"
                         style="height: 365px; transform: translate3d(0px, 19px, 0px); display: block;"></div>
                  </div>
                </div>
                <div class="card-footer bg-light py-2">
                  <div class="row justify-content-between">
                    <div class="col-auto"><select class="form-select form-select-sm">
                      <option selected="selected" value="today">امروز</option>
                      <option value="week">هفته پیش</option>
                      <option value="month">ماه پیش</option>
                    </select></div>
                    <div class="col-auto"><a class="btn btn-sm btn-falcon-default" href="#!">نمایش همه</a></div>
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
  <!--Start Custom Setting Layout-->
  <!--End Custom Setting Layout-->
</template>

<script>
import ContentLayout from "/src/components/layouts/ContentLayout.vue";
import SearchComponent from "@/components/base/SearchComponent.vue";
// import {getOverview} from "@/api/account";

export default {
  name: "HomePage",
  components: {
    SearchComponent,
    ContentLayout
  },
  data() {
    return {
      token: "",
      accountOverview: {},
      option: {
        xAxis: {
          data: [
            'Day 1',
            'Day 2',
            'Day 3',
            'Day 4',
            'Day 5',
            'Day 6',
            'Day 7',
            'Day 8',
            'Day 9',
            'Day 10'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [85, 60, 120, 70, 100, 15, 65, 80, 60, 75, 45],
            type: 'line',
            smooth: true,
            lineStyle: { width: 2 }
          }
        ],
        grid: { bottom: '2%', top: '2%', right: '0px', left: '0px' }
      },
      dataChart: '{"xAxis":{"data":["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10"]},"series":[{"type":"line","data":[85,60,120,70,100,15,65,80,60,75,45],"smooth":true,"lineStyle":{"width":2}}],"grid":{"bottom":"2%","top":"2%","right":"0px","left":"0px"}}'
    };
  },
  methods: {},
  mounted() {
    // getOverview()
    //     .then((overview) => {
    //       console.log(overview);
    //       this.accountOverview = overview;
    //     });
  },
};
</script>


<style>
</style>
  