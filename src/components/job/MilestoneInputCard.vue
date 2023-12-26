<template>
  <div class="border-5 bg-light rounded border-start position-relative p-3 mb-6">
    <div class="position-absolute end-0 top-0 mt-2 me-3 z-index-1">
      <button class="btn btn-link btn-sm p-0" type="button" @click="$emit('delete')">
        <span class="fas fa-times-circle text-danger" data-fa-transform="shrink-1"></span>
      </button>
    </div>
    <div class="row gx-2">
      <h6>مرحله {{milestoneStage}}</h6>
      <div class="col-12 mb-3">
        <div class="mb-3">
          <label class="form-label" :for="'stage-description-' + milestoneStage">توضیحات مختصر:</label>
          <input :id="'stage-description-' + milestoneStage" class="form-control" type="text" placeholder="شرح کوتاه از کاری که در این مرحله قرار است انجام شود" />
        </div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
        >
          <template v-slot:activator="{ props }">
            <div class="input-group mb-3">
              <span class="input-group-text">
                <span class="far fa-calendar-alt"></span>
              </span>
              <input :id="'start-date-' + milestoneStage" v-model="startDateText" v-bind="props" class="form-control" type="text" placeholder="تاریخ شروع" readonly />
            </div>
          </template>
          <v-date-picker
              v-model="startDate"
              :hide-header="true"
              :min="today"
              :max="endDate"
              input-mode="calendar"
          ></v-date-picker>
        </v-menu>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
        >
          <template v-slot:activator="{ props }">
            <div class="input-group mb-3">
              <span class="input-group-text">
                <span class="far fa-calendar-alt"></span>
              </span>
              <input :id="'end-date-' + milestoneStage" v-model="endDateText" v-bind="props" class="form-control" type="text" placeholder="تاریخ پایان" readonly />
            </div>
          </template>
          <v-date-picker
              v-model="endDate"
              :hide-header="true"
              :min="startDate"
              input-mode="calendar"
          ></v-date-picker>
        </v-menu>
      </div>
      <div class="col-12 mb-3">
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <input :id="'stage-price-' + milestoneStage" class="form-control" type="number" step="100000" placeholder="مبلغ مورد انتظار برای پایان این مرحله" />
          <span class="input-group-text">تومان</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MilestoneInputCard",
  components: {},
  emits: ['delete'],
  props: {
    data: {
      type: Object
    },
    milestoneStage: {
      type: String
    }
  },
  data() {
    return {
      dates: [],
      startDate: null,
      endDate: null
    };
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    convertToJalali(gregorianDate) {
      return gregorianDate.toLocaleDateString('fa-IR');
    },
  },
  computed: {
    dateRangeText() {
      if (this.dates === null) {
        return "";
      }
      return this.dates.map(date => this.convertToJalali(date)).join(' تا ');
    },
    today() {
      const today = new Date();
      return this.formatDate(today);
    },
    startDateText() {
      if (this.startDate === null) {
        return "";
      }
      return this.convertToJalali(this.startDate);
    },
    endDateText() {
      if (this.endDate === null) {
        return "";
      }
      return this.convertToJalali(this.endDate);
    }
  },
  watch: {
  }
}
</script>


<style scoped>

</style>