<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main id="top" class="main">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <div class="row g-3 mb-3">
            <div class="col-12 order-xxl-3">
              <DataTableComponent
                  class=""
                  :editable="true"
                  :headers="headers"
                  :length="5"
                  :page="1"
                  :rows="rows"
                  id-tag="projects"
                  title="پروژه‌های شما">
                <template #activator>
                  <div>
                    <button class="btn btn-falcon-default btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#new-project">
                      <span class="d-none d-sm-inline-block me-1">ایجاد پروژه جدید</span>
                      <span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span>
                    </button>
                    <div class="modal fade" id="new-project" tabindex="-1" role="dialog" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 1000px">
                        <div class="modal-content position-relative">
                          <div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                            <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body p-0">
                            <div class="text-start rounded-top-lg py-3 ps-4 pe-6 bg-light">
                              <h4 class="mb-1" id="modalExampleDemoLabel">فضای پروژه جدید</h4>
                            </div>
                            <div class="p-4 pb-0">
                              <v-row>
                                <v-col cols="12">
                                  <v-text-field density="compact" label="نام فضای پروژه" variant="outlined"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-textarea label="توضیحات" variant="outlined"></v-textarea>
                                </v-col>
                              </v-row>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button class="btn btn-secondary text-light" type="button" data-bs-dismiss="modal">لغو</button>
                            <button class="btn btn-primary text-light" type="button">ایجاد</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </DataTableComponent>
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
import DataTableComponent from "@/components/table/DataTableComponent.vue";

export default {
  name: "ProjectsPage",
  components: {DataTableComponent, ContentLayout},
  data() {
    return {
      page: 1,
      search: '',
      status: 'فعال',
      itemsPerPage: 5,
      headers: [
        {title: 'نام پروژه', key: 'title', sort: true},
        {title: 'پیشرفت', key: 'progresses', sort: true},
        {title: 'مجموع ساعات', key: 'totalHours', sort: true},
        {title: 'مجموع هزینه (تومان)', key: 'totalSpends', sort: true},
        {title: 'اعضا', key: 'members', sort: false},
      ]
    };
  },
  computed: {
    rows() {
      return [
        {
          title: ` <div class="d-flex align-items-center position-relative">
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fw-semi-bold">
                                <a class="stretched-link text-900" href="#" data-bs-toggle="modal" data-bs-target="#project-1">
                                  پروژه توسعه بانکی
                                </a></h6>
                            </div>
                          </div>

                    <div class="modal fade" id="project-1" tabindex="-1" role="dialog" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 1000px">
                        <div class="modal-content position-relative">
                          <div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                            <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body p-0">
                            <div class="text-start rounded-top-lg py-3 ps-4 pe-6 bg-light">
                              <h4 class="mb-1" id="modalExampleDemoLabel">پروژه توسعه بانکی</h4>
                            </div>
                            <div class="p-4 pb-0">

                            </div>
                          </div>
                          <div class="modal-footer">
                            <button class="btn btn-secondary text-light" type="button" data-bs-dismiss="modal">لغو</button>
                            <button class="btn btn-primary text-light" type="button">ایجاد</button>
                          </div>
                        </div>
                      </div>
                    </div>`,
          progresses: `<div class="progress rounded-3 worked" style="height: 6px;">
                            <div aria-valuemax="100" aria-valuemin="0"
                                 aria-valuenow="43.72" class="progress-bar bg-progress-gradient rounded-pill" role="progressbar" style="width: 50%"></div>
                          </div>`,
          totalHours: `<p class="fs--1 mb-0 fw-semi-bold">86.5</p>`,
          totalSpends: `<p class="fs--1 mb-0 fw-semi-bold">52,000,000</p>`,
          members: `<div class="avatar-group">
                            <div class="avatar avatar-xl border border-3 border-light rounded-circle">
                              <div class="avatar-name rounded-circle "><span>5</span></div>
                            </div>
                          </div>`,
        },
      ];
    }
  },
}
</script>

<style scoped>

</style>