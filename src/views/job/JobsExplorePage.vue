<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <!--Start Content Layout-->
            <div class="row g-3">
              <div class="col-xxl-2 col-xl-3">
                <aside
                    class="scrollbar-overlay font-sans-serif p-4 p-xl-3 ps-xl-0 offcanvas offcanvas-start offcanvas-filter-sidebar"
                    tabindex="-1" id="filterOffcanvas" aria-labelledby="filterOffcanvasLabel">
                  <div class="d-flex flex-between-center">
                    <div class="d-flex gap-2 flex-xl-grow-1 align-items-center justify-content-xl-between">
                      <h5 class="mb-0 text-700 d-flex align-items-center" id="filterOffcanvasLabel"><span
                          class="fas fa-filter fs--1 me-1"></span><span>فیلتر</span></h5>
                      <button class="btn btn-sm btn-outline-secondary">پاک کردن</button>
                    </div>
                    <button class="btn-close text-reset d-xl-none shadow-none" type="button" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                  </div>
                  <div class="d-flex gap-2 flex-wrap my-3">
                <span class="badge bg-300 text-600 py-0">ساعتی
                  <button class="btn btn-link btn-sm p-0 text-600 ms-1"><span
                      class="fas fa-times fs--2"></span></button>
                </span>
                  </div>
                  <ul class="list-unstyled">
                    <li class="border-bottom"><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3"
                                                 data-bs-toggle="collapse" href="#category-collapse"
                                                 aria-controls="category-collapse" aria-expanded="true">نوع شغل</a>
                      <div class="collapse show" id="category-collapse">
                        <ul class="list-unstyled">
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-category-free"><span
                                class="fas fa-file-alt fs--1 me-3"></span>ساعتی</label><input class="form-check-input"
                                                                                              type="checkbox"
                                                                                              checked="checked"
                                                                                              name="free"
                                                                                              id="filter-category-free"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-category-paid"><span
                                class="fas fa-file-invoice-dollar fs--1 me-3"></span>قیمت ثابت</label><input
                                class="form-check-input" type="checkbox" name="paid" id="filter-category-paid"/></div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="border-bottom"><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3"
                                                 data-bs-toggle="collapse" href="#subject-collapse"
                                                 aria-controls="subject-collapse" aria-expanded="false">دسته‌بندی</a>
                      <div class="collapse" id="subject-collapse">
                        <ul class="list-unstyled">
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-subject-design"><span
                                class="fas fa-brush fs--1 me-3"></span>طراحی</label><input class="form-check-input"
                                                                                           type="checkbox"
                                                                                           checked="checked"
                                                                                           name="design"
                                                                                           id="filter-subject-design"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-subject-web-development"><span
                                class="fas fa-globe fs--1 me-3"></span>توسعه وب</label><input
                                class="form-check-input" type="checkbox" name="web-development"
                                id="filter-subject-web-development"/></div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-subject-software"><span
                                class="fas fa-code fs--1 me-3"></span>نرم افزار</label><input class="form-check-input"
                                                                                              type="checkbox"
                                                                                              name="software"
                                                                                              id="filter-subject-software"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-subject-marketing"><span
                                class="fas fa-comment-dollar fs--1 me-3"></span>علم داده</label><input
                                class="form-check-input" type="checkbox" name="marketing"
                                id="filter-subject-marketing"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-subject-self-help"><span
                                class="fas fa-hand-holding-water fs--1 me-3"></span>یادگیری ماشین</label><input
                                class="form-check-input" type="checkbox" name="self-help"
                                id="filter-subject-self-help"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-subject-photography"><span
                                class="fas fa-camera-retro fs--1 me-3"></span>دواپس</label><input
                                class="form-check-input" type="checkbox" name="photography"
                                id="filter-subject-photography"/></div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-subject-miscellaneous"><span
                                class="fas fa-thumbtack fs--1 me-3"></span>امنیت</label><input
                                class="form-check-input" type="checkbox" name="miscellaneous"
                                id="filter-subject-miscellaneous"/></div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-subject-teaching"><span
                                class="fas fa-book fs--1 me-3"></span>آموزش</label><input class="form-check-input"
                                                                                          type="checkbox"
                                                                                          name="teaching"
                                                                                          id="filter-subject-teaching"/>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="border-bottom"><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3"
                                                 data-bs-toggle="collapse" href="#rating-collapse"
                                                 aria-controls="rating-collapse" aria-expanded="false">رتبه بندی</a>
                      <div class="collapse" id="rating-collapse">
                        <ul class="list-unstyled">
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-4.5-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>بالاتر 4.5</label><input class="form-check-input"
                                                                                               type="radio"
                                                                                               name="rating"
                                                                                               id="filter-rating-4.5-&amp;-up"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-4.0-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>4.0 تا 4.5</label><input class="form-check-input"
                                                                                               type="radio"
                                                                                               name="rating"
                                                                                               id="filter-rating-4.0-&amp;-up"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-3.5-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>3.5 تا 4.0</label><input class="form-check-input"
                                                                                               type="radio"
                                                                                               name="rating"
                                                                                               id="filter-rating-3.5-&amp;-up"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-3.0-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>3.0 تا 3.5</label><input class="form-check-input"
                                                                                               type="radio"
                                                                                               name="rating"
                                                                                               id="filter-rating-3.0-&amp;-up"/>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="border-bottom"><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3"
                                                 data-bs-toggle="collapse" href="#submit-range-collapse"
                                                 aria-controls="submit-range-collapse" aria-expanded="false">محدوده
                      سابمیت</a>
                      <div class="collapse" id="submit-range-collapse">
                        <ul class="list-unstyled">
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-4.5-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>بیشتر از 50</label><input class="form-check-input"
                                                                                                type="radio"
                                                                                                name="rating"
                                                                                                id="filter-rating-4.5-&amp;-up"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-4.0-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>بین 20 تا 50</label><input
                                class="form-check-input"
                                type="radio" name="rating"
                                id="filter-rating-4.0-&amp;-up"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-3.5-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>بین 15 تا 20</label><input
                                class="form-check-input"
                                type="radio" name="rating"
                                id="filter-rating-3.5-&amp;-up"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-3.0-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>بین 10 تا 15</label><input
                                class="form-check-input"
                                type="radio" name="rating"
                                id="filter-rating-3.0-&amp;-up"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-3.0-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>بین 5 تا 10</label><input class="form-check-input"
                                                                                                type="radio"
                                                                                                name="rating"
                                                                                                id="filter-rating-3.0-&amp;-up"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-rating-3.0-&amp;-up"><span
                                class="fas fa-star fs--1 me-3"></span>کمتر از 5</label><input class="form-check-input"
                                                                                              type="radio" name="rating"
                                                                                              id="filter-rating-3.0-&amp;-up"/>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="border-bottom"><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3"
                                                 data-bs-toggle="collapse" href="#proficiency-collapse"
                                                 aria-controls="proficiency-collapse" aria-expanded="false">سطح
                      تجربه</a>
                      <div class="collapse" id="proficiency-collapse">
                        <ul class="list-unstyled">
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-proficiency-beginner"><img class="me-3"
                                                                       src="#"
                                                                       width="13"
                                                                       alt=""/>تازه
                              کار</label><input
                                class="form-check-input" type="checkbox" name="beginner"
                                id="filter-proficiency-beginner"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-proficiency-intermediate"><img
                                class="me-3" src="#" width="13" alt=""/>متوسط</label><input class="form-check-input"
                                                                                            type="checkbox"
                                                                                            name="intermediate"
                                                                                            id="filter-proficiency-intermediate"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-proficiency-professional"><img
                                class="me-3" src="#" width="13" alt=""/>متخصص</label><input class="form-check-input"
                                                                                            type="checkbox"
                                                                                            name="professional"
                                                                                            id="filter-proficiency-professional"/>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="border-bottom"><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3"
                                                 data-bs-toggle="collapse" href="#language-collapse"
                                                 aria-controls="language-collapse" aria-expanded="false">بار هفتگی</a>
                      <div class="collapse" id="language-collapse">
                        <ul class="list-unstyled">
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-language-english">کمتر از 30 ساعت</label><input
                                class="form-check-input" type="checkbox" checked="checked" name="english"
                                id="filter-language-english"/></div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-language-spanish">30 تا 40
                              ساعت</label><input
                                class="form-check-input" type="checkbox" name="spanish" id="filter-language-spanish"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-language-french">بیشتر از 40 ساعت</label><input
                                class="form-check-input" type="checkbox" name="french" id="filter-language-french"/>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3"
                           data-bs-toggle="collapse"
                           href="#enrolled-courses-collapse" aria-controls="enrolled-courses-collapse"
                           aria-expanded="false">طول پروژه</a>
                      <div class="collapse" id="enrolled-courses-collapse">
                        <ul class="list-unstyled">
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-language-english">کمتر از 1
                              ماه</label><input
                                class="form-check-input" type="checkbox" checked="checked" name="english"
                                id="filter-language-english"/></div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-language-spanish">1 الی 3
                              ماه</label><input
                                class="form-check-input" type="checkbox" name="spanish" id="filter-language-spanish"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-language-french">3 الی 6
                              ماه</label><input
                                class="form-check-input" type="checkbox" name="french" id="filter-language-french"/>
                            </div>
                          </li>
                          <li>
                            <div class="form-check d-flex ps-0"><label
                                class="form-check-label fs--1 flex-1 text-truncate"
                                for="filter-language-french">بیشتر از 6
                              ماه</label><input
                                class="form-check-input" type="checkbox" name="french" id="filter-language-french"/>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </aside>
              </div>
              <div class="col-xxl-10 col-xl-9">
                <div class="card mb-3">
                  <div class="card-header position-relative">
                    <h5 class="mb-0 mt-1">همه آگهی‌ها</h5>
                    <div class="bg-holder d-none d-md-block bg-card"
                         style="background-image:url(../../../assets/img/illustrations/corner-6.png);"></div>
                    <!--/.bg-holder-->
                  </div>
                  <div class="card-body pt-0 pt-md-3">
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-xl-none">
                        <button class="btn btn-sm p-0 btn-link position-relative" type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#filterOffcanvas" aria-controls="filterOffcanvas"><span
                            class="fas fa-filter fs-0 text-700"></span></button>
                      </div>
                      <div class="col">
                        <form class="position-relative"><input
                            class="form-control form-control-sm search-input lh-1 rounded-2 ps-4" type="search"
                            placeholder="جستجو شغل..." aria-label="Search"/>
                          <div class="position-absolute top-50 start-0 translate-middle-y ms-2"><span
                              class="fas fa-search text-400 fs--1"></span></div>
                        </form>
                      </div>
                      <div class="col position-sm-relative position-absolute top-0 end-0 me-3 me-sm-0 p-0">
                        <div class="row g-0 g-md-3 justify-content-end">
                          <div class="col-auto">
                            <form class="row gx-2">
                              <div class="col-auto d-none d-lg-block"><small class="fw-semi-bold">مرتب سازی:</small>
                              </div>
                              <div class="col-auto"><select class="form-select form-select-sm"
                                                            aria-label="Bulk actions">
                                <option value="rating">ارزان ترین</option>
                                <option value="review">گران ترین</option>
                                <option value="price">بیشترین امتیاز</option>
                              </select></div>
                            </form>
                          </div>
                          <div class="col-auto">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <JobAdCard />
                <JobAdCard />
                <JobAdCard />
                <JobAdCard />
                <JobAdCard />
                <JobAdCard />
                <JobAdCard />
                <JobAdCard />
                <JobAdCard />
                <JobAdCard />

                <div class="card">
                  <v-pagination
                      v-model="page"
                      :length="4"
                      rounded="circle"
                  ></v-pagination>
                </div>
              </div>
            </div>
          <!--End Content Layout-->
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
import JobAdCard from "@/components/job/JobAdCard.vue";

export default {
  name: "JobsExplorePage",
  components: {
    JobAdCard,
    ContentLayout,
  },
  data() {
    return {
      token: "",
    };
  },
  methods: {},
  mounted() {
    this.token = this.$cookies.get("token");
  },
};
</script>


<style>
</style>
  