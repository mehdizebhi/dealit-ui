<template>
  <!-- Top Navbar Start -->
  <nav
      class="navbar navbar-light navbar-glass navbar-top navbar-expand-lg"

  >
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
            src="../../../assets/img/icons/spot-illustrations/falcon.png"
            width="40"
        /><span class="font-sans-serif">دیلیت</span>
      </div>
    </a>
    <div id="navbarStandard" class="collapse navbar-collapse scrollbar">
      <ul class="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
        <li class="nav-item">
          <router-link
              id="home"
              :to="{name: 'home'}"
              class="nav-link"
          >خانه
          </router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
              id="dashboards"
              aria-expanded="false"
              aria-haspopup="true"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
          >فریلنسر</a
          >
          <div
              aria-labelledby="dashboards"
              class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
          >
            <div class="bg-white dark__bg-1000 rounded-3 py-2">
              <router-link :to="{name: 'jobs'}" class="dropdown-item link-600 fw-medium"
              >یافتن شغل
                <span class="badge rounded-pill ms-2 badge-soft-success">جستجو</span>
              </router-link>
              <router-link
                  :to="{name: 'saved'}"
                  class="dropdown-item link-600 fw-medium"
              >ذخیره‌ها
              </router-link
              >
              <router-link :to="{name: 'proposals'}" class="dropdown-item link-600 fw-medium">پروپوزال‌ها</router-link>
              <router-link :to="{name: 'stats'}" class="dropdown-item link-600 fw-medium">آمار شما</router-link>
              <router-link :to="{name: 'profile'}" class="dropdown-item link-600 fw-medium">پروفایل عمومی</router-link>
              <a
                  class="dropdown-item link-600 fw-medium"
                  href="dashboard/lms.html"
              >پروژه‌های شخصی</a
              >

              <div class="dropdown-divider"></div>

              <router-link :to="{name: 'your-jobs'}" class="dropdown-item link-600 fw-medium">شغل‌های شما</router-link>
              <router-link
                  :to="{name: 'your-contracts'}"
                  class="dropdown-item link-600 fw-medium"
              >قراردادهای شما
              </router-link
              >
              <a
                  class="dropdown-item link-600 fw-medium"
                  href="dashboard/crm.html"
              >تاریخچه کاری</a
              >
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
              id="apps"
              aria-expanded="false"
              aria-haspopup="true"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
          >کارفرما</a
          >
          <div
              aria-labelledby="apps"
              class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
          >
            <div class="bg-white dark__bg-1000 rounded-3 py-2">
              <router-link :to="{name: 'newJob'}" class="dropdown-item link-600 fw-medium"
              >آگهی جدید
                <span class="badge rounded-pill ms-2 badge-soft-info">ساخت</span>
              </router-link
              >
              <a
                  class="dropdown-item link-600 fw-medium"
                  href="dashboard/analytics.html"
              >یافتن فریلنسر
                <span class="badge rounded-pill ms-2 badge-soft-success">جستجو</span>
              </a
              ><a
                class="dropdown-item link-600 fw-medium"
                href="dashboard/analytics.html"
            >آگهی‌های شما</a
            ><a
                class="dropdown-item link-600 fw-medium"
                href="dashboard/analytics.html"
            >پروپوزال‌های دریافتی</a
            >
              <a
                  class="dropdown-item link-600 fw-medium"
                  href="dashboard/analytics.html"
              >دعوتنامه‌ها</a
              >
              <a
                  class="dropdown-item link-600 fw-medium"
                  href="dashboard/analytics.html"
              >پروژه‌ها</a
              >
              <router-link :to="{name: 'client-stats'}" class="dropdown-item link-600 fw-medium">آمار شما</router-link>
              <div class="dropdown-divider"></div>
              <a
                  class="dropdown-item link-600 fw-medium"
                  href="dashboard/crm.html"
              >همه شغل‌ها</a
              ><a
                class="dropdown-item link-600 fw-medium"
                href="dashboard/e-commerce.html"
            >همه قراردادها</a
            ><a
                class="dropdown-item link-600 fw-medium"
                href="dashboard/lms.html"
            >تاریخچه استخدامی</a
            >
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
              id="pagess"
              aria-expanded="false"
              aria-haspopup="true"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
          >گزارشات</a
          >
          <div
              aria-labelledby="pagess"
              class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
          >
            <div class="bg-white dark__bg-1000 rounded-3 py-2">
              <a class="dropdown-item link-600 fw-medium" href="index.html"
              >بررسی اجمالی</a
              ><a
                class="dropdown-item link-600 fw-medium"
                href="dashboard/analytics.html"
            >گزارشات من</a
            ><a
                class="dropdown-item link-600 fw-medium"
                href="dashboard/crm.html"
            >صورتحساب و درآمد</a
            ><a
                class="dropdown-item link-600 fw-medium"
                href="dashboard/e-commerce.html"
            >تاریخچه کانکشن</a
            >
              <router-link
                  :to="{name: 'transactions'}"
                  class="dropdown-item link-600 fw-medium"
              >تاریخچه تراکنشات
              </router-link
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
      <li class="nav-item">
        <div class="theme-control-toggle fa-icon-wait px-2">
          <input
              id="themeControlToggle"
              class="form-check-input ms-0 theme-control-toggle-input"
              data-theme-control="theme"
              type="checkbox"
              value="dark"
          /><label
            class="mb-0 theme-control-toggle-label theme-control-toggle-light"
            data-bs-placement="left"
            data-bs-toggle="tooltip"
            for="themeControlToggle"
            title="تغییر به نمایه روز"
        ><span class="fas fa-sun fs-0"></span></label
        ><label
            class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
            data-bs-placement="left"
            data-bs-toggle="tooltip"
            for="themeControlToggle"
            title="تغییر به نمایه شب"
        ><span class="fas fa-moon fs-0"></span
        ></label>
        </div>
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
        <div
            aria-labelledby="navbarDropdownNotification"
            class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg"
        >
          <div class="card card-notification shadow-none">
            <div class="card-header">
              <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                  <h6 class="card-header-title mb-0">Notifications</h6>
                </div>
                <div class="col-auto ps-0 ps-sm-3">
                  <a class="card-link fw-normal" href="#">Mark all as read</a>
                </div>
              </div>
            </div>
            <div class="scrollbar-overlay" style="max-height: 19rem">
              <div class="list-group list-group-flush fw-normal fs--1">
                <div class="list-group-title border-bottom">NEW</div>
                <div class="list-group-item">
                  <a
                      class="notification notification-flush notification-unread"
                      href="#!"
                  >
                    <div class="notification-avatar">
                      <div class="avatar avatar-2xl me-3">
                        <img
                            alt=""
                            class="rounded-circle"
                            src="assets/img/team/1-thumb.png"
                        />
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1">
                        <strong>Emma Watson</strong> replied to your comment :
                        "Hello world 😍"
                      </p>
                      <span class="notification-time"
                      ><span aria-label="Emoji" class="me-2" role="img"
                      >💬</span
                      >Just now</span
                      >
                    </div>
                  </a>
                </div>
                <div class="list-group-item">
                  <a
                      class="notification notification-flush notification-unread"
                      href="#!"
                  >
                    <div class="notification-avatar">
                      <div class="avatar avatar-2xl me-3">
                        <div class="avatar-name rounded-circle">
                          <span>AB</span>
                        </div>
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1">
                        <strong>Albert Brooks</strong> reacted to
                        <strong>Mia Khalifa's</strong> status
                      </p>
                      <span class="notification-time"
                      ><span class="me-2 fab fa-gratipay text-danger"></span
                      >9hr</span
                      >
                    </div>
                  </a>
                </div>
                <div class="list-group-title border-bottom">EARLIER</div>
                <div class="list-group-item">
                  <a class="notification notification-flush" href="#!">
                    <div class="notification-avatar">
                      <div class="avatar avatar-2xl me-3">
                        <img
                            alt=""
                            class="rounded-circle"
                            src="assets/img/icons/weather-sm.jpg"
                        />
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1">
                        The forecast today shows a low of 20&#8451; in
                        California. See today's weather.
                      </p>
                      <span class="notification-time"
                      ><span aria-label="Emoji" class="me-2" role="img"
                      >🌤️</span
                      >1d</span
                      >
                    </div>
                  </a>
                </div>
                <div class="list-group-item">
                  <a
                      class="border-bottom-0 notification-unread notification notification-flush"
                      href="#!"
                  >
                    <div class="notification-avatar">
                      <div class="avatar avatar-xl me-3">
                        <img
                            alt=""
                            class="rounded-circle"
                            src="assets/img/logos/oxford.png"
                        />
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1">
                        <strong>University of Oxford</strong> created an event :
                        "Causal Inference Hilary 2019"
                      </p>
                      <span class="notification-time"
                      ><span aria-label="Emoji" class="me-2" role="img"
                      >✌️</span
                      >1w</span
                      >
                    </div>
                  </a>
                </div>
                <div class="list-group-item">
                  <a
                      class="border-bottom-0 notification notification-flush"
                      href="#!"
                  >
                    <div class="notification-avatar">
                      <div class="avatar avatar-xl me-3">
                        <img
                            alt=""
                            class="rounded-circle"
                            src="assets/img/team/10.jpg"
                        />
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1">
                        <strong>James Cameron</strong> invited to join the
                        group: United Nations International Children's Fund
                      </p>
                      <span class="notification-time"
                      ><span aria-label="Emoji" class="me-2" role="img"
                      >🙋‍</span
                      >2d</span
                      >
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="card-footer text-center border-top">
              <a class="card-link d-block" href="app/social/notifications.html"
              >View all</a
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
            class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
        >
          <div class="card shadow-none">
            <div class="scrollbar-overlay nine-dots-dropdown">
              <div class="card-body px-3">
                <div class="row text-center gx-0 gy-0">

                  <div class="col-4">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="pages/user/profile.html"
                        target="_blank"
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
                  <div class="col-4">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="pages/user/profile.html"
                        target="_blank"
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
                  <div class="col-4">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="https://themewagon.com/"
                        target="_blank"
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
                        target="_blank"
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
                        target="_blank"
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
                  <div class="col-4">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
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
                  <div class="col-4">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="https://mailbluster.com/"
                        target="_blank"
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
                  <div class="col-4">
                    <a
                        class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
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

                  <!--                  <div class="col-12">-->
                  <!--                    <hr class="my-3 mx-n3 bg-200"/>-->
                  <!--                  </div>-->
                  <!--                  <div class="col-12">-->
                  <!--                    <a class="btn btn-outline-primary btn-sm mt-4" href="#!"-->
                  <!--                    >Show more</a-->
                  <!--                    >-->
                  <!--                  </div>-->
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
                src="/assets/img/team/3-thumb.png"
            />
          </div>
        </a>
        <div
            aria-labelledby="navbarDropdownUser"
            class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
        >
          <div class="bg-white dark__bg-1000 rounded-2 py-2">
            <a class="dropdown-item fw-bold text-warning" href="#!"
            ><span class="fas fa-crown me-1"></span
            ><span>خرید اشتراک</span></a
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#!">وضعیت شما</a>
            <a class="dropdown-item" href="pages/user/profile.html"
            >حساب کاربری</a
            >
            <router-link :to="{name: 'wallet'}" class="dropdown-item">کیف پول</router-link>
            <a class="dropdown-item" href="/">رزومه</a>
            <div class="dropdown-divider"></div>
            <router-link :to="{name: 'changeProfile'}" class="dropdown-item">تنظیمات</router-link>
            <router-link :to="{name: 'logout'}" class="dropdown-item">خروج</router-link>
          </div>
        </div>
      </li>
      <!-- <li class="nav-item dropdown">
        <a
          class="nav-link pe-0 ps-2"
          id="navbarDropdownUser"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div class="avatar avatar-xl">
            <img
              class="rounded-circle"
              src="../../../assets/icons/man.png"
              alt=""
            />
          </div>
        </a>
        <div
          class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
          aria-labelledby="navbarDropdownUser"
        >
          <div class="bg-white dark__bg-1000 rounded-2 py-2">
            <a class="dropdown-item" href="/login">ورود</a>
            <a class="dropdown-item" href="/signup">ثبت نام</a>
          </div>
        </div>
      </li> -->
    </ul>
  </nav>
  <!-- Top Navbar End -->
</template>

<script>
export default {
  name: "TopNavBar",
  data() {
    return {};
  },
  methods: {},
  mounted() {
  },
};
</script>

<style>
</style>