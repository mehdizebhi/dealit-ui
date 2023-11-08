<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <nav
      class="navbar navbar-standard navbar-expand-lg fixed-top navbar-dark"
      data-navbar-darken-on-scroll="data-navbar-darken-on-scroll"
    >
      <div class="container">
        <a class="navbar-brand" href="../index.html"
          ><span class="text-white dark__text-white">دیلیت</span></a
        ><button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarStandard"
          aria-controls="navbarStandard"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse scrollbar" id="navbarStandard">
          <ul
            class="navbar-nav"
            data-top-nav-dropdowns="data-top-nav-dropdowns"
          >
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="dashboards"
                >یافتن فریلنسر</a
              >
              <div
                class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
                aria-labelledby="dashboards"
              >
                <div class="bg-white dark__bg-1000 rounded-3 py-2">
                  <a
                    class="dropdown-item link-600 fw-medium"
                    href="../index.html"
                    >جستوجو مهارت
                     </a
                  ><a
                    class="dropdown-item link-600 fw-medium"
                    href="../dashboard/analytics.html"
                    >ایجاد شغل</a
                  ><a
                    class="dropdown-item link-600 fw-medium"
                    href="../dashboard/crm.html"
                    >اسپانسرشیپ
                    <span class="badge rounded-pill ms-2 badge-soft-success"
                      >جدید</span>
                    </a
                  >
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="apps"
                >یافتن شغل</a
              >
              <div
                class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
                aria-labelledby="apps"
              >
                <div class="bg-white dark__bg-1000 rounded-3 py-2">
                  <a
                    class="dropdown-item link-600 fw-medium"
                    href="../index.html"
                    >جستوجو آگهی‌ها</a
                  ><a
                    class="dropdown-item link-600 fw-medium"
                    href="../dashboard/analytics.html"
                    >راه‌های کسب درآمد</a
                  ><a
                    class="dropdown-item link-600 fw-medium"
                    href="../dashboard/crm.html"
                    >راه‌های تبلیغات</a
                  >
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="documentations"
                >درباره ما</a
              >
              <div
                class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
                aria-labelledby="documentations"
              >
                <div class="bg-white dark__bg-1000 rounded-3 py-2">
                  <a
                    class="dropdown-item link-600 fw-medium"
                    href="../documentation/getting-started.html"
                    >درباره ما</a
                  ><a
                    class="dropdown-item link-600 fw-medium"
                    href="../documentation/customization/configuration.html"
                    >تماس با ما</a
                  ><a
                    class="dropdown-item link-600 fw-medium"
                    href="../documentation/customization/styling.html"
                    >وبلاگ<span
                      class="badge rounded-pill ms-2 badge-soft-success"
                      >آپدیت شده</span
                    ></a
                  ><a
                    class="dropdown-item link-600 fw-medium"
                    href="../documentation/customization/dark-mode.html"
                    >قوانین</a
                  ><a
                    class="dropdown-item link-600 fw-medium"
                    href="../documentation/customization/plugin.html"
                    >حریم خصوصی</a
                  >
                </div>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item d-flex align-items-center me-2">
              <div class="nav-link theme-switch-toggle fa-icon-wait p-0">
                <input
                  class="form-check-input ms-0 theme-switch-toggle-input"
                  id="themeControlToggle"
                  type="checkbox"
                  data-theme-control="theme"
                  value="dark"
                /><label
                  class="mb-0 theme-switch-toggle-label theme-switch-toggle-light"
                  for="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="تغییر به نمایه روز"
                  ><span class="fas fa-sun"></span></label
                ><label
                  class="mb-0 py-2 theme-switch-toggle-light d-lg-none"
                  for="themeControlToggle"
                  ><span>تغییر به نمایه روز</span></label
                ><label
                  class="mb-0 theme-switch-toggle-label theme-switch-toggle-dark"
                  for="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="تغییر به نمایه شب"
                  ><span class="fas fa-moon"></span></label
                ><label
                  class="mb-0 py-2 theme-switch-toggle-dark d-lg-none"
                  for="themeControlToggle"
                  ><span>تغییر به نمایه شب</span></label
                >
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownLogin"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >ورود</a
              >
              <div
                class="dropdown-menu dropdown-caret dropdown-menu-end dropdown-menu-card"
                aria-labelledby="navbarDropdownLogin"
              >
                <div class="card shadow-none navbar-card-login">
                  <div class="card-body fs--1 p-4 fw-normal">
                    <div
                      class="row text-start justify-content-between align-items-center mb-2"
                    >
                      <div class="col-auto">
                        <h5 class="mb-0">ورود به حساب</h5>
                      </div>
                      <div class="col-auto">
                        <p class="fs--1 text-600 mb-0">
                          یا
                          <a href="/signup"
                            >ثبت نام کنید</a
                          >
                        </p>
                      </div>
                    </div>
                    <form>
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="email"
                          placeholder="ایمیل"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="password"
                          placeholder="رمز عبور"
                        />
                      </div>
                      <div class="row flex-between-center">
                        <div class="col-auto">
                          <div class="form-check mb-0">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="modal-checkbox"
                            /><label
                              class="form-check-label mb-0"
                              for="modal-checkbox"
                              >من را بخاطر بسپار</label
                            >
                          </div>
                        </div>
                        <div class="col-auto">
                          <a
                            class="fs--1"
                            href="../pages/authentication/simple/forgot-password.html"
                            >فراموشی رمز عبور</a
                          >
                        </div>
                      </div>
                      <div class="mb-3">
                        <button
                          class="btn btn-primary d-block w-100 mt-3"
                          type="submit"
                          name="submit"
                        >
                          ورود
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >ثبت نام</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body p-4">
            <div
              class="row text-start justify-content-between align-items-center mb-2"
            >
              <div class="col-auto">
                <h5 id="modalLabel">ثبت نام</h5>
              </div>
              <div class="col-auto">
                <p class="fs--1 text-600 mb-0">
                  حساب کاربری دارید؟
                  <a href="/login"
                    >ورود به حساب</a
                  >
                </p>
              </div>
            </div>
            <form>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="text"
                  autocomplete="on"
                  placeholder="نام مستعار مانند: مهدی ذبحی"
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="text"
                  autocomplete="on"
                  placeholder="نام کاربری (لاتین)"
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="email"
                  autocomplete="on"
                  placeholder="آدرس ایمیل"
                />
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-sm-6">
                  <input
                    class="form-control"
                    type="password"
                    autocomplete="on"
                    placeholder="رمز عبور"
                  />
                </div>
                <div class="mb-3 col-sm-6">
                  <input
                    class="form-control"
                    type="password"
                    autocomplete="on"
                    placeholder="تکرار رمز عبور"
                  />
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    id="flexRadioDefault1"
                    type="radio"
                    name="flexRadioDefault"
                  /><label class="form-check-label mb-0" for="flexRadioDefault1"
                    >من فریلنسر هستم</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    id="flexRadioDefault2"
                    type="radio"
                    name="flexRadioDefault"
                    checked="checked"
                  /><label class="form-check-label mb-0" for="flexRadioDefault2"
                    >من کارفرما هستم</label
                  >
                </div>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="modal-register-checkbox"
                /><label class="form-label" for="modal-register-checkbox"
                  ><a href="#!">قوانین </a> و
                  <a href="#!">سیاست حفظ حریم خصوصی</a> می پذیرم</label
                >
              </div>
              <div class="mb-3">
                <button
                  class="btn btn-primary d-block w-100 mt-3"
                  type="submit"
                  name="submit"
                >
                  ثبت نام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="py-0 overflow-hidden light" id="banner">
      <div
        class="bg-holder overlay"
        style="
          background-image: url(../assets/img/generic/bg-1.jpg);
          background-position: center bottom;
        "
      ></div>
      <!--/.bg-holder-->
      <div class="container">
        <div class="row flex-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
          <div
            class="col-md-11 col-lg-8 col-xl-4 pb-7 pb-xl-9 text-center text-xl-start"
          >
            <a
              class="btn btn-outline-danger mb-4 fs--1 border-2 rounded-pill"
              href="#!"
              ><span class="me-2" role="img" aria-label="Gift">🎁</span>حرفه ای
              شوید</a
            >
            <h1 class="text-white fw-light">
              استخدام
              <span
                class="typed-text fw-bold"
                data-typed-text='["دولوپر وب",
                "مهندس IT",
                "آنالیز داده",
                "برنامه نویس"]'
              ></span
              ><br />برای پروژه های شما
            </h1>
            <p class="lead text-white opacity-75">
              با استفاده از دیلیت شما میتوانید به راحتی به عنوان کارفرما، افراد
              مستعد را بیابید و استخدام کنید. اگر شما مهارتی دارید میتوانید به
              عنوان فریلنسر ثبت نام کنید و روی شغل های دیگران کار کنید و درآمد
              داشته باشید.
            </p>
            <a
              class="btn btn-outline-light border-2 rounded-pill btn-lg mt-4 fs-0 py-2"
              href="/signup"
              >همین الان شروع کنید</a
            >
          </div>
          <div class="col-xl-7 offset-xl-1 align-self-end mt-4 mt-xl-0">
            <a class="img-landing-banner rounded" href="../index.html"
              ><img class="img-fluid" src="#" alt=""
            /></a>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->

    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <h1 class="fs-2 fs-sm-4 fs-md-5">
              شغل مورد علاقه خود را انتخاب کنید
            </h1>
            <p class="lead">
              شما می توانید به راحتی درمیان شغل ها جست و جو کنید و بر اساس
              توضیحات آن با طرف مقابل وارد صحبت بشید و درصورت توافق دو طرف کار
              خود را شروع کنید.
            </p>
          </div>
        </div>
        <div class="row flex-center mt-8">
          <div class="col-md col-lg-5 col-xl-4 ps-lg-6">
            <img
              class="img-fluid px-6 px-md-0"
              src="../assets/icons/49.png"
              alt=""
            />
          </div>
          <div class="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 class="text-danger">
              <span class="fas fa-search me-2"></span>جستوجو
            </h5>
            <h3>یافتن شغل مناسب</h3>
            <p>
              می توانید با فیلترهای حرفه ای شغل های مرتبط را به سادگی بیابید.
            </p>
          </div>
        </div>
        <div class="row flex-center mt-7">
          <div class="col-md col-lg-5 col-xl-4 pe-lg-6 order-md-2">
            <img
              class="img-fluid px-6 px-md-0"
              src="../assets/icons/50.png"
              alt=""
            />
          </div>
          <div class="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 class="text-info">
              <span class="far fa-handshake me-2"></span>ثبت قرارداد
            </h5>
            <h3>اول دیل، بعد قرارداد</h3>
            <p>
              اول شرایط قرارداد را بپذیرید و با طرف مقابل دیل کنید تا بعد از ثبت
              قرارداد مشکل کمتری به وجود بیاید.
            </p>
          </div>
        </div>
        <div class="row flex-center mt-7">
          <div class="col-md col-lg-5 col-xl-4 ps-lg-6">
            <img
              class="img-fluid px-6 px-md-0"
              src="../assets/icons/48.png"
              alt=""
            />
          </div>
          <div class="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 class="text-success">
              <span class="fab fa-amazon-pay me-2"></span>پرداخت امن
            </h5>
            <h3>درگاه پرداخت و پرداخت خودکار</h3>
            <p>
              پرداختی ها به صورت خودکار از کیف پول کارفرما کم می شود و نزد دیلیت
              باقی می ماند و در انتهای قرارداد اگر مشکلی پیش نیامد به صورت
              خودکار به حساب فریلنسر منتقل می شود.
            </p>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="bg-light text-center">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="fs-2 fs-sm-4 fs-md-5">مزایا استفاده برای کارفرما</h1>
            <p class="lead">
              سعی می کنیم بهترین خدمات را برای هر دو طرف به ارمغان بیاوریم
            </p>
          </div>
        </div>
        <div class="row mt-6">
          <div class="col-lg-4">
            <div class="card card-span h-100">
              <div class="card-span-img">
                <span class="fas fa-piggy-bank fs-4 text-success"></span>
              </div>
              <div class="card-body pt-6 pb-4">
                <h5 class="mb-2">بهترین قیمت</h5>
                <p>
                  از میان درخواست های فریلنسرها برای شغل شما می توانید بهترین
                  گزینه را هم از نظر مهارت و هم از نظر قیمت انتخاب کنید.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-6 mt-lg-0">
            <div class="card card-span h-100">
              <div class="card-span-img">
                <span class="fas fa-shield-alt fs-5 text-info"></span>
              </div>
              <div class="card-body pt-6 pb-4">
                <h5 class="mb-2">مطمئن و قابل اعتماد</h5>
                <p>
                  به راحتی میتوانید پروفایل فریلنسرها را مشاهده کنید و آمار
                  فعالیت های افراد را ببینید. همچنین اگر توسط ما تایید شده باشند
                  نیز قابل مشاهده است.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-6 mt-lg-0">
            <div class="card card-span h-100">
              <div class="card-span-img">
                <span class="far fa-clock fs-6 text-danger"></span>
              </div>
              <div class="card-body pt-6 pb-4">
                <h5 class="mb-2">سریع و کارآمد</h5>
                <p>
                  در زمانی که نیاز سریع دارید میتواند آگهی های خود را بوست کنید
                  تا سریع تر میان فریلنسر ها دیده شود. این قابلیت تاثیر بسزایی
                  در سریعتر کردن فعالیت جذب فریلنسرها میشود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->

    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="light bg-dark">
      <div
        class="bg-holder overlay"
        style="
          background-image: url(../assets/img/generic/bg-2.jpg);
          background-position: center top;
        "
      ></div>
      <!--/.bg-holder-->
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <p class="fs-3 fs-sm-4 text-white">
              به انجمن ما متشکل از برنامه‌نویس و مهندسان بپیوندید که مأموریت
              آنها برای ساخت سایت‌ها و برنامه‌های بهتر است.
            </p>
            <button
              class="btn btn-outline-light border-2 rounded-pill btn-lg mt-4 fs-0 py-2"
              type="button"
            >
              ثبت نام حساب کاربری
            </button>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="bg-dark pt-8 pb-4 light">
      <div class="container">
        <div class="position-absolute btn-back-to-top bg-dark">
          <a class="text-600" href="#banner" data-bs-offset-top="0"
            ><span
              class="fas fa-chevron-up"
              data-fa-transform="rotate-45"
            ></span
          ></a>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <h5 class="text-uppercase text-white opacity-85 mb-3">هدف ما</h5>
            <p class="text-600">
              دیلیت اجازه می دهد که فعالان حوزه IT در فضایی باز و پویا به همکاری
              در کنار هم بپردازند و از این طریق زمینه ای برای تولید و توسعه
              زیرساخت های فناوری کشور را فراهم سازد. از این روی به افراد توانمند
              و با استعداد نیاز داریم؛ ما محیطی ارائه کردیم که این افراد بتوانند
              با آسودگی خاطر به همکاری با کارفرما ها بپردازند بدون نگرانی های
              اقتصادی و پرداختی.
            </p>
            <div class="icon-group mt-4">
              <a class="icon-item bg-white text-facebook" href="#!"
                ><span class="fab fa-facebook-f"></span></a
              ><a class="icon-item bg-white text-twitter" href="#!"
                ><span class="fab fa-twitter"></span></a
              ><a class="icon-item bg-white text-google-plus" href="#!"
                ><span class="fab fa-google-plus-g"></span></a
              ><a class="icon-item bg-white text-linkedin" href="#!"
                ><span class="fab fa-linkedin-in"></span></a
              ><a class="icon-item bg-white" href="#!"
                ><span class="fab fa-medium-m"></span
              ></a>
            </div>
          </div>
          <div class="col ps-lg-6 ps-xl-8">
            <div class="row mt-5 mt-lg-0">
              <div class="col-6 col-md-3">
                <h5 class="text-uppercase text-white opacity-85 mb-3">شرکت</h5>
                <ul class="list-unstyled">
                  <li class="mb-1">
                    <a class="link-600" href="#!">درباره ما</a>
                  </li>
                  <li class="mb-1">
                    <a class="link-600" href="#!">تماس با ما</a>
                  </li>
                  <li class="mb-1"><a class="link-600" href="#!">وبلاگ</a></li>
                  <li class="mb-1"><a class="link-600" href="#!">قوانین</a></li>
                  <li class="mb-1">
                    <a class="link-600" href="#!">حریم خصوصی</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <h5 class="text-uppercase text-white opacity-85 mb-3">
                  محصولات
                </h5>
                <ul class="list-unstyled">
                  <li class="mb-1">
                    <a class="link-600" href="#!">اشتراک</a>
                  </li>
                  <li class="mb-1">
                    <a class="link-600" href="#!">بوست</a>
                  </li>
                  <li class="mb-1">
                    <a class="link-600" href="#!">آموزش</a>
                  </li>
                  <li class="mb-1">
                    <a class="link-600" href="#!">دیل پی</a>
                  </li>
                  <li class="mb-1">
                    <a class="link-600" href="#!">پوینت</a>
                  </li>
                </ul>
              </div>
              <div class="col mt-5 mt-md-0">
                <h5 class="text-uppercase text-white opacity-85 mb-3">وبلاگ</h5>
                <ul class="list-unstyled">
                  <li>
                    <h5 class="fs-0 mb-0">
                      <a class="link-600" href="#!">
                        چگونه یک شغل ایجاد جدید کنیم؟</a
                      >
                    </h5>
                    <p class="text-600 opacity-50">
                      12 اردیبهشت &bull; 8 دقیقه
                    </p>
                  </li>
                  <li>
                    <h5 class="fs-0 mb-0">
                      <a class="link-600" href="#!">
                        چگونه برای یک شغل اپلای کنیم؟</a
                      >
                    </h5>
                    <p class="text-600 opacity-50">
                      8 تیر &bull; 4 دقیقه &starf;
                    </p>
                  </li>
                  <li>
                    <h5 class="fs-0 mb-0">
                      <a class="link-600" href="#!">
                        پرداخت مربوط به قراداد شغل ها</a
                      >
                    </h5>
                    <p class="text-600 opacity-50">5 آبان &bull; 3 دقیقه</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="py-0 bg-dark light">
      <div>
        <hr class="my-0 text-600 opacity-25" />
        <div class="container py-3">
          <div class="row justify-content-between fs--1">
            <div class="col-12 col-sm-auto text-center">
              <p class="mb-0 text-600 opacity-85">
                دیلیت | پلتفرم اشتغال محور
                <span class="d-none d-sm-inline-block"> </span
                ><br class="d-sm-none" />
                &copy; 2023
                <a class="text-white opacity-85" href="#"></a>
              </p>
            </div>
            <div class="col-12 col-sm-auto text-center">
              <p class="mb-0 text-600 opacity-85">v0.1.0</p>
            </div>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->
  </main>
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->

  <!--Start Custom Setting Layout-->
  <!--End Custom Setting Layout-->
</template>
  
  <script>
export default {
  name: "LandingPage",
  components: {},
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
  