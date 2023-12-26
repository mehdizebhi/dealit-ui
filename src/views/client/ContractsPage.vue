<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <div class="row g-3 mb-3">
            <div class="col-12 order-xxl-3">
              <div id="runningProjectTable" class="card" data-list='{"valueNames":["projects","worked","time","date"]}'>
                <div class="card-header">
                  <div class="row flex-between-center">
                    <div class="col-6 col-sm-auto d-flex align-items-center pe-0">
                      <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">تاریخچه استخدامی</h5>
                    </div>
                    <div class="col-6 col-sm-auto ms-auto text-end ps-0">
                      <div class="h-100">
                        <form>
                          <div class="input-group"><input aria-label="search"
                                                          class="form-control form-control-sm shadow-none search" placeholder="جستوجو"
                                                          type="search">
                            <div class="input-group-text bg-transparent">
                              <span class="fa fa-search fs--1 text-600"></span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="scrollbar">
                    <table class="table mb-0 table-striped fs--2 border-200 overflow-hidden table-running-project">
                      <thead class="bg-light">
                      <tr class="text-800">
                        <th class="sort" data-sort="projects">عنوان شغل</th>
                        <th class="sort" data-sort="time">نوع پرداختی</th>
                        <th class="sort text-center" data-sort="worked">تاریخ شروع</th>
                        <th class="sort text-center" data-sort="date">تاریخ پایان</th>
                        <th class="text-center">وضعیت</th>
                      </tr>
                      </thead>
                      <tbody class="list">
                      <tr>
                        <td>
                          <div class="d-flex align-items-center position-relative">
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fw-semi-bold">
                                <a class="stretched-link text-900" href="../pages/user/profile.html">
                                  توسعه سامانه بانکی
                                </a></h6>
                              <p class="text-500 fs--2 mb-0">استخدام توسط: دیجی پی</p>
                            </div>
                          </div>
                        </td>
                        <td class="align-middle">
                          <p class="fs--1 mb-0 fw-semi-bold">200 هزارتومان ساعتی</p>
                        </td>
                        <td class="align-middle text-center time">
                          <p class="fs--1 mb-0 fw-semi-bold">11 تیر 1402</p>
                        </td>
                        <td class="align-middle text-center date">
                          <p class="fs--1 mb-0 fw-semi-bold">1 آذر 1402</p>
                        </td>
                        <td class="align-middle text-center">
                          <span class="badge badge rounded-pill fw-medium fs--2 badge-soft-success">فعال</span>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer bg-light pt-4 pb-0 text-center">
                  <v-pagination
                      density="compact"
                      v-model="page"
                      :length="4"
                      rounded="circle"
                  ></v-pagination>
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
  name: "ContractsPage",
  components: {ContentLayout}
}
</script>

<style scoped>

</style>