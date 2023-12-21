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
                      <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">قراردادها</h5>
                    </div>
                    <div class="col-6 col-sm-auto ms-auto text-end ps-0">
                      <div>
                        <button class="btn btn-falcon-default btn-sm" type="button">
                          <span class="d-none d-sm-inline-block me-1">ارسال قرارداد جدید</span>
                          <span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="scrollbar">
                    <table class="table mb-0 table-striped fs--2 border-200 overflow-hidden table-running-project">
                      <thead class="bg-light">
                      <tr class="text-800">
                        <th class="sort" data-sort="projects">عنوان پروژه</th>
                        <th class="sort" data-sort="time">پیشرفت</th>
                        <th class="sort text-center" data-sort="worked">مجموع ساعات</th>
                        <th class="sort text-center" data-sort="date">آخرین آپدیت</th>
                        <th class="text-end">اعضا</th>
                        <th class="no-sort"></th>
                      </tr>
                      </thead>
                      <tbody class="list">
                      <tr class="btn-reveal-trigger">
                        <td>
                          <div class="d-flex align-items-center position-relative">
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fw-semi-bold">
                                <a class="stretched-link text-900" href="../pages/user/profile.html">
                                  توسعه سامانه بانکی
                                </a></h6>
                              <p class="text-500 fs--2 mb-0">دیجی پی</p>
                            </div>
                          </div>
                        </td>
                        <td class="align-middle">
                          <div class="progress rounded-3 worked" style="height: 6px;">
                            <div aria-valuemax="100" aria-valuemin="0"
                                 aria-valuenow="43.72" class="progress-bar bg-progress-gradient rounded-pill" role="progressbar" style="width: 50%"></div>
                          </div>
                        </td>
                        <td class="align-middle text-center time">
                          <p class="fs--1 mb-0 fw-semi-bold">12ساعت 50دقیقه</p>
                        </td>
                        <td class="align-middle text-center date">
                          <p class="fs--1 mb-0 fw-semi-bold">1 آذر 1402</p>
                        </td>
                        <td>
                          <div class="avatar-group justify-content-end">
                            <div class="avatar avatar-xl border border-3 border-light rounded-circle">
                              <img alt="" class="rounded-circle" src="../assets/img/team/1-thumb.png"/>
                            </div>
                            <div class="avatar avatar-xl border border-3 border-light rounded-circle">
                              <img alt="" class="rounded-circle" src="../assets/img/team/2-thumb.png"/>
                            </div>
                            <div class="avatar avatar-xl border border-3 border-light rounded-circle">
                              <div class="avatar-name rounded-circle "><span>+2</span></div>
                            </div>
                          </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap text-end">
                          <div class="dropdown font-sans-serif position-static">
                            <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button"
                                    id="order-dropdown-0" data-bs-toggle="dropdown" data-boundary="viewport"
                                    aria-haspopup="true" aria-expanded="false">
                              <svg class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--1" aria-hidden="true" focusable="false"
                                   data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor"
                                      d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
                              </svg><!-- <span class="fas fa-ellipsis-h fs--1"></span> Font Awesome fontawesome.com -->
                            </button>
                            <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-0">
                              <div class="py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item"
                                                                                                   href="#!">Processing</a><a
                                  class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="#!">Delete</a>
                              </div>
                            </div>
                          </div>
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