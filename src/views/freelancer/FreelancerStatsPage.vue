<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>

          <div class="row g-3 mb-3">
            <div class="col-xxl-8">
              <div class="card overflow-hidden mb-3">
                <div class="card-header audience-chart-header p-0 bg-light scrollbar-overlay" data-simplebar="init"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden;"><div class="simplebar-content" style="padding: 0px;">
                  <ul class="nav nav-tabs border-0 chart-tab flex-nowrap" id="audience-chart-tab" role="tablist">
                    <li class="nav-item" role="presentation"><a class="nav-link mb-0 active" id="users-tab" data-bs-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="true">
                      <div class="audience-tab-item p-2 pe-4">
                        <h6 class="text-800 fs--2 text-nowrap">بازدیدهای پروفایل</h6>
                        <h5 class="text-800">7 بازدید</h5>
                        <div class="d-flex align-items-center"><svg class="svg-inline--fa fa-caret-up fa-w-10 text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg><!-- <span class="fas fa-caret-up text-success"></span> Font Awesome fontawesome.com -->
                          <h6 class="fs--2 mb-0 ms-2 text-success">62.0%</h6>
                        </div>
                      </div>
                    </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link mb-0" id="sessions-tab" data-bs-toggle="tab" href="#sessions" role="tab" aria-controls="sessions" aria-selected="false" tabindex="-1">
                      <div class="audience-tab-item p-2 pe-4">
                        <h6 class="text-800 fs--2 text-nowrap">ساعات ثبت شده</h6>
                        <h5 class="text-800">122 ساعت</h5>
                        <div class="d-flex align-items-center"><svg class="svg-inline--fa fa-caret-up fa-w-10 text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg><!-- <span class="fas fa-caret-up text-success"></span> Font Awesome fontawesome.com -->
                          <h6 class="fs--2 mb-0 ms-2 text-success">46.2%</h6>
                        </div>
                      </div>
                    </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link mb-0" id="rate-tab" data-bs-toggle="tab" href="#rate" role="tab" aria-controls="rate" aria-selected="false" tabindex="-1">
                      <div class="audience-tab-item p-2 pe-4">
                        <h6 class="text-800 fs--2 text-nowrap">درآمد</h6>
                        <h5 class="text-800">36 میلیون تومان</h5>
                        <div class="d-flex align-items-center"><svg class="svg-inline--fa fa-caret-down fa-w-10 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg><!-- <span class="fas fa-caret-down text-warning"></span> Font Awesome fontawesome.com -->
                          <h6 class="fs--2 mb-0 ms-2 text-warning">56.1%</h6>
                        </div>
                      </div>
                    </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link mb-0" id="duration-tab" data-bs-toggle="tab" href="#duration" role="tab" aria-controls="duration" aria-selected="false" tabindex="-1">
                      <div class="audience-tab-item p-2 pe-4">
                        <h6 class="text-800 fs--2 text-nowrap">پروپوزال‌ها</h6>
                        <h5 class="text-800">16 ارسالی</h5>
                        <div class="d-flex align-items-center"><svg class="svg-inline--fa fa-caret-down fa-w-10 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg><!-- <span class="fas fa-caret-down text-warning"></span> Font Awesome fontawesome.com -->
                          <h6 class="fs--2 mb-0 ms-2 text-warning">32.2%</h6>
                        </div>
                      </div>
                    </a></li>
                  </ul>
                </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 96px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: hidden;"><div class="simplebar-scrollbar" style="height: 0px; display: none;"></div></div></div>
                <div class="card-body">
                  <div class="tab-content">

                    <div class="tab-pane active show" id="users" role="tabpanel" aria-labelledby="users-tab">
                      <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                    </div>

                    <div class="tab-pane" id="sessions" role="tabpanel" aria-labelledby="sessions-tab">
                      <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                    </div>

                    <div class="tab-pane" id="rate" role="tabpanel" aria-labelledby="rate-tab">
                      <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                    </div>

                    <div class="tab-pane" id="duration" role="tabpanel" aria-labelledby="duration-tab">
                      <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                    </div>

                  </div>
                </div>
                <div class="card-footer bg-light py-2">
                  <div class="row flex-between-center g-0">
                    <div class="col-auto"><select class="form-select form-select-sm audience-select-menu">
                      <option value="week" selected="selected">هفته اخیر</option>
                      <option value="month">ماه اخیر</option>
                      <option value="three-month">90 روز اخیر</option>
                      <option value="year">سال جاری</option>
                    </select></div>
<!--                    <div class="col-auto"><a class="btn btn-link btn-sm px-0 fw-medium" href="#!">Visitors overview<svg class="svg-inline&#45;&#45;fa fa-chevron-right fa-w-10 ms-1 fs&#45;&#45;2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>&lt;!&ndash; <span class="fas fa-chevron-right ms-1 fs&#45;&#45;2"></span> Font Awesome fontawesome.com &ndash;&gt;</a></div>-->
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
import Chart from 'primevue/chart';

export default {
  name: "FreelancerStatsPage",
  components: {ContentLayout, Chart},
  data() {
    return {
      chartData: null,
      chartOptions: null,
      tab: null
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
  }
}
</script>

<style scoped>

</style>