<template>
  <div class="border-5 border-start position-relative p-3 mb-6">
    <div class="position-absolute end-0 top-0 mt-2 me-3 z-index-1">
      <button class="btn btn-link btn-sm p-0" type="button" @click="$emit('delete')">
        <span class="fas fa-times-circle text-danger" data-fa-transform="shrink-1"></span>
      </button>
    </div>
    <div class="row gx-2">
      <h6>مرحله {{milestoneStage}}</h6>
      <div class="col-12 mb-3">
        <v-text-field
            density="compact"
            label="توضیحات مختصر"
            model-value=""
            placeholder="شرح کوتاه از کاری که در این مرحله قرار است انجام شود"
            type="text"
            variant="outlined">
        </v-text-field>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
        >
          <template v-slot:activator="{ props }">
            <v-text-field
                v-model="startDateText"
                density="compact"
                label="تاریخ شروع"
                placeholder="لطفا تاریخ شروع این مرحله را وارد کنید"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="props"
                variant="outlined"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="startDate"
              :hide-header="true"
              :min="today"
              :max="endDate"
              input-mode="calendar"
          ></v-date-picker>
<!--          <v-date-picker
              v-model="dates"
              :hide-header="true"
              :min="today"
              input-mode="calendar"
              multiple
          ></v-date-picker>-->
        </v-menu>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
        >
          <template v-slot:activator="{ props }">
            <v-text-field
                v-model="endDateText"
                density="compact"
                label="تاریخ پایان"
                placeholder="لطفا تاریخ پایان این مرحله را وارد کنید"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="props"
                variant="outlined"
            ></v-text-field>
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
        <v-text-field
            density="compact"
            label="نرخ مد نظر"
            model-value=""
            placeholder="مبلغ مورد انتظار برای پایان این مرحله"
            step="100000"
            suffix="تومان"
            type="number"
            variant="outlined"
            prepend-icon="mdi-currency-usd"
        ></v-text-field>
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