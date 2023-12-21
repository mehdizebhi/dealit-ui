<template>
  <div class="col-xxl-6 col-xl-12 order-xxl-3 order-lg-1 order-3">
    <div class="card h-100 font-sans-serif">
      <div class="card-header bg-light d-flex flex-between-center py-2">
        <h6 class="mb-0">فعالیت های اخیر</h6>
      </div>
      <div class="card-body py-0 scrollbar-overlay recent-activity-body-height" data-simplebar="init">
        <div class="simplebar-wrapper" style="margin: 0px -20px;">
          <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
          </div>
          <div class="simplebar-mask">
            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
              <div aria-label="scrollable content" class="simplebar-content-wrapper" role="region"
                   style="height: 100%; overflow: hidden scroll;" tabindex="0">
                <div class="simplebar-content" style="padding: 0px 20px;">
                  <div class="timeline-simple">

                    <div class="timeline-item position-relative">
                      <div class="row g-0 align-items-center">
                        <div class="col-auto d-flex align-items-center">
                          <h6 class="timeline-item-date fs--2 text-500 text-truncate mb-0 me-1">3h پیش</h6>
                          <div class="position-relative">
                            <div class="icon-item icon-item-md rounded-7 shadow-none bg-200">
                              <span class="text-primary fas fa-sign-out-alt"></span>
                            </div>
                          </div>
                        </div>
                        <div class="col ps-3 fs--1 text-500">
                          <div class="py-card">
                            <h5 class="fs--1">خروج</h5>
                            <p class="mb-0">خروج از سایت</p>
                          </div>
                          <hr class="text-200 my-0">
                        </div>
                      </div>
                    </div>

                    <div class="timeline-item position-relative">
                      <div class="row g-0 align-items-center">
                        <div class="col-auto d-flex align-items-center">
                          <h6 class="timeline-item-date fs--2 text-500 text-truncate mb-0 me-1">3h پیش</h6>
                          <div class="position-relative">
                            <div class="icon-item icon-item-md rounded-7 shadow-none bg-200">
                              <span class="text-primary fas fa-sign-out-alt"></span>
                            </div>
                          </div>
                        </div>
                        <div class="col ps-3 fs--1 text-500">
                          <div class="py-card">
                            <h5 class="fs--1">خروج</h5>
                            <p class="mb-0">خروج از سایت</p>
                          </div>
                          <hr class="text-200 my-0">
                        </div>
                      </div>
                    </div>

                    <div class="timeline-item position-relative">
                      <div class="row g-0 align-items-center">
                        <div class="col-auto d-flex align-items-center">
                          <h6 class="timeline-item-date fs--2 text-500 text-truncate mb-0 me-1">3h پیش</h6>
                          <div class="position-relative">
                            <div class="icon-item icon-item-md rounded-7 shadow-none bg-200">
                              <span class="text-primary fas fa-sign-out-alt"></span>
                            </div>
                          </div>
                        </div>
                        <div class="col ps-3 fs--1 text-500">
                          <div class="py-card">
                            <h5 class="fs--1">خروج</h5>
                            <p class="mb-0">خروج از سایت</p>
                          </div>
                          <hr class="text-200 my-0">
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="simplebar-placeholder" style="width: auto; height: 403px;"></div>
        </div>
        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
          <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
        </div>
        <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
          <div class="simplebar-scrollbar"
               style="height: 365px; transform: translate3d(0px, 19px, 0px); display: block;"></div>
        </div>
      </div>
      <div class="card-footer bg-light py-2">
        <div class="row justify-content-between">
          <div class="col-auto"><select class="form-select form-select-sm">
            <option selected="selected" value="today">امروز</option>
            <option value="week">هفته پیش</option>
            <option value="month">ماه پیش</option>
          </select></div>
          <div class="col-auto"><a class="btn btn-sm btn-falcon-default" href="#!">نمایش همه</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountActivity",
  props: {

  }
}
</script>


<style scoped>

</style>