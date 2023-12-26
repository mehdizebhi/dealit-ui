<template>
  <div class="col-12">
    <div class="d-flex mb-4">
<!--      <div class="col">
        <h5 class="mb-0 text-primary position-relative">
          <span class="bg-200 dark__bg-1100 pe-3">ارسال پروپوزال</span>
          <span class="border position-absolute top-50 translate-middle-y w-100 start-0 z-index&#45;&#45;1"></span>
        </h5>
        <p class="mb-0">با پر کردن فرم زیر فرآیند ارسال پروپوزال را تکمیل کنید.</p>
      </div>-->
    </div>
    <div class="card theme-wizard mb-5 window-stepper">
      <div class="card-header bg-light pt-3 pb-2">
        <ul class="nav justify-content-between nav-wizard">
          <li class="nav-item">
            <span :class="{'active': step === 1, 'done': step > 1}" class="nav-link fw-semi-bold">
                      <span class="nav-item-circle-parent">
                        <span class="nav-item-circle">
                          <span class="fas fa-list stepper-icon"></span>
                        </span>
                      </span>
              <span class="d-none d-md-block mt-1 fs--1">جزئیات شغل</span>
            </span>
          </li>
          <li class="nav-item">
            <span :class="{'active': step === 2, 'done': step > 2}" class="nav-link fw-semi-bold">
                      <span class="nav-item-circle-parent">
                        <span class="nav-item-circle">
                          <span class="fas fa-user stepper-icon"></span>
                        </span>
                      </span>
              <span class="d-none d-md-block mt-1 fs--1">جزئیات شخصی</span>
            </span>
          </li>
          <li class="nav-item">
            <span :class="{'active': step === 3, 'done': step > 3}" class="nav-link fw-semi-bold">
                      <span class="nav-item-circle-parent">
                        <span class="nav-item-circle">
                          <span class="fas fa-handshake stepper-icon"></span>
                        </span>
                      </span>
              <span class="d-none d-md-block mt-1 fs--1">قرارداد</span>
            </span>
          </li>
          <li class="nav-item">
            <span :class="{'active': step === 4, 'done': step > 4}" class="nav-link fw-semi-bold">
                      <span class="nav-item-circle-parent">
                        <span class="nav-item-circle">
                          <span class="fas fa-file-contract stepper-icon"></span>
                        </span>
                      </span>
              <span class="d-none d-md-block mt-1 fs--1">پیشنهادیه</span>
            </span>
          </li>
          <li class="nav-item">
            <span :class="{'active': step === 5, 'done': step > 5}" class="nav-link fw-semi-bold">
                      <span class="nav-item-circle-parent">
                        <span class="nav-item-circle">
                          <span class="fas fa-paper-plane stepper-icon"></span>
                        </span>
                      </span>
              <span class="d-none d-md-block mt-1 fs--1">ارسال</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="card-body py-4 scrollbar scrollbar-overlay">
        <div class="tab-content">
          <div :class="{'active': step === 1}" class="tab-pane px-sm-3 px-md-5" role="tabpanel">
            <div class="mb-3">
              <div class="bg-holder d-none d-lg-block bg-card"></div>
              <div class="card-body position-relative">
                <div class="row">
                  <div class="col-12">
                    <h4>
                      <a href="/jobs/2" target="_blank">برنامه نویس جاوا</a>
                    </h4>
                    <p class="mt-2">
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
                    <a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">
                      Java
                    </a>
                    <a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">
                      Spring Boot
                    </a>
                    <a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">
                      MySQL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="{'active': step === 2}" class="tab-pane px-sm-3 px-md-5" role="tabpanel">
            <form class="">
              <div class="mb-5">
                <label class="form-check-label" for="project-length">در چه بازه زمانی توانایی انجام کار دارید؟</label>
                <select id="project-length" class="form-select" aria-label="Default select example">
                  <option selected="">بازه زمانی پیشنهادی</option>
                  <option value="1">کمتر از یک ماه</option>
                  <option value="2">بین یک الی سه ماه</option>
                  <option value="3">بین سه الی شش ماه</option>
                  <option value="3">بیشتر از شش ماه</option>
                </select>
              </div>
              <div v-if="fixedPrice">
                <h6 class="text-700">
                  علاقه دارید پرداختی به چه صورت باشد؟
                </h6>
                <div class="form-check">
                  <input class="form-check-input" v-model="fixedPriceJobForm.type" value="byMilestone" id="flexRadioDefault2" type="radio" name="projectType" checked="" />
                  <label class="form-check-label" for="flexRadioDefault2">مرحله ای</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" v-model="fixedPriceJobForm.type" value="byProject" id="flexRadioDefault1" type="radio" name="projectType" />
                  <label class="form-check-label" for="flexRadioDefault1">کل پروژه</label>
                </div>
              </div>
            </form>
            <div class="col-12 mt-4">
              <div class="bg-light">
                <div class="card-body">
                  <div class="card-title">توجه</div>
                  <p class="card-text">
                    پروژه‌های ساعتی نیازی به تعیین نوع پرداختی ندارند چرا که بر اساس مجموع ساعت در هفته پرداختی صورت میگیرد؛ درحالی که پروژه‌های قیمت ثابت نیاز دارند که نوع پرداختی را تعیین کنند. بنابراین باید مرحله های پروژه را تعیین کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div :class="{'active': step === 3}" class="tab-pane px-sm-3 px-md-5" role="tabpanel">
            <div class="col-12 mb-4">
              <div class="bg-light">
                <div class="card-body">
                  <div class="card-title">توجه</div>
                  <p class="card-text">
                    لازم است توجه کنید مبلغ پیشنهادی شما شامل کارمزد نیز خواهد بود که در زمان پرداخت میزان کارمزد از آن کم میشود.
                  </p>
                  <span>درصد کارمزد : 10%</span>
                </div>
              </div>
            </div>
            <div v-if="fixedPrice">
              <div v-show="fixedPriceJobForm.type === 'byMilestone'">
                <MilestoneInputCard v-for="(milestone, index) in fixedPriceJobForm.milestones"
                                    :key="index"
                                    :data="milestone"
                                    :milestone-stage="String(index + 1)"
                                    @delete="handleDeleteMilestone(milestone)"/>
                <button class="btn btn-falcon-default btn-sm mb-2 mx-4" type="button" @click="addNewMilestone">
                    <span class="fas fa-plus fs--2 me-1" data-fa-transform="up-1">
                    </span>اضافه کردن مرحله
                </button>
              </div>
              <div v-show="fixedPriceJobForm.type === 'byProject'">
                <v-row>
                  <v-col cols="12">
                    <div class="mb-3">
                      <label class="form-label" for="description">توضیحات مختصر:</label>
                      <input id="description" class="form-control" type="text" placeholder="شرح کوتاه از روند کار" />
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <label class="form-label" for="total-price">مبلغ موردنظر:</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <input id="total-price" class="form-control" type="number" step="100000" placeholder="مبلغ مورد انتظار برای پایان پروژه" />
                      <span class="input-group-text">تومان</span>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
            <div v-else>
              <v-row>
                <v-col cols="12">
                  <label class="form-label" for="total-price">مبلغ بر ساعت:</label>
                  <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input id="total-price" class="form-control" type="number" step="100000" placeholder="مبلغ مورد انتظار برای هر ساعت را وارد کنید" />
                    <span class="input-group-text">تومان</span>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
          <div :class="{'active': step === 4}" class="tab-pane px-sm-3 px-md-5 " role="tabpanel">
            <form>
              <div class="mb-5">
                <label class="form-label" for="proposal">پیشنهادیه</label>
                <textarea class="form-control" rows="8" id="proposal" placeholder="متن پیشنهاد خود را اینجا وارد کنید؛ برای مثال توانایی ها و این که چرا برای این شغل مناسب هستید را توضیح دهید."></textarea>
              </div>
              <div class="mb-3">
                <v-file-input
                    chips
                    label="پیوست فایل: تصویر، ویدیو، داکیومنت"
                    multiple
                    variant="outlined"
                ></v-file-input>
              </div>
            </form>
          </div>
          <div :class="{'active': step === 5}" class="tab-pane text-center px-sm-3 px-md-5" role="tabpanel">
            <div class="">
              <div class="lottie wizard-lottie mx-auto my-3" style="width: 220px; height: 220px" data-options='{"path":"../../assets/img/animated-icons/handshake.json"}'></div>
            </div>
            <h4 class="mb-1">پروپوزال ارسال شد</h4>
            <p>باید منتظر پاسخ از سمت کارفرما باشید</p><a class="btn btn-primary px-5 my-3" href="/">نمایش پروپوزال</a>
          </div>
        </div>
      </div>
      <div class="card-footer bg-light">
        <div class="px-sm-3 px-md-5">
          <ul class="pager wizard list-inline mb-0">
            <li class="previous">
              <button v-show="step > startStep && step < endStep" class="btn btn-link ps-0" type="button" @click="onPrevious">
                <span class="fas fa-chevron-right me-2" data-fa-transform="shrink-3"></span>
                قبلی
              </button>
            </li>
            <li class="next">
              <button v-show="step < endStep" class="btn btn-primary px-5 px-sm-6 text-light" type="submit" @click="onNext">
                {{ nextBtnText }}
                <span class="fas fa-chevron-left ms-2" data-fa-transform="shrink-3"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
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

<script>
import MilestoneInputCard from "@/components/job/MilestoneInputCard.vue";

export default {
  name: "ProposalSubmitWizardForm",
  components: {MilestoneInputCard},
  props: {

  },
  data() {
    return {
      activeStep: 1,
      steps: 5,
      step: 1,
      startStep: 1,
      endStep: 5,
      snackbar: false,
      snackbarText: '',
      fixedPriceJobForm: {
        type: 'byMilestone',
        milestones: [{}],
        duration: '',
        description: '',
        rate: 0,
        proposal: '',
        files: []
      },
      hourlyPriceJobForm: {
        duration: '',
        rate: 0,
        proposal: '',
        files: []
      },
      fixedPrice: false,
    };
  },
  methods: {
    onNext() {
      if (this.step < this.endStep){
        switch (this.step) {
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          default:
            break;
        }
        this.step += 1;
      }
    },
    onPrevious() {
      if (this.step > this.startStep && this.step < this.endStep){
        this.step -= 1;
      }
    },
    handleDeleteMilestone(milestone) {
      if (this.fixedPriceJobForm.milestones.length > 1) {
        this.fixedPriceJobForm.milestones = this.fixedPriceJobForm.milestones.filter(m => m !== milestone);
      } else {
        this.snackbar = true;
        this.snackbarText = "حداقل یک مرحله را باید تعیین کنید.";
      }
    },
    addNewMilestone() {
      this.fixedPriceJobForm.milestones.push({});
    },
  },
  computed: {
    isActive(step) {
      return this.step === step;
    },
    nextBtnText() {
      if (this.step === this.endStep - 1) {
        return 'ارسال';
      }
      return 'بعدی';
    }
  }
}
</script>

<style scoped>

.stepper-icon {
  height: 2em !important;
}
.window-stepper {
  height: 35rem;
  overflow: auto !important;
}
</style>