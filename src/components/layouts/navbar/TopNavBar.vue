<template>
  <!-- Top Navbar Start -->
  <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand-lg">
    <button
        aria-controls="navbarStandard"
        aria-expanded="false"
        aria-label="Toggle Navigation"
        class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
        data-bs-target="#navbarStandard"
        data-bs-toggle="collapse"
        type="button"
    >
      <span class="navbar-toggle-icon"><span class="toggle-line"></span></span>
    </button>
    <a class="navbar-brand me-1 me-sm-3" href="/home">
      <div class="d-flex align-items-center">
        <img
            alt=""
            class="me-2"
            src="../../../assets/img/icons/spot-illustrations/dealit.png"
            width="40"
        /><span class="font-sans-serif">دیلیت</span>
      </div>
    </a>
    <div id="navbarStandard" class="collapse navbar-collapse scrollbar">
      <ul class="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
        <li class="nav-item">
          <router-link :to="{name: 'home'}" class="nav-link">خانه</router-link>
        </li>
        <li v-if="isFreelancer" class="nav-item dropdown">
          <a id="freelancer"
              aria-expanded="false"
              aria-haspopup="true"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button">فریلنسر</a>
          <div aria-labelledby="freelancer" class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0">
            <div class="bg-white dark__bg-1000 rounded-3 py-2">
              <router-link :to="{name: 'jobs'}" class="dropdown-item link-600 fw-medium">یافتن شغل
                <span class="badge rounded-pill ms-2 badge-soft-success">جستجو</span>
              </router-link>
              <router-link :to="{name: 'saved'}" class="dropdown-item link-600 fw-medium">ذخیره‌ها</router-link>
              <router-link :to="{name: 'proposals'}" class="dropdown-item link-600 fw-medium">پروپوزال‌ها</router-link>
              <router-link :to="{name: 'stats'}" class="dropdown-item link-600 fw-medium">آمار شما</router-link>
              <div class="dropdown-divider"></div>
              <router-link :to="{name: 'your-jobs'}" class="dropdown-item link-600 fw-medium">شغل‌های شما
                <span class="badge rounded-pill ms-2 badge-soft-success">فعال</span>
              </router-link>
              <router-link :to="{name: 'your-contracts'}" class="dropdown-item link-600 fw-medium">قراردادهای شما</router-link>
            </div>
          </div>
        </li>
        <li v-if="isClient" class="nav-item dropdown">
          <a
              id="client"
              aria-expanded="false"
              aria-haspopup="true"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button">کارفرما</a>
          <div aria-labelledby="client" class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0">
            <div class="bg-white dark__bg-1000 rounded-3 py-2">
              <router-link :to="{name: 'newJob'}" class="dropdown-item link-600 fw-medium">ایجاد آگهی
                <span class="badge rounded-pill ms-2 badge-soft-info">جدید</span>
              </router-link>
              <a v-if="false" class="dropdown-item link-600 fw-medium" href="dashboard/analytics.html">یافتن فریلنسر
                <span class="badge rounded-pill ms-2 badge-soft-success">جستجو</span>
              </a>
              <router-link class="dropdown-item link-600 fw-medium" :to="{name: 'job-ads'}">آگهی‌های شما</router-link>
              <router-link class="dropdown-item link-600 fw-medium" :to="{name: 'project-space'}">پروژه‌ها</router-link>
              <router-link :to="{name: 'client-stats'}" class="dropdown-item link-600 fw-medium">آمار شما</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item link-600 fw-medium" :to="{name: 'job-positions'}">همه شغل‌ها</router-link>
              <router-link class="dropdown-item link-600 fw-medium" :to="{name: 'client-contracts'}">همه قراردادها</router-link>
            </div>
          </div>
        </li>
        <li v-if="isClient || isFreelancer" class="nav-item dropdown">
          <a
              id="reports"
              aria-expanded="false"
              aria-haspopup="true"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
          >گزارشات</a
          >
          <div aria-labelledby="reports" class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0">
            <div class="bg-white dark__bg-1000 rounded-3 py-2">
              <a v-if="false" class="dropdown-item link-600 fw-medium" href="/">بررسی اجمالی</a>
              <a v-if="false" class="dropdown-item link-600 fw-medium" href="/">گزارشات من</a>
              <router-link class="dropdown-item link-600 fw-medium" :to="{name: 'connections-history'}">تاریخچه کانکشن</router-link>
              <router-link :to="{name: 'transactions'}" class="dropdown-item link-600 fw-medium">تاریخچه تراکنشات</router-link>
            </div>
          </div>
        </li>
        <li v-if="false" class="nav-item dropdown">
          <a
              id="admin"
              aria-expanded="false"
              aria-haspopup="true"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
          >ادمین</a>
          <div aria-labelledby="admin" class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0">
            <div class="bg-white dark__bg-1000 rounded-3 py-2">
              <a class="dropdown-item link-600 fw-medium" href="/">تسویه حساب</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
      <li class="nav-item">
        <ToggleThemeBtn />
      </li>
      <li class="nav-item">
        <router-link
            :to="{name: 'chat'}"
            class="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
        ><span
            class="fas fa-paper-plane"
            data-fa-transform="shrink-7"
            style="font-size: 33px"
        ></span
        ><span class="notification-indicator-number">9</span></router-link
        >
      </li>
      <li class="nav-item dropdown">
        <a
            id="navbarDropdownNotification"
            aria-expanded="false"
            aria-haspopup="true"
            class="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
            data-bs-toggle="dropdown"
            data-hide-on-body-scroll="data-hide-on-body-scroll"
            role="button"
        ><span
            class="fas fa-bell"
            data-fa-transform="shrink-6"
            style="font-size: 33px"
        ></span
        ></a>
        <div aria-labelledby="navbarDropdownNotification" class="dropdown-menu dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg">
          <div class="card shadow-none">
            <div class="card-header =">
              <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                  <h6 class="card-header-title mb-0">اعلان ها</h6>
                </div>
                <div class="col-auto ps-0 ps-sm-3">
                  <a class="card-link fw-normal" href="#">علامت زدن به عنوان خوانده شده</a>
                </div>
              </div>
            </div>
            <div class="scrollbar-overlay" style="max-height: 19rem">
              <div class="scrollbar-overlay list-group list-group-flush fw-normal fs--1">
                <div class="list-group-title border-bottom">آخرین</div>

                <div class="list-group-item">
                  <a
                      class="notification notification-flush notification-unread"
                      href="#!"
                  >
                    <div class="notification-body ps-1">
                      <p class="mb-1">
                        <strong>دعوتنامه جدیدی برای شما ارسال شده است.</strong>
                      </p>
                      <span class="notification-time">
                        <span class="me-2 fas fa-circle text-danger"></span>
                        9 ساعت پیش
                      </span>
                    </div>
                  </a>
                </div>

              </div>
            </div>
            <div class="card-footer text-center border-top">
              <a class="card-link d-block" href="/notifications"
              >مشاهده همه</a
              >
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item dropdown px-1">
        <a
            id="navbarDropdownMenu"
            aria-expanded="false"
            aria-haspopup="true"
            class="nav-link fa-icon-wait nine-dots p-1"
            data-bs-toggle="dropdown"
            data-hide-on-body-scroll="data-hide-on-body-scroll"
            role="button"
        >
          <svg
              fill="none"
              height="43"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2" fill="#6C6E71" r="2"></circle>
            <circle cx="2" cy="8" fill="#6C6E71" r="2"></circle>
            <circle cx="2" cy="14" fill="#6C6E71" r="2"></circle>
            <circle cx="8" cy="8" fill="#6C6E71" r="2"></circle>
            <circle cx="8" cy="14" fill="#6C6E71" r="2"></circle>
            <circle cx="14" cy="8" fill="#6C6E71" r="2"></circle>
            <circle cx="14" cy="14" fill="#6C6E71" r="2"></circle>
            <circle cx="8" cy="2" fill="#6C6E71" r="2"></circle>
            <circle cx="14" cy="2" fill="#6C6E71" r="2"></circle>
          </svg
          >
        </a>
        <div
            aria-labelledby="navbarDropdownMenu"
            class="dropdown-menu dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
        >
          <div class="card shadow-none">
            <div class="scrollbar-overlay nine-dots-dropdown">
              <div class="card-body px-3">
                <div class="row text-center gx-0 gy-0">

                  <div class="col-4" v-if="false">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="pages/user/profile.html"
                    >
                      <div class="avatar avatar-2xl">
                        <img
                            alt=""
                            class="rounded"
                            src="../../../assets/img/icons/social.png"
                        />
                      </div>
                      <p class="mb-0 fw-medium text-800 text-truncate fs--2">
                        شبکه
                      </p>
                    </a>
                  </div>
                  <div class="col-4" v-if="false">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="pages/user/profile.html"
                    >
                      <div class="avatar avatar-2xl">
                        <img
                            alt=""
                            class="rounded-circle"
                            src="../../../assets/img/icons/3d-stopwatch.png"
                        />
                      </div>
                      <p class="mb-0 fw-medium text-800 text-truncate fs--2">
                        تایم ترکر
                      </p>
                    </a>
                  </div>
                  <div class="col-4" v-if="false">
                    <a

                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="/app/calendar"
                    ><img
                        alt=""
                        class="rounded"
                        height="40"
                        src="../../../assets/img/icons/3d-calendar.png"
                        width="40"
                    />
                      <p
                          class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1"
                      >
                        تقویم
                      </p>
                    </a>
                  </div>
                  <div class="col-4">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                    ><img
                        alt=""
                        class="rounded"
                        height="40"
                        src="../../../assets/img/icons/3d-wallet.png"
                        width="40"
                    />
                      <p
                          class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1"
                      >
                        کیف پول
                      </p>
                    </a>
                  </div>
                  <div class="col-4">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"

                    ><img
                        alt=""
                        class="rounded"
                        height="40"
                        src="../../../assets/img/icons/3d-folder.png"
                        width="40"
                    />
                      <p
                          class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1"
                      >
                        مدیریت فایل
                      </p>
                    </a>
                  </div>
                  <div class="col-4" v-if="false">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"

                    ><img
                        alt=""
                        class="rounded"
                        height="40"
                        src="../../../assets/img/icons/3d-notes.png"
                        width="40"
                    />
                      <p
                          class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1"
                      >
                        یادداشت‌ها
                      </p>
                    </a>
                  </div>
                  <div class="col-4" v-if="false">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="https://mailbluster.com/"
                    ><img
                        alt=""
                        class="rounded"
                        height="40"
                        src="../../../assets/img/icons/video-calling-app.png"
                        width="40"
                    />
                      <p
                          class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1"
                      >
                        جلسات
                      </p>
                    </a>
                  </div>
                  <div class="col-4" v-if="false">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                    ><img
                        alt=""
                        class="rounded"
                        height="40"
                        src="../../../assets/img/icons/vip.png"
                        width="40"
                    />
                      <p
                          class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1"
                      >
                        پریمیوم
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a
            id="navbarDropdownUser"
            aria-expanded="false"
            aria-haspopup="true"
            class="nav-link pe-0 ps-2"
            data-bs-toggle="dropdown"
            role="button"
        >
          <div class="avatar avatar-xl">
            <img
                alt=""
                class="rounded-circle"
                :src="pictureHref"
            />
          </div>
        </a>
        <div
            aria-labelledby="navbarDropdownUser"
            class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
        >
          <div class="bg-white dark__bg-1000 rounded-2 py-2">
            <router-link class="dropdown-item fw-bold text-warning" :to="{name: 'connections-history'}">
              <span class="fas fa-coins me-1"></span>
              <span>کانکشن:
              {{ connections }}
              </span>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link :to="{name: 'wallet'}" class="dropdown-item">کیف پول</router-link>
            <router-link :to="{name: 'profile'}" class="dropdown-item">پروفایل</router-link>
            <div class="dropdown-divider"></div>
            <router-link :to="{name: 'setting'}" class="dropdown-item">تنظیمات</router-link>
            <button @click="onLogout" class="dropdown-item">خروج</button>
          </div>
        </div>
      </li>
    </ul>
    <v-progress-linear
        :absolute="true"
        :active="loading"
        :height="5"
        :indeterminate="true"
        color="primary"
        rounded
    ></v-progress-linear>
  </nav>
  <!-- Top Navbar End -->
</template>

<script>
import { mapGetters } from "vuex";
import ToggleThemeBtn from "@/components/button/ToggleThemeBtn.vue";

export default {
  name: "TopNavBar",
  components: {ToggleThemeBtn},
  data() {
    return {
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    ...mapGetters(["connections", "pictureHref", "isClient", "isFreelancer"])
  },
  methods: {
    isContainsType(type) {
      return this.accountInfo.types.includes(type.toUpperCase());
    },
    async onLogout() {
      await this.$store.reset();
      this.$router.push({name: 'logout'});
    },
  },
}
</script>



<style>
</style>