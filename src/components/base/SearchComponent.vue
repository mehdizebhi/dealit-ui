<template>
  <div class="card mb-3">
    <div class="card-body rounded bg-light">
      <div class="search-box" data-list="{&quot;valueNames&quot;:[&quot;title&quot;]}">
        <form class="position-relative" data-bs-toggle="search" data-bs-display="static">
          <input class="form-control search-input fuzzy-search" type="search" placeholder="جستوجو آگهی، فریلنسر و..."
                 aria-label="Search">
          <span class="fas fa-search search-box-icon"></span>
        </form>
        <div class="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
             data-bs-dismiss="search">
          <button class="btn btn-link btn-close-falcon p-0" aria-label="Close"></button>
        </div>
        <div class="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
          <div class="scrollbar list py-3" style="max-height: 24rem;"><h6
              class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">بازدیدهای اخیر</h6>

            <a class="dropdown-item fs--1 px-card py-1 hover-primary"
               href="../../app/events/event-detail.html">
              <div class="d-flex align-items-center">
                 <span class="fas fa-circle me-2 text-300 fs--2"></span>
                <div class="fw-normal title">
                 برنامه نویس وب
                </div>
              </div>
            </a>

            <hr class="text-200 dark__text-900">

            <h6 class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">نتیجه جستوجو</h6>
            <a class="dropdown-item fs--1 px-card py-1 hover-primary"
               href="../../app/events/event-detail.html">
              <div class="d-flex align-items-center">
                <span class="fas fa-circle me-2 text-300 fs--2"></span>
                <div class="fw-normal title">
                  Spring Boot
                </div>
              </div>
            </a>
            <hr class="text-200 dark__text-900">
          </div>
          <div class="text-center mt-n3">
            <p class="fallback fw-bold fs-1 d-none">چیزی پیدا نشد.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchComponent"
}
</script>


<style scoped>

</style>