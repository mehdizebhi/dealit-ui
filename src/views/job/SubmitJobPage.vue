<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->

  <main id="top" class="main">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <div class="card mb-3">
            <div class="card-body">
              <div class="row flex-between-center">
                <div class="col-md">
                  <h5 class="mb-2 mb-md-0">ارسال پروپوزال</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-lg-8 pe-lg-2">

              <v-card
                  class="mx-auto mb-3 card-body bg-light pb-4"
              >
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
                    ما یک فرصت هیجان انگیز برای یک توسعه دهنده ماهر داریم تا به تیم ما بپیوندد و در یک پروژه کوتاه مدت متمرکز بر توسعه یک میکروسرویس RESTful API مشارکت کند. این پروژه فرصتی بی نظیر برای به نمایش گذاشتن تخصص خود در جاوا و چارچوب Spring Boot ارائه می دهد.

                    مسئولیت های کلیدی:
                    - طراحی، توسعه و پیاده سازی میکروسرویس امن RESTful API با استفاده از جاوا و Spring Boot.
                    - از پایگاه داده های MongoDB یا MySQL برای افزایش ذخیره سازی و بازیابی داده ها استفاده کنید.
                    - اجرای اقدامات امنیتی قوی از طریق Spring Security برای اطمینان از یکپارچگی میکروسرویس توسعه یافته.
                    - با انجام کار یکپارچه سازی با سایر سرویس ها در معماری میکروسرویس، به طور یکپارچه همکاری کنید.
                    - انجام آزمایشات کامل برای تضمین قابلیت اطمینان و عملکرد میکروسرویس توسعه یافته از جمله آزمایش واحد با JUnit.

                    الزامات:
                    - تسلط به جاوا: نامزد ایده آل باید به جاوا مسلط باشد و درک عمیقی از پیچیدگی های آن داشته باشد.
                    - تسلط به Spring Framework: تسلط قوی به Spring Framewrok به خصوص Spring Boot ضروری است.
                    - معماری میکروسرویس: آشنایی با معماری میکروسرویس الزامی است.

                    صلاحیت های:
                    - تجربه اثبات شده در توسعه جاوا، با تمرکز بر Spring Boot.
                    - کارهای قبلی نشان دهنده مهارت در معماری میکروسرویس.
                    - مهارت های ارتباطی قوی و توانایی همکاری موثر در یک تیم.
                    - توانایی صحبت کردن و نوشتن روان به زبان انگلیسی.

                    اگر شما یک متخصص جاوا هستید و مشتاق مشارکت در یک پروژه پویا هستید، همین حالا درخواست دهید! این یک فرصت کوتاه مدت است که در آن می توانید مهارت های خود را برای ایجاد یک میکروسرویس RESTful API قوی و ایمن به کار بگیرید.
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

              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="mb-0">قرارداد</h5>
                </div>
                <div v-if="fixed" class="card-body bg-light">
                  <h6>
                    پرداختی به چه شکل باشد؟
                  </h6>
                  <v-radio-group v-model="type">
                    <v-radio label="مرحله ای" value="byMilestone"></v-radio>
                    <v-radio label="کل پروژه" value="byProject"></v-radio>
                  </v-radio-group>
                  <div v-show="type == 'byMilestone'">
                    <MilestoneInputCard v-for="(milestone, index) in milestones"
                                        :key="index"
                                        :data="milestone"
                                        :milestone-stage="String(index + 1)"
                                        @delete="handleDeleteMilestone(milestone)"/>
                    <button class="btn btn-falcon-default btn-sm mt-2" type="button" @click="addNewMilestone">
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
                <div v-else class="card-body bg-light">
                  <h6>
                    چه نرخی دوست دارید برای این شغل دریافت کنید؟
                  </h6>
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
              </div>
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="mb-0">پیشنهادیه</h5>
                </div>
                <div class="card-body bg-light">
                  <div class="p-3">
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
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 ps-lg-2">
              <div class="sticky-sidebar">
                <div class="card mb-lg-0">
                  <div class="card-header">
                    <h5 class="mb-0">تنظیمات</h5>
                  </div>
                  <div class="card-body bg-light">

                    <div class="mb-2">
                      <v-combobox
                          :items="['پروفایل عمومی', 'Full-Stack', 'Backend Developer']"
                          chips
                          clearable
                          label="پروفایل پیشنهادی"
                          variant="outlined"
                      ></v-combobox>
                    </div>
                    <div class="mb-2">
                      <v-combobox
                          :items="['کمتر از یک ماه', 'یک الی سه ماه', 'سه الی شش ماه', 'بیشتر از شش ماه']"
                          label="دوره زمانی"
                          placeholder="این پروژه چقدر طول می‌کشد؟"
                          variant="outlined"
                      ></v-combobox>
                    </div>


                    <div class="border-bottom border-dashed my-3 text-400"></div>
                    <div class="mb-2 mt-5">
                      <ul class="list-unstyled fs--1 mb-0">
                        <li class="mb-2">
                          <span class="fas fa-graduation-cap me-2"></span>
                          <span class="text-800 fw-medium me-2">متخصص</span>
                        </li>
                        <li class="mb-2">
                          <span class="far fa-calendar-alt me-2"></span>
                          <span class="text-800 fw-medium me-2">کمتر از یک ماه</span>
                        </li>
                        <li class="mb-2">
                          <span class="fas fa-dollar-sign me-2"></span>
                          <span class="text-800 fw-medium me-2">100 الی 200 هزار تومان بر ساعت</span>
                        </li>
                        <li class="mb-2">
                          <span class="far fa-clock me-2"></span>
                          <span class="text-800 fw-medium me-2">کمتر از 30 ساعت در هفته</span>
                        </li>
                        <li class="mb-2">
                          <span class="fas fa-globe me-2"></span>
                          <a class="btn btn-link btn-sm p-0 lh-sm fw-medium me-2" href="/jobs/2">نمایش صفحه آگهی</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="card mt-3">
            <div class="card-body">
              <div class="row justify-content-between align-items-center">
                <div class="col-md">
                  <h5 class="mb-2 mb-md-0">جهت ثبت روی دکمه ارسال کلیک کنید</h5>
                </div>
                <div class="col-auto">
                  <button class="btn btn-success me-2">ارسال پروپوزال</button>
                  <button class="btn btn-falcon-danger">لغو</button>
                </div>
              </div>
            </div>
          </div>

          <!--          <div class="card mb-4">
                      <div class="card-header">
                        <h5 class="mb-0">تنظیمات پروپوزال</h5>
                      </div>
                      <div class="card-body bg-light">
                        <v-container>
                          <v-row class="mb-4">
                          </v-row>
                        </v-container>
                      </div>
                    </div>
                    <div class="card mb-4">
                      <div class="card-header">
                        <h5 class="mb-0">شرایط</h5>
                      </div>
                      <div class="card-body bg-light">
                        <v-container>
                          <v-row v-if="fixed" class="mb-4">
                            <v-col cols="12">
                              <span class="mx-2">مرحله 1</span>
                              <button class="btn btn-danger btn-sm text-light mx-2" type="button">
                                <span class="fas fa-trash ms-1" data-fa-transform="shrink-3"></span>
                                حذف
                              </button>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                  color="blue-darken-1"
                                  density="compact"
                                  label="توضیحات مختصر"
                                  model-value=""
                                  placeholder="شرح کوتاه از کاری که در این مرحله قرار است انجام شود"
                                  type="text"
                                  variant="outlined">
                              </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                  color="blue-darken-1"
                                  density="compact"
                                  label="تعداد روز مورد نیاز"
                                  model-value=""
                                  placeholder="تعداد روزهایی که برای این مرحله نیاز دارید"
                                  suffix="روز"
                                  type="number"
                                  variant="outlined">
                              </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                  color="blue-darken-1"
                                  density="compact"
                                  label="مبلغ مد نظر"
                                  model-value=""
                                  placeholder="میزان مبلغ مورد انتظار برای پایان این مرحله"
                                  step="100000"
                                  suffix="تومان"
                                  type="number"
                                  variant="outlined"
                              ></v-text-field>
                            </v-col>
                            <v-col col="12" class="py-0">
                              <button class="btn btn-primary btn-sm text-light" type="button">
                                <span class="fas fa-plus me-1" data-fa-transform="shrink-3"></span>
                                ایجاد مرحله جدید
                              </button>
                            </v-col>
                          </v-row>
                          <v-row v-if="!fixed">
                            <v-col cols="12">
                              <v-text-field
                                  color="blue-darken-1"
                                  density="compact"
                                  label="مبلغ به ازای هر ساعت"
                                  model-value=""
                                  placeholder="میزان مبلغ مورد انتظار برای هر ساعت"
                                  step="100000"
                                  suffix="تومان"
                                  type="number"
                                  variant="outlined"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </div>
                    </div>
                    <div class="card mb-4">
                      <div class="card-header">
                      </div>
                      <div class="card-body bg-light">
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-textarea
                                  color="blue-darken-1"
                                  density="compact"
                                  label="پیشنهادیه"
                                  required
                                  variant="outlined">
                              </v-textarea>
                            </v-col>
                            <v-col cols="12">
                              <div class="border-bottom border-dashed mb-10 text-400"></div>
                              <v-file-input
                                  color="blue-darken-1"
                                  density="compact"
                                  label="پیوست فایل"
                                  variant="outlined"
                                  multiple
                                  chips
                              ></v-file-input>
                            </v-col>
                          </v-row>

                        </v-container>

                      </div>
                    </div>-->

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
</template>

<script>
import ContentLayout from "@/components/layouts/ContentLayout.vue";
import MilestoneInputCard from "@/components/job/MilestoneInputCard.vue";

export default {
  name: "SubmitJobPage",
  components: {
    MilestoneInputCard,
    ContentLayout,
  },
  data() {
    return {
      loading: false,
      fixed: true,
      // milestones: [{name: 'first'}, {name: 'second'}, {name: 'third'}, {name: 'forth'}]
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
  watch: {
    /*type(newValue, oldValue) {
      console.log("new = " + newValue + ", old = " + oldValue);
    }*/
  }

}
</script>


<style scoped>

</style>