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
              <DataTableComponent title="قراردادهای شما" :page="1" :length="5" id-tag="contracts" :rows="rows" :headers="headers" />
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
  name: "YourContractsPage",
  components: {
    DataTableComponent,
    ContentLayout,
  },
  data() {
    return {
      page: 1,
      search: '',
      itemsPerPage: 5,
      headers: [
        {title: 'عنوان شغل', key: 'jobTitle', sort: true},
        {title: 'نوع پرداختی', key: 'type', sort: true},
        {title: 'شروع', key: 'startAt', sort: true},
        {title: 'پایان', key: 'endAt', sort: true},
        {title: 'وضعیت', key: 'status', sort: false},
      ],
      rows: [
        {
          jobTitle: `<td>
                          <div class="d-flex align-items-center position-relative">
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fw-semi-bold">
                                <a class="stretched-link text-900" href="../pages/user/profile.html">
                                  توسعه سامانه بانکی
                                </a></h6>
                              <p class="text-500 fs--2 mb-0">استخدام توسط: دیجی پی</p>
                            </div>
                          </div>
                        </td>`,
          type: `<td class="align-middle">
                          <p class="fs--1 mb-0 fw-semi-bold">200 هزارتومان ساعتی</p>
                        </td>`,
          startAt: `<td class="align-middle text-center time">
                          <p class="fs--1 mb-0 fw-semi-bold">11 تیر 1402</p>
                        </td>`,
          endAt: `<td class="align-middle text-center date">
                          <p class="fs--1 mb-0 fw-semi-bold">1 آذر 1402</p>
                        </td>`,
          status: `<td class="align-middle text-center">
                          <span class="badge badge rounded-pill fw-medium fs--2 badge-soft-success">فعال</span>
                        </td>`,
        },
        {
          jobTitle: `<td>
                          <div class="d-flex align-items-center position-relative">
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fw-semi-bold">
                                <a class="stretched-link text-900" href="../pages/user/profile.html">
                                  دیلیت کمپانی
                                </a></h6>
                              <p class="text-500 fs--2 mb-0">استخدام توسط: دیجی پی</p>
                            </div>
                          </div>
                        </td>`,
          type: `<td class="align-middle">
                          <p class="fs--1 mb-0 fw-semi-bold">200 هزارتومان ساعتی</p>
                        </td>`,
          startAt: `<td class="align-middle text-center time">
                          <p class="fs--1 mb-0 fw-semi-bold">11 تیر 1402</p>
                        </td>`,
          endAt: `<td class="align-middle text-center date">
                          <p class="fs--1 mb-0 fw-semi-bold">1 آذر 1402</p>
                        </td>`,
          status: `<td class="align-middle text-center">
                          <span class="badge badge rounded-pill fw-medium fs--2 badge-soft-success">فعال</span>
                        </td>`,
        },
        {
          jobTitle: `<td>
                          <div class="d-flex align-items-center position-relative">
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fw-semi-bold">
                                <a class="stretched-link text-900" href="../pages/user/profile.html">
                                  شرکت نوآوران
                                </a></h6>
                              <p class="text-500 fs--2 mb-0">استخدام توسط: نوآوران</p>
                            </div>
                          </div>
                        </td>`,
          type: `<td class="align-middle">
                          <p class="fs--1 mb-0 fw-semi-bold">200 هزارتومان ساعتی</p>
                        </td>`,
          startAt: `<td class="align-middle text-center time">
                          <p class="fs--1 mb-0 fw-semi-bold">11 تیر 1402</p>
                        </td>`,
          endAt: `<td class="align-middle text-center date">
                          <p class="fs--1 mb-0 fw-semi-bold">1 آذر 1402</p>
                        </td>`,
          status: `<td class="align-middle text-center">
                          <span class="badge badge rounded-pill fw-medium fs--2 badge-soft-success">فعال</span>
                        </td>`,
        },
        {
          jobTitle: `<td>
                          <div class="d-flex align-items-center position-relative">
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fw-semi-bold">
                                <a class="stretched-link text-900" href="../pages/user/profile.html">
                                  توسعه سامانه بانکی
                                </a></h6>
                              <p class="text-500 fs--2 mb-0">استخدام توسط: دیجی پی</p>
                            </div>
                          </div>
                        </td>`,
          type: `<td class="align-middle">
                          <p class="fs--1 mb-0 fw-semi-bold">200 هزارتومان ساعتی</p>
                        </td>`,
          startAt: `<td class="align-middle text-center time">
                          <p class="fs--1 mb-0 fw-semi-bold">11 تیر 1402</p>
                        </td>`,
          endAt: `<td class="align-middle text-center date">
                          <p class="fs--1 mb-0 fw-semi-bold">1 آذر 1402</p>
                        </td>`,
          status: `<td class="align-middle text-center">
                          <span class="badge badge rounded-pill fw-medium fs--2 badge-soft-success">فعال</span>
                        </td>`,
        }
      ],

    };
  },
};
</script>

<style scoped>

</style>