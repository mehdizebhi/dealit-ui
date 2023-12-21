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
              <DataTableComponent
                  :editable="true"
                  :headers="headers"
                  :length="5"
                  :page="1"
                  :rows="rows"
                  id-tag="job-ads"
                  title="آگهی‌های استخدامی">
                <template #activator>
                  <div>
                    <a class="btn btn-falcon-default btn-sm" href="/new">
                      <span class="d-none d-sm-inline-block me-1">آگهی جدید</span>
                      <span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span>
                    </a>
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
  name: "YourJobAdPage",
  components: {DataTableComponent, ContentLayout},
  data() {
    return {
      page: 1,
      search: '',
      status: 'فعال',
      itemsPerPage: 5,
      headers: [
        {title: 'عنوان آگهی', key: 'title', sort: true},
        {title: 'تعداد پروپوزال', key: 'proposals', sort: true},
        {title: 'نوع پرداختی', key: 'type', sort: true},
        {title: 'تاریخ ثبت', key: 'date', sort: true},
        {title: 'وضعیت', key: 'status', sort: false},
      ]
    };
  },
  computed: {
    rows() {
      return [
        {
          title: `<td>
                          <div class="d-flex align-items-center position-relative">
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fw-semi-bold">
                                <a class="stretched-link text-900" href="../pages/user/profile.html">
                                  توسعه سامانه بانکی
                                </a></h6>
                            </div>
                          </div>
                        </td>`,
          proposals: `<td class="align-middle text-center date">
                          <p class="fs--1 mb-0 fw-semi-bold">25</p>
                        </td>`,
          type: `<td class="align-middle">
                          <p class="fs--1 mb-0 fw-semi-bold">200 هزارتومان ساعتی</p>
                        </td>`,
          date: `<td class="align-middle text-center time">
                          <p class="fs--1 mb-0 fw-semi-bold">11 تیر 1402</p>
                        </td>`,
          status: `<td class="align-middle text-center">
                          <span class="badge badge rounded-pill fw-medium fs--2 badge-soft-success">فعال</span>
                        </td>`,
        },
      ];
    }
  }
}
</script>

<style scoped>

</style>