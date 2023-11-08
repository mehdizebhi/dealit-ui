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
          <div class="card mb-3">
            <div class="card-header position-relative min-vh-25 mb-7">
              <div class="bg-holder rounded-3 rounded-bottom-0"
                   style="background-image:url(../../assets/img/generic/4.jpg);"></div>
              <!--/.bg-holder-->
              <div class="avatar avatar-5xl avatar-profile"><img class="rounded-circle img-thumbnail shadow-sm"
                                                                 src="../../assets/img/generic/2.jpg" width="200"
                                                                 alt=""></div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-8">
                  <h4 class="mb-1"> مهدی ذبحی<span data-bs-toggle="tooltip" data-bs-placement="right"
                                                   aria-label="Verified" data-bs-original-title="Verified"><svg
                      class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2"
                      aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""
                      style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g
                      transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor"
                                                                                           d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                                                           transform="translate(-256 -256)"></path></g></g></svg>
                    <!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span>
                  </h4>
                  <h5 class="fs-0 fw-normal">مهندس نرم افزار</h5>
                  <p class="text-500">یزد، ایران</p>
                  <button class="btn btn-primary btn-sm px-3" type="button"><span class="fas fa-heart me-1"></span>دنبال
                    کردن
                  </button>
                  <button class="btn btn-falcon-default btn-sm px-3 ms-2" type="button"><span
                      class="fas fa-comment me-1"></span>پیام
                  </button>
                  <router-link class="btn btn-falcon-default btn-sm px-3 ms-2" :to="{name: 'changeProfile'}"><span
                      class="fas fa-edit me-1"></span>تغییر پروفایل
                  </router-link>
                  <div class="border-bottom border-dashed my-4 d-lg-none"></div>
                </div>

                <div class="col ps-2 ps-lg-3">
                  <div class="row text-center mb-3">
                    <div class="col-6 border-sm-end border-300">
                      <h4 class="text-700" data-countup="{&quot;endValue&quot;:500}">500</h4>
                      <h6 class="fw-normal mb-0">درآمد (میلیون تومان)</h6>
                    </div>
                    <div class="col-6">
                      <h4 class="text-700" data-countup="{&quot;endValue&quot;:178}">178</h4>
                      <h6 class="fw-normal mb-0">ساعات کاری</h6>
                    </div>
                  </div>
                  <div class="row text-center">
                    <div class="col-6 border-sm-end border-300">
                      <h4 class="text-700" data-countup="{&quot;endValue&quot;:18}">18</h4>
                      <h6 class="fw-normal mb-0">پروژه‌های موفق</h6>
                    </div>
                    <div class="col-6">
                      <h4 class="text-700" data-countup="{&quot;endValue&quot;:2}">2</h4>
                      <h6 class="fw-normal mb-0">پروژه‌های جاری</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-lg-8 pe-lg-2">
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <h5 class="mb-0">درباره من</h5>
                </div>
                <div class="card-body text-justify">
                  <p class="mb-0 text-1000">
                    برنامه نویس فول استک متعهد، پرشور و موفق با بیش از 9 سال سابقه کار به عنوان یک پیمانکار مستقل برای
                    Google و توسعه و رشد شبکه اجتماعی آموزشی من که به دیگران کمک می کند برنامه نویسی، طراحی وب، توسعه
                    بازی، شبکه سازی را بیاموزند.
                  </p>
                  <div class="collapse show" id="profile-intro">
                    <p class="mt-3 text-1000">
                      من دانش و تخصص گسترده ای را در استفاده از مهارت های فنی خود در برنامه نویسی، علوم کامپیوتر، توسعه
                      نرم افزار و توسعه اپلیکیشن موبایل برای توسعه راه حل هایی برای کمک به سازمان ها برای افزایش بهره
                      وری و تسریع عملکرد کسب و کار به دست آورده ام.
                    </p>
                    <p class="text-1000">
                      خیلی خوب است که در عصری زندگی می‌کنیم که می‌توانیم چیزهای زیادی با فناوری به اشتراک بگذاریم، اما
                      من آماده هستم، اما برای مرحله بعدی شغلم آماده هستم، با تعادل سالم بین دنیای مجازی و مکانی که در آن
                      به دیگران کمک می‌کنم. روبرو شدن.
                    </p>
                    <p class="text-1000 mb-0">
                      همیشه چیز جدیدی برای یادگیری وجود دارد، به خصوص در زمینه های مرتبط با فناوری اطلاعات. مردم دوست
                      دارند با من کار کنند زیرا من می توانم فناوری را برای همه توضیح دهم، از کارکنان گرفته تا مدیرانی که
                      به من نیاز دارند تا جزئیات و تصویر بزرگ را به هم پیوند دهم. همچنین می‌توانم فناوری‌هایی را که
                      پروژه‌های موفق به آن نیاز دارند، پیاده‌سازی کنم.
                    </p>
                  </div>
                </div>
                <div class="card-footer bg-light p-0 border-top">
                  <button class="btn btn-link d-block w-100 btn-intro-collapse" type="button" data-bs-toggle="collapse"
                          data-bs-target="#profile-intro" aria-expanded="true" aria-controls="profile-intro">نمایش <span
                      class="less">کمتر
                     <span class="fas fa-chevron-up ms-2 fs--2"></span></span>
                    <span class="full">بیشتر
                     <span class="fas fa-chevron-down ms-2 fs--2"></span></span>
                  </button>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light d-flex justify-content-between">
                  <h5 class="mb-0">Associations</h5><a class="font-sans-serif"
                                                       href="../../pages/miscellaneous/associations.html">All
                  Associations</a>
                </div>
                <div class="card-body fs--1 pb-0">
                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="d-flex position-relative align-items-center mb-2"><img
                          class="d-flex align-self-center me-2 rounded-3" src="../../assets/img/logos/apple.png" alt=""
                          width="50">
                        <div class="flex-1">
                          <h6 class="fs-0 mb-0"><a class="stretched-link" href="#!">Apple</a></h6>
                          <p class="mb-1">3243 associates</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="d-flex position-relative align-items-center mb-2"><img
                          class="d-flex align-self-center me-2 rounded-3" src="../../assets/img/logos/g.png" alt=""
                          width="50">
                        <div class="flex-1">
                          <h6 class="fs-0 mb-0"><a class="stretched-link" href="#!">Google</a></h6>
                          <p class="mb-1">34598 associates</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="d-flex position-relative align-items-center mb-2"><img
                          class="d-flex align-self-center me-2 rounded-3" src="../../assets/img/logos/intel-2.png"
                          alt="" width="50">
                        <div class="flex-1">
                          <h6 class="fs-0 mb-0"><a class="stretched-link" href="#!">Intel</a></h6>
                          <p class="mb-1">7652 associates</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="d-flex position-relative align-items-center mb-2"><img
                          class="d-flex align-self-center me-2 rounded-3" src="../../assets/img/logos/facebook.png"
                          alt="" width="50">
                        <div class="flex-1">
                          <h6 class="fs-0 mb-0"><a class="stretched-link" href="#!">Facebook</a></h6>
                          <p class="mb-1">765 associates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light d-flex justify-content-between">
                  <h5 class="mb-0">Activity log</h5><a class="font-sans-serif"
                                                       href="../../app/social/activity-log.html">All logs</a>
                </div>
                <div class="card-body fs--1 p-0">
                  <a class="border-bottom-0 notification rounded-0 border-x-0 border border-300" href="#!">
                    <div class="notification-avatar">
                      <div class="avatar avatar-xl me-3">
                        <div class="avatar-emoji rounded-circle "><span role="img" aria-label="Emoji">🎁</span></div>
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1"><strong>Jennifer Kent</strong> Congratulated <strong>Anthony Hopkins</strong></p>
                      <span class="notification-time">November 13, 5:00 Am</span>
                    </div>
                  </a>

                  <a class="border-bottom-0 notification rounded-0 border-x-0 border border-300" href="#!">
                    <div class="notification-avatar">
                      <div class="avatar avatar-xl me-3">
                        <div class="avatar-emoji rounded-circle "><span role="img" aria-label="Emoji">🏷️</span></div>
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1"><strong>California Institute of Technology</strong> tagged <strong>Anthony
                        Hopkins</strong> in a post.</p>
                      <span class="notification-time">November 8, 5:00 PM</span>
                    </div>
                  </a>

                  <a class="border-bottom-0 notification rounded-0 border-x-0 border border-300" href="#!">
                    <div class="notification-avatar">
                      <div class="avatar avatar-xl me-3">
                        <div class="avatar-emoji rounded-circle "><span role="img" aria-label="Emoji">📋️</span></div>
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1"><strong>Anthony Hopkins</strong> joined <strong>Victory day cultural
                        Program</strong> with <strong>Tony Stark</strong></p>
                      <span class="notification-time">November 01, 11:30 AM</span>
                    </div>
                  </a>

                  <a class="notification border-x-0 border-bottom-0 border-300 rounded-top-0" href="#!">
                    <div class="notification-avatar">
                      <div class="avatar avatar-xl me-3">
                        <div class="avatar-emoji rounded-circle "><span role="img" aria-label="Emoji">📅️</span></div>
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1"><strong>Massachusetts Institute of Technology</strong> invited <strong>Anthony
                        Hopkin</strong> to an event</p>
                      <span class="notification-time">October 28, 12:00 PM</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 ps-lg-2">
              <div class="sticky-sidebar">
                <div class="card mb-3">
                  <div class="card-header bg-light">
                    <h5 class="mb-0">تجربیات</h5>
                  </div>
                  <div class="card-body fs--1">
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="../../assets/img/logos/g.png" alt=""
                                                           width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0">Big Data Engineer<span data-bs-toggle="tooltip" data-bs-placement="top"
                                                                     aria-label="Verified"
                                                                     data-bs-original-title="Verified"><svg
                            class="svg-inline--fa fa-check-circle fa-w-16 text-primary"
                            data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa"
                            data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g
                            transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor"
                                                                                                 d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                                                                 transform="translate(-256 -256)"></path></g></g></svg>
                          <!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span>
                        </h6>
                        <p class="mb-1"><a href="#!">Google</a></p>
                        <p class="text-1000 mb-0">Apr 2012 - Present • 6 yrs 9 mos</p>
                        <p class="text-1000 mb-0">California, USA</p>
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="../../assets/img/logos/apple.png"
                                                           alt="" width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0">Software Engineer<span data-bs-toggle="tooltip" data-bs-placement="top"
                                                                     aria-label="Verified"
                                                                     data-bs-original-title="Verified"><svg
                            class="svg-inline--fa fa-check-circle fa-w-16 text-primary"
                            data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa"
                            data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g
                            transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor"
                                                                                                 d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                                                                 transform="translate(-256 -256)"></path></g></g></svg>
                          <!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span>
                        </h6>
                        <p class="mb-1"><a href="#!">Apple</a></p>
                        <p class="text-1000 mb-0">Jan 2012 - Apr 2012 • 4 mos</p>
                        <p class="text-1000 mb-0">California, USA</p>
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="../../assets/img/logos/nike.png"
                                                           alt="" width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0">Mobile App Developer<span data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        aria-label="Verified"
                                                                        data-bs-original-title="Verified"><svg
                            class="svg-inline--fa fa-check-circle fa-w-16 text-primary"
                            data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa"
                            data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g
                            transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor"
                                                                                                 d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                                                                 transform="translate(-256 -256)"></path></g></g></svg>
                          <!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span>
                        </h6>
                        <p class="mb-1"><a href="#!">Nike</a></p>
                        <p class="text-1000 mb-0">Jan 2011 - Apr 2012 • 1 yr 4 mos</p>
                        <p class="text-1000 mb-0">Beaverton, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-header bg-light">
                    <h5 class="mb-0">تحصیلات</h5>
                  </div>
                  <div class="card-body fs--1">
                    <div class="d-flex"><a href="#!">
                      <div class="avatar avatar-3xl">
                        <div class="avatar-name rounded-circle"><span>SU</span></div>
                      </div>
                    </a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"><a href="#!">Stanford University<span data-bs-toggle="tooltip"
                                                                                    data-bs-placement="top"
                                                                                    aria-label="Verified"
                                                                                    data-bs-original-title="Verified"><svg
                            class="svg-inline--fa fa-check-circle fa-w-16 text-primary"
                            data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa"
                            data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g
                            transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor"
                                                                                                 d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                                                                 transform="translate(-256 -256)"></path></g></g></svg>
                          <!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></a>
                        </h6>
                        <p class="mb-1">Computer Science and Engineering</p>
                        <p class="text-1000 mb-0">2010 - 2014 • 4 yrs</p>
                        <p class="text-1000 mb-0">California, USA</p>
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="../../assets/img/logos/staten.png"
                                                           alt="" width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"><a href="#!">Staten Island Technical High School<span
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified"
                            data-bs-original-title="Verified"><svg
                            class="svg-inline--fa fa-check-circle fa-w-16 text-primary"
                            data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa"
                            data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g
                            transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor"
                                                                                                 d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                                                                 transform="translate(-256 -256)"></path></g></g></svg>
                          <!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></a>
                        </h6>
                        <p class="mb-1">Higher Secondary School Certificate, Science</p>
                        <p class="text-1000 mb-0">2008 - 2010 • 2 yrs</p>
                        <p class="text-1000 mb-0">New York, USA</p>
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex"><a href="#!"> <img class="img-fluid"
                                                           src="../../assets/img/logos/tj-heigh-school.png" alt=""
                                                           width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"><a href="#!">Thomas Jefferson High School for Science and Technology<span
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified"
                            data-bs-original-title="Verified"><svg
                            class="svg-inline--fa fa-check-circle fa-w-16 text-primary"
                            data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa"
                            data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g
                            transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor"
                                                                                                 d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                                                                 transform="translate(-256 -256)"></path></g></g></svg>
                          <!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></a>
                        </h6>
                        <p class="mb-1">Secondary School Certificate, Science</p>
                        <p class="text-1000 mb-0">2003 - 2008 • 5 yrs</p>
                        <p class="text-1000 mb-0">Alexandria, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3 mb-lg-0">
                  <div class="card-header bg-light">
                    <h5 class="mb-0">پروژه ها</h5>
                  </div>
                  <div class="card-body fs--1">
                    <div class="d-flex btn-reveal-trigger">
                      <div class="calendar"><span class="calendar-month">Feb</span><span class="calendar-day">21</span>
                      </div>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"><a href="../../app/events/event-detail.html">Newmarket Nights</a></h6>
                        <p class="mb-1">Organized by <a href="#!" class="text-700">University of Oxford</a></p>
                        <p class="text-1000 mb-0">Time: 6:00AM</p>
                        <p class="text-1000 mb-0">Duration: 6:00AM - 5:00PM</p>Place: Cambridge Boat Club, Cambridge
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex btn-reveal-trigger">
                      <div class="calendar"><span class="calendar-month">Dec</span><span class="calendar-day">31</span>
                      </div>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"><a href="../../app/events/event-detail.html">31st Night Celebration</a>
                        </h6>
                        <p class="mb-1">Organized by <a href="#!" class="text-700">Chamber Music Society</a></p>
                        <p class="text-1000 mb-0">Time: 11:00PM</p>
                        <p class="text-1000 mb-0">280 people interested</p>Place: Tavern on the Greend, New York
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex btn-reveal-trigger">
                      <div class="calendar"><span class="calendar-month">Dec</span><span class="calendar-day">16</span>
                      </div>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"><a href="../../app/events/event-detail.html">Folk Festival</a></h6>
                        <p class="mb-1">Organized by <a href="#!" class="text-700">Harvard University</a></p>
                        <p class="text-1000 mb-0">Time: 9:00AM</p>
                        <p class="text-1000 mb-0">Location: Cambridge Masonic Hall Association</p>Place: Porter Square,
                        North Cambridge
                      </div>
                    </div>
                  </div>
<!--                  <div class="card-footer bg-light p-0 border-top"><a class="btn btn-link d-block w-100"
                                                                      href="../../app/events/event-list.html">All Events
                    <svg class="svg-inline&#45;&#45;fa fa-chevron-right fa-w-10 ms-1 fs&#45;&#45;2" aria-hidden="true" focusable="false"
                         data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 320 512" data-fa-i2svg="">
                      <path fill="currentColor"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                    </svg>&lt;!&ndash; <span class="fas fa-chevron-right ms-1 fs&#45;&#45;2"></span> Font Awesome fontawesome.com &ndash;&gt;
                  </a></div>-->
                </div>
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

export default {
  name: "ProfilePage",
  components: {ContentLayout},
}
</script>


<style scoped>

</style>