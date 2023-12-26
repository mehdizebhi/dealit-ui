<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <div class="col-12">
            <div class="d-flex mb-4">
              <div class="col">
                <h5 class="mb-0 text-primary position-relative">
                  <span class="bg-200 dark__bg-1100 pe-3">
                    <a href="/" target="_blank">استخدام برنامه نویس جاوا</a>
                  </span>
                  <span class="border position-absolute top-50 translate-middle-y w-100 start-0 z-index--1"></span>
                </h5>
                <p class="mb-0"></p>
              </div>
            </div>
            <div class="card theme-wizard mb-5">
              <div class="card-header bg-light pt-3 pb-2">
                <ul class="nav nav-pills mb-3" role="tablist" id="pill-tab1">
                  <li v-for="(tab, i) in tabs" :key="'tab-' + i.toString()" class="nav-item" role="presentation" @click="activeTab = tab.id">
                    <button :class="{'active': tab.id === activeTab, 'bg-success': tab.id === activeTab}" class="nav-link" type="button" role="tab">
                      <span class="fs--1">{{tab.title}}</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="card-body py-4">
                <div class="tab-content pb-4">
                  <div v-for="(tab, i) in tabs" :key="'pane-' + i.toString()" :class="{'active': tab.id === activeTab}" class="tab-pane px-sm-3 px-md-5" role="tabpanel" :id="tab.id">

                    <div v-show="tab.id === 'view-job-ad'">

                      <div class="card overflow-hidden light mb-3">
                        <div class="card-body bg-black">
                          <div class="bg-holder rounded-3" style="background-image:url(#);"></div>
                          <!--/.bg-holder-->
                          <div class="row">
                            <div class="col-12 position-relative">
                              <div class="row g-3 align-items-center">
                                <div class="col-lg-7">
                                  <h6 class="fw-semi-bold text-400"><a class="text-info" href="../../../app/e-learning/trainer-profile.html">توسعه وب</a></h6>
                                  <h2 class="fw-bold text-white">توسعه دهنده فریمورک اسپرینگ برای یک پروژه بانکی</h2>
                                  <p class="text-white fw-semi-bold fs--1"><span class="me-1">4.9</span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning star-icon"></span><span class="text-info ms-2">(از 25 نظر)</span></p>
                                  <p class="mb-0 fw-medium text-400">
                                    <a class="text-info" href="#"> Java</a>,
                                    <a class="text-info" href="#"> Spring Framework</a>,
                                    <a class="text-info" href="#"> Spring Boot</a>,
                                    <a class="text-info" href="#"> MySQL</a>
                                  </p>
                                </div>
                              </div>
                              <hr class="text-secondary text-opacity-50" />
                              <ul class="list-unstyled d-flex flex-wrap gap-3 fs--1 fw-semi-bold text-300 mt-3 mb-0">
                                <li><span class="fas fa-graduation-cap text-white me-1"> </span>متخصص</li>
                                <li><span class="fas fa-stopwatch text-white me-1"> </span>30 ساعت در هفته</li>
                                <li><span class="fas fa-calendar-alt text-white me-1"> </span>کمتر از 1 ماه</li>
                                <li><span class="fas fa-laptop-code text-white me-1"> </span>دورکاری</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row g-lg-3">
                        <div class="col-12 order-1 order-lg-0">
                          <div class="card mb-3">
                            <div class="card-header bg-light">
                              <div class="d-flex flex-between-center">
                                <h5 class="mb-0 text-truncate">توضیحات شغل</h5>
                              </div>
                            </div>
                            <div class="card-body position-relative">
                              <p>

                                برنامه نویس جاوا سطح  midlevel
                                <br>
                                ·         مسلط به اصول طراحی و مهندسی نرم افزار و برنامه نویسی شئ گرا
                                <br>

                                ·         مسلط به Java Core و Java Enterprise Edition
                                <br>

                                ·         مسلط به spring framework
                                <br>

                                ·         مسلط به فریمورک  Spring boot
                                <br>

                                ·          مسلط به ورژن کنترلر Git
                                <br>

                                ·         مسلط به مفاهیم OOP
                                <br>

                                ·         آشنا به مفاهیم Design Patterns و SOLID
                                <br>

                                ·         مسلط به پایگاه داده Oracle
                                <br>

                                ·         آشنایی با Agile & Scrum
                                <br>

                                ·         مسلط به مفاهیم RESTful API
                                <br>

                                ·         مسلط به Hibernate - JPA
                                <br>

                                ·         توانایی تفکر و مهارت های حل مسئله
                                <br>

                                ·         مسلط به مفاهیم Complex API’s, Restful/SOAP, Web-services
                                <br>

                                ·         مسلط به مفاهیم پایگاه داده‌ی Relational
                                <br>
                                <br>

                                <br>

                                مزایایی همکاری :
                                <br>

                                - حقوق به موقع
                                <br>

                                - پرداخت وام
                                <br>

                                - ساعت کاری شناور
                                <br>

                                - پذیرایی ناهار
                                <br>

                                - بن و پرداختی های مناسبتی
                                <br>

                                - بیمه تکمیلی
                                <br>

                                - ارائه خدمات رفاهی و ورزشی
                                <br>

                                - امکان جذب به صورت امریه
                                <br>
                                <br>



                                معرفی شرکت
                                یک شرکت معتبر نرم افزاری که در ایجاد نرم افزارهای سازمانی مشغول به کار می باشد.
                              </p>
                            </div>
                          </div>
                          <div class="card mb-3">
                            <div class="card-header bg-light">
                              <h5 class="mb-0">سوالات</h5>
                            </div>
                            <div class="card-body position-relative">
                              <div class="bg-holder bg-card d-none d-md-block" style="background-image:url(#);"></div>
                              <!--/.bg-holder-->
                              <ul class="list-unstyled position-relative fs--1 p-0 m-0">
                                <li class="mb-2">
                                  <div class="d-flex"><span class="fas fa-circle me-2 mt-1" data-fa-transform="shrink-8"></span>
                                    <span>آیا تجربه ای مشابه در حوزه بانکی دارید؟</span>
                                  </div>
                                </li>
                                <li class="mb-2">
                                  <div class="d-flex"><span class="fas fa-circle me-2 mt-1" data-fa-transform="shrink-8"></span>
                                    <span>چند سال تجربه با فریمورک اسپرینگ دارید؟ نمونه ای از پروژه هایی که کار کردید را مختصر توضیح دهید.</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="card mb-3">
                            <div class="card-header bg-light">
                              <h5 class="mb-0">الزامات</h5>
                            </div>
                            <div class="card-body position-relative">
                              <div class="bg-holder bg-card d-none d-md-block" style="background-image:url(#);"></div>
                              <!--/.bg-holder-->
                              <ul class="list-unstyled position-relative fs--1 p-0 m-0">
                                <li class="mb-2">
                                  <div class="d-flex"><span class="fas fa-circle me-2 mt-1" data-fa-transform="shrink-8"></span>
                                    <span>بیش از 6 سال سابقه کار</span>
                                  </div>
                                </li>
                                <li class="mb-2">
                                  <div class="d-flex"><span class="fas fa-circle me-2 mt-1" data-fa-transform="shrink-8"></span>
                                    <span>خدمت سربازی</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-show="tab.id === 'invite-freelancer'">
                      <div class="col-12 mb-4">
                        <div class="bg-light">
                          <div class="card-body">
                            <div class="card-title">به زودی</div>
                            <p class="card-text">
                              امکان ارسال دعوتنامه به فریلنسرها در نسخه بعدی قابل دسترس خواهد بود؛ در حال حاضر فقط از فریلنسرهایی که پروپوزال ارسال کردند، میتوانید استخدام کنید.
                              برای این کار به تب بعدی یعنی مشاهده پروپوزال ها بروید.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-show="tab.id === 'view-proposals'">
                      3
                    </div>
                    <div v-show="tab.id === 'hire'">
                      4
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

export default {
  name: "ClientJobAdDetailsPage",
  components: {ContentLayout},
  data() {
    return {
      tabs: [
        {title: 'مشاهده آگهی شغل', id: 'view-job-ad'},
        {title: 'دعوت فریلنسر', id: 'invite-freelancer'},
        {title: 'مشاهده پروپوزال‌ها', id: 'view-proposals'},
        {title: 'استخدام', id: 'hire'}
      ],
      activeTab: 'view-job-ad',
    };
  },
}
</script>

<style scoped>

</style>