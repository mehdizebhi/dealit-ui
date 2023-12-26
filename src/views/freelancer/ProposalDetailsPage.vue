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
            <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(../../../assets/img/icons/spot-illustrations/corner-4.png);opacity: 0.7;"></div>
            <!--/.bg-holder-->
            <div class="card-body position-relative">
              <h5>
                عنوان آگهی:
                <a href="">استخدام برنامه نویس جاوا</a>
              </h5>
              <p class="fs--1">ارسال در 22 آذر 1402</p>
              <div><strong class="me-2">وضعیت:</strong>
                <div class="badge rounded-pill badge-soft-success fs--2">
                  دیده شده توسط کارفرما
                  <span class="fas fa-check ms-1"></span></div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <h5 class="mb-3 fs-0">جزئیات آگهی</h5>
                  <h6 class="mb-2">Antony Hopkins</h6>
                  <p class="mb-1 fs--1">2393 Main Avenue<br />Penasauka, New Jersey 87896</p>
                  <p class="mb-0 fs--1"> <strong>Email: </strong><a href="mailto:ricky@gmail.com">antony@example.com</a></p>
                  <p class="mb-0 fs--1"> <strong>Phone: </strong><a href="tel:7897987987">7897987987</a></p>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <h5 class="mb-3 fs-0">جزئیات کلاینت</h5>
                  <h6 class="mb-2">Antony Hopkins</h6>
                  <p class="mb-0 fs--1">2393 Main Avenue<br />Penasauka, New Jersey 87896</p>
                  <div class="text-500 fs--1">(Free Shipping)</div>
                </div>
                <div class="col-12 mt-4">
                  <div class="bg-light">
                    <div class="card-body">
                      <div class="card-title">پیشنهادیه:</div>
                      <p class="card-text">
                        پروژه‌های ساعتی نیازی به تعیین نوع پرداختی ندارند چرا که بر اساس مجموع ساعت در هفته پرداختی صورت میگیرد؛ درحالی که پروژه‌های قیمت ثابت نیاز دارند که نوع پرداختی را تعیین کنند. بنابراین باید مرحله های پروژه را تعیین کنید.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <div class="table-responsive fs--1">
                <table class="table table-striped border-bottom">
                  <thead class="bg-200 text-900">
                  <tr>
                    <th class="border-0">مراحل</th>
                    <th class="border-0 text-end">کارمزد</th>
                    <th class="border-0 text-end">پرداختی</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="border-200">
                    <td class="align-middle">
                      <h6 class="mb-0 text-nowrap">مرحله اول</h6>
                      <p class="mb-0">پیاده سازی فرانت اند</p>
                    </td>
                    <td class="align-middle text-end">50,000</td>
                    <td class="align-middle text-end">500,000</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="row g-0 justify-content-end">
                <div class="col-auto">
                  <table class="table table-sm table-borderless fs--1 text-end">
                    <tr>
                      <th class="text-900">مجموع پرداختی: </th>
                      <td class="fw-semi-bold">500,000</td>
                    </tr>
                    <tr>
                      <th class="text-900">کارمزد 10%</th>
                      <td class="fw-semi-bold">50,000</td>
                    </tr>
                    <tr class="border-top">
                      <th class="text-900">مجموع: </th>
                      <td class="fw-semi-bold">450,000</td>
                    </tr>
                  </table>
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
  name: "ProposalDetailsPage",
  components: {ContentLayout}
}
</script>

<style scoped>

</style>