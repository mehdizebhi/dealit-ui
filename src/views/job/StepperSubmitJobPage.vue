<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main id="top" class="main">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <div class="card p-0">
            <v-stepper :model-value="activeStep" style="background: transparent;">
              <div class="card-body bg-light p-0">
                <v-stepper-header class="selector noshadow border-2 border-bottom scrollbar">
                  <v-stepper-item
                      color="primary"
                      :complete="activeStep > 1"
                      :value="1"
                      title="جزئیات شغل"
                  ></v-stepper-item>

                  <v-divider></v-divider>

                  <v-stepper-item
                      color="primary"
                      :complete="activeStep > 2"
                      :value="2"
                      title="تنظیمات"
                  ></v-stepper-item>

                  <v-divider></v-divider>

                  <v-stepper-item
                      color="primary"
                      :complete="activeStep > 3"
                      :value="3"
                      title="قرارداد"
                  ></v-stepper-item>
                  <v-divider></v-divider>

                  <v-stepper-item
                      color="primary"
                      :complete="activeStep > 4"
                      :value="4"
                      title="پیشنهادیه"
                  ></v-stepper-item>
                  <v-divider></v-divider>

                  <v-stepper-item
                      color="primary"
                      :complete="activeStep > 5"
                      :value="5"
                      title="ارسال درخواست"
                  ></v-stepper-item>
                </v-stepper-header>
                <v-stepper-window>

                  <v-stepper-window-item :value="1">
                    <v-card class="scrollbar window-stepper bg-light">
                      <v-card-item>
                        <v-card-title>
                          <a href="/jobs/2">برنامه نویس جاوا و فریمورک اسپرینگ</a>
                        </v-card-title>

                        <v-card-subtitle>
                          <v-chip class="mx-1">توسعه وب</v-chip>
                          <span class="mx-1">9 آبان 1402</span>
                        </v-card-subtitle>
                      </v-card-item>

                      <v-card-text>
                        <p>
                          ما یک فرصت هیجان انگیز برای یک توسعه دهنده ماهر داریم تا به تیم ما بپیوندد و در یک پروژه کوتاه
                          مدت متمرکز بر توسعه یک میکروسرویس RESTful API مشارکت کند. این پروژه فرصتی بی نظیر برای به
                          نمایش گذاشتن تخصص خود در جاوا و چارچوب Spring Boot ارائه می دهد.

                          مسئولیت های کلیدی:
                          - طراحی، توسعه و پیاده سازی میکروسرویس امن RESTful API با استفاده از جاوا و Spring Boot.
                          - از پایگاه داده های MongoDB یا MySQL برای افزایش ذخیره سازی و بازیابی داده ها استفاده کنید.
                          - اجرای اقدامات امنیتی قوی از طریق Spring Security برای اطمینان از یکپارچگی میکروسرویس توسعه
                          یافته.
                          - با انجام کار یکپارچه سازی با سایر سرویس ها در معماری میکروسرویس، به طور یکپارچه همکاری کنید.
                          - انجام آزمایشات کامل برای تضمین قابلیت اطمینان و عملکرد میکروسرویس توسعه یافته از جمله آزمایش
                          واحد با JUnit.

                          الزامات:
                          - تسلط به جاوا: نامزد ایده آل باید به جاوا مسلط باشد و درک عمیقی از پیچیدگی های آن داشته باشد.
                          - تسلط به Spring Framework: تسلط قوی به Spring Framewrok به خصوص Spring Boot ضروری است.
                          - معماری میکروسرویس: آشنایی با معماری میکروسرویس الزامی است.

                          صلاحیت های:
                          - تجربه اثبات شده در توسعه جاوا، با تمرکز بر Spring Boot.
                          - کارهای قبلی نشان دهنده مهارت در معماری میکروسرویس.
                          - مهارت های ارتباطی قوی و توانایی همکاری موثر در یک تیم.
                          - توانایی صحبت کردن و نوشتن روان به زبان انگلیسی.

                          اگر شما یک متخصص جاوا هستید و مشتاق مشارکت در یک پروژه پویا هستید، همین حالا درخواست دهید! این
                          یک فرصت کوتاه مدت است که در آن می توانید مهارت های خود را برای ایجاد یک میکروسرویس RESTful API
                          قوی و ایمن به کار بگیرید.
                        </p>
                      </v-card-text>

                      <v-divider class="mx-4 mb-1"></v-divider>

                      <v-card-title>مهارت ها و تجربیات</v-card-title>

                      <div class="px-4">
                        <v-chip-group v-model="selection">
                          <v-chip>Java</v-chip>
                          <v-chip>Spring Boot</v-chip>
                          <v-chip>MySQL</v-chip>
                          <v-chip>MongoDB</v-chip>
                        </v-chip-group>
                      </div>
                    </v-card>
                  </v-stepper-window-item>

                  <v-stepper-window-item :value="2">
                    <v-card class="scrollbar window-stepper bg-light">
                      <v-row class="gx-2 m-0">
                        <v-col cols="12">
                          <v-combobox
                              class="col-12 col-md-6 col-lg-4"
                              density="compact"
                              :items="['پروفایل عمومی', 'Full-Stack', 'Backend Developer']"
                              chips
                              clearable
                              label="پروفایل پیشنهادی"
                              placeholder="پروفایل انتخابی توسط کارفرما دیده می‌شود."
                              variant="outlined"
                          ></v-combobox>
                        </v-col>
                        <v-col cols="12">
                          <v-combobox
                              class="col-12 col-md-6 col-lg-4"
                              density="compact"
                              :items="['کمتر از یک ماه', 'یک الی سه ماه', 'سه الی شش ماه', 'بیشتر از شش ماه']"
                              label="دوره زمانی"
                              placeholder="این پروژه چقدر طول می‌کشد؟"
                              variant="outlined"
                          ></v-combobox>
                        </v-col>
                        <v-col cols="8">
                          <h5>
                            پرداختی به چه شکل باشد؟
                          </h5>
                          <v-radio-group v-model="type">
                            <v-radio label="مرحله ای" value="byMilestone"></v-radio>
                            <v-radio label="کل پروژه" value="byProject"></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-stepper-window-item>

                  <v-stepper-window-item :value="3">
                    <v-card class="scrollbar window-stepper bg-light">
                      <div v-if="fixed">

                        <div v-show="type == 'byMilestone'">
                          <MilestoneInputCard v-for="(milestone, index) in milestones"
                                              :key="index"
                                              :data="milestone"
                                              :milestone-stage="String(index + 1)"
                                              @delete="handleDeleteMilestone(milestone)"/>
                          <button class="btn btn-falcon-default btn-sm mb-2 mx-4" type="button" @click="addNewMilestone">
                    <span class="fas fa-plus fs--2 me-1" data-fa-transform="up-1">
                    </span>اضافه کردن مرحله
                          </button>
                        </div>
                        <div v-show="type == 'byProject'" class="p-3">
                          <v-row>
                            <v-col class="my-0 py-0" cols="12">
                              <v-text-field
                                  density="compact"
                                  label="توضیحات کلی"
                                  placeholder="توضیحات کلی برای انجام پروژه وارد کنید"
                                  variant="outlined"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                  density="compact"
                                  label="نرخ مد نظر"
                                  model-value=""
                                  placeholder="مبلغ مورد انتظار برای کل پروژه"
                                  prepend-icon="mdi-currency-usd"
                                  step="100000"
                                  suffix="تومان"
                                  type="number"
                                  variant="outlined"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                      <div v-else class="p-1">
                        <h5>
                          چه نرخی دوست دارید برای این شغل دریافت کنید؟
                        </h5>
                        <div class="p-3">
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                  density="compact"
                                  label="نرخ ساعتی"
                                  model-value=""
                                  placeholder="مبلغ مورد انتظار برای هر ساعت"
                                  prepend-icon="mdi-currency-usd"
                                  step="100000"
                                  suffix="تومان"
                                  type="number"
                                  variant="outlined"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-card>
                  </v-stepper-window-item>

                  <v-stepper-window-item :value="4">
                    <v-card class="scrollbar window-stepper bg-light p-3">
                        <v-row>
                          <v-col cols="12">
                            <v-textarea
                                label="پیشنهادیه"
                                required
                                variant="outlined">
                            </v-textarea>
                          </v-col>
                          <v-col cols="12">
                            <div class="border-bottom border-dashed mb-10 text-400"></div>
                            <v-file-input
                                chips
                                label="پیوست فایل"
                                multiple
                                variant="outlined"
                            ></v-file-input>
                          </v-col>
                        </v-row>
                    </v-card>
                  </v-stepper-window-item>

                  <v-stepper-window-item :value="5">
                    <v-card class="scrollbar window-stepper bg-light">

                    </v-card>
                  </v-stepper-window-item>

                </v-stepper-window>
                <footer class="pb-4 px-4 px-md-8 px-lg-10">
                  <div class="d-flex justify-content-between">
                    <button :disabled="disable === 'prev'" @click="activeStep -= 1" class="btn btn-falcon-default me-1 mb-1" type="button">
                      قبلی
                    </button>
                    <button :disabled="disable === 'next'" @click="activeStep += 1" class="btn btn-falcon-success me-1 mb-1" type="button">
                      بعدی
                    </button>
                  </div>
                </footer>
<!--                <v-stepper-actions
                    :disable="disable"
                    @click:prev="activeStep -= 1"
                    @click:next="activeStep += 1"
                >
                </v-stepper-actions>-->
              </div>
            </v-stepper>

          </div>

          <v-snackbar v-model="snackbar" :timeout="5000">
            {{ snackbarText }}
            <template v-slot:actions>
              <v-btn
                  color="pink"
                  variant="text"
                  @click="snackbar = false"
              >
                بستن
              </v-btn>
            </template>
          </v-snackbar>
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
import MilestoneInputCard from "@/components/job/MilestoneInputCard.vue";

export default {
  name: "StepperSubmitJobPage",
  components: {MilestoneInputCard, ContentLayout},
  data() {
    return {
      activeStep: 1,
      steps: 5,
      fixed: true,
      milestones: [{}],
      type: "byMilestone",
      snackbar: false,
      snackbarText: 'مشکلی وجود دارد، لطفا صفحه را رفرش کنید.',
    };
  },
  methods: {
    handleDeleteMilestone(milestone) {
      if (this.milestones.length > 1) {
        this.milestones = this.milestones.filter(m => m !== milestone);
      } else {
        this.snackbar = true;
        this.snackbarText = "حداقل یک مرحله را باید تعیین کنید.";
      }
    },
    addNewMilestone() {
      this.milestones.push({});
    }
  },
  computed: {
    disable() {
      return this.activeStep === 1 ? 'prev' : this.activeStep === this.steps ? 'next' : undefined
    },
    /*nextText() {
      if (this.activeStep === this.steps) {
        return 'ارسال';
      }
      return 'بعدی';
    }*/
  }
}
</script>


<style scoped>
.selector.noshadow {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.window-stepper {
  height: 30rem;
  overflow: auto !important;
}
</style>