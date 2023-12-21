<template>
  <div class="col-md-6">
    <div class="card font-sans-serif">
      <div class="card-header pb-0">
        <h6 class="mb-0">{{ title }}</h6>
      </div>
      <div class="card-body">
        <div class="row g-0">
          <div class="col-6">
            <h4 class="text-700 lh-1 mb-1">{{ value }}</h4><span
              class="badge rounded-pill badge-soft-danger fs--2 align-bottom"><span
              class="fas fa-caret-down me-1"
              data-fa-transform="shrink-4"></span><span>{{ percentage }}</span></span>
          </div>
          <div class="col-6 mt-n4 d-flex justify-content-end">
            <Chart :data="data" :options="option" width="172" height="auto" type="line"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart';

export default {
  name: "CardTinyStats",
  components: {
    Chart
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String
    },
    value: {
      type: String
    },
    percentage: {
      type: String
    }
  },
  data() {
    return {
      option: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    };
  }
}
</script>


<style scoped>

</style>