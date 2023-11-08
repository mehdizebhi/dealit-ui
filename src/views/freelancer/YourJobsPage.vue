<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>

          <div class="card mb-3">
            <div class="card-header">
              <h5 class="mb-0">شغل‌ها (قراردادهای فعال)</h5>
            </div>
            <div class="card-body bg-light">

              <div id="tableExample3" data-list='{"valueNames":["title","hired","type", "date", "status"],"page":5,"pagination":true}'>
                <div class="row justify-content-end g-0">
                  <div class="col-auto col-sm-5 mb-3">
                    <form>
                      <div class="input-group"><input class="form-control form-control-sm shadow-none search" type="search" placeholder="جستوجو..." aria-label="search" />
                        <div class="input-group-text bg-transparent"><span class="fa fa-search fs--1 text-600"></span></div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="table-responsive scrollbar">
                  <table class="table table-striped fs--1 mb-0">
                    <thead class="bg-200 text-900">
                    <tr>
                      <th class="sort" data-sort="title">عنوان</th>
                      <th class="sort" data-sort="hired">استخدام توسط</th>
                      <th class="sort" data-sort="type">نوع پرداختی</th>
                      <th class="sort" data-sort="date">تاریخ</th>
                      <th class="sort" data-sort="status">وضعیت</th>
                      <th>عملیات</th>
                    </tr>
                    </thead>
                    <tbody class="list">
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="d-flex justify-content-center mt-3">
                  <button class="btn btn-sm btn-falcon-default me-1" type="button" title="Previous" data-list-pagination="prev">
                    <span class="fas fa-chevron-right"></span>
                  </button>
                  <ul class="pagination mb-0"></ul>
                  <button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next">
                    <span class="fas fa-chevron-left"> </span>
                  </button>
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
  name: "YourJobsPage",
  components: {ContentLayout}
}
</script>

<style scoped>

</style>