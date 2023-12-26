<template>
    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <main class="main" id="top">
      <div class="container" data-layout="container">
        <!--Start Content Layout-->
        <ContentLayout>
          <template #content>
            <div class="row g-3">
                <div class="col-xxl-9">
                  <div class="card rounded-3 overflow-hidden h-100">
                    <div class="card-body bg-line-chart-gradient d-flex flex-column justify-content-between">
                      <div class="row align-items-center g-0">
                        <div class="col light">
                          <h4 class="text-white mb-0">موجودی کل
                             7,584,600
                            </h4>
                          <p class="fs--1 fw-semi-bold text-white">دریافتی امروز <span class="opacity-50">550,000</span></p>
                        </div>
                        <div class="col-auto d-none d-sm-block">
                          <select class="form-select form-select-sm mb-3" id="">
                            <option value="all">همه پرداخت‌ها</option>
                            <option value="successful" selected="selected">پرداخت‌های موفق</option>
                            <option value="failed">پرداخت‌های ناموفق</option>
                          </select></div>
                      </div>
                      <!-- Find the JS file for the following calendar at: src/js/charts/echarts/line-payment.js-->
                      <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
<!--                      <div class="echart-line-payment" style="height:200px" data-echart-responsive="true"></div>-->
                      <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-xxl-9">
                  <div class="row g-3 my-1">
                    <div class="col-12 col-sm-6">
                      <div class="card overflow-hidden" style="min-width: 12rem">
                        <div class="bg-holder bg-card" style="background-image:url(../../../../assets/img/icons/spot-illustrations/corner-1.png);"></div>
                        <!--/.bg-holder-->
                        <div class="card-body position-relative">
                          <h6>مخارج کل</h6>
                          <div class="display-4 fs-2 mb-2 fw-normal font-sans-serif">500 میلیون تومان</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="card overflow-hidden" style="min-width: 12rem">
                        <div class="bg-holder bg-card" style="background-image:url(../../../../assets/img/icons/spot-illustrations/corner-3.png);"></div>
                        <!--/.bg-holder-->
                        <div class="card-body position-relative">
                          <h6>درآمد کل</h6>
                          <div class="display-4 fs-2 mb-2 fw-normal font-sans-serif">269 میلیون تومان</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="card overflow-hidden">
                    <div class="card-header d-flex flex-between-center bg-light py-2">
                      <h6 class="mb-0">تاریخچه تسویه حساب</h6>
                      <div class="dropdown font-sans-serif btn-reveal-trigger">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-transaction-summary" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-transaction-summary"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body py-0">
                      <div class="table-responsive scrollbar">
                        <table class="table table-dashboard mb-0 fs--1">
                          <tr>
                            <td class="align-middle ps-0 text-nowrap">
                              <div class="d-flex position-relative align-items-center">
                                <div class="flex-1"><a class="stretched-link" href="#!">
                                    <h6 class="mb-0">Atlassian</h6>
                                  </a>
                                  <p class="mb-0">Subscription payment</p>
                                </div>
                              </div>
                            </td>
                            <td class="align-middle px-4" style="width:1%;"><span class="badge fs--1 w-100 badge-soft-success">Completed</span></td>
                            <td class="align-middle px-4 text-end text-nowrap" style="width:1%;">
                              <h6 class="mb-0">$290.00 USD</h6>
                              <p class="fs--2 mb-0">15 May, 2020</p>
                            </td>
                            <td class="align-middle ps-4 pe-1" style="width: 130px; min-width: 130px;"><select class="form-select form-select-sm px-2 bg-transparent">
                                <option>Action</option>
                                <option>Archive</option>
                                <option>Delete</option>
                              </select></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="card-footer bg-light py-2">
                      <div class="row flex-between-center">
                        <div class="col-auto"><select class="form-select form-select-sm">
                            <option>Last 7 days</option>
                            <option>Last Month</option>
                            <option>Last Year</option>
                          </select></div>
                        <div class="col-auto"><a class="btn btn-link btn-sm px-0 fw-medium" href="#!">View All<span class="fas fa-chevron-right ms-1 fs--2"></span></a></div>
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
import Chart from 'primevue/chart';

export default {
  name: "WalletPage",
  components: {
    ContentLayout,
    Chart
  },
  data() {
    return {
      chartData: null,
      chartOptions: null
    };
  },
  mounted() {
    this.chartData = this.setChartData();
    this.chartOptions = this.setChartOptions();
  },
  methods: {
    setChartData() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4
          },
          {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.4
          }
        ]
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          }
        }
      };
    }
  },
};
</script>


  <style>
</style>
  