<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>

          <div class="card mb-3" id="ordersTable" data-list="{&quot;valueNames&quot;:[&quot;order&quot;,&quot;date&quot;,&quot;address&quot;,&quot;status&quot;,&quot;amount&quot;],&quot;page&quot;:10,&quot;pagination&quot;:true}">
            <div class="card-header">
              <div class="row flex-between-center">
                <div class="col-4 col-sm-auto d-flex align-items-center pe-0">
                  <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">تاریخچه کانکشن</h5>
                </div>
                <div class="col-8 col-sm-auto ms-auto text-end ps-0">
                  <div id="orders-actions">
                    <button class="btn btn-success text-light btn-sm" type="button">
                      <span class="d-none d-sm-inline-block me-1">خرید کانکشن</span>
                      <span class="fas fa-coins" data-fa-transform="shrink-3 down-2"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive scrollbar">
                <table class="table table-sm table-striped fs--1 mb-0 overflow-hidden">
                  <thead class="bg-200 text-900">
                  <tr>
                    <th>
                      <div class="form-check fs-0 mb-0 d-flex align-items-center"><input class="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select="{&quot;body&quot;:&quot;table-orders-body&quot;,&quot;actions&quot;:&quot;orders-bulk-actions&quot;,&quot;replacedElement&quot;:&quot;orders-actions&quot;}"></div>
                    </th>
                    <th class="sort pe-1 align-middle white-space-nowrap" data-sort="order">تراکنش</th>
                    <th class="sort pe-1 align-middle white-space-nowrap pe-7" data-sort="date">تاریخ</th>
                    <th class="sort pe-1 align-middle white-space-nowrap" data-sort="address" style="min-width: 12.5rem;">توضیحات</th>
                    <th class="sort pe-1 align-middle white-space-nowrap text-center" data-sort="status">وضعیت</th>
                    <th class="sort pe-1 align-middle white-space-nowrap text-end" data-sort="amount">مبلغ</th>
                    <th class="no-sort"></th>
                  </tr>
                  </thead>
                  <tbody class="list" id="table-orders-body">
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check fs-0 mb-0 d-flex align-items-center"><input class="form-check-input"
                                                                                         type="checkbox" id="checkbox-0"
                                                                                         data-bulk-select-row="data-bulk-select-row">
                      </div>
                    </td>
                    <td class="order py-2 align-middle white-space-nowrap"><a
                        href="../../../app/e-commerce/orders/order-details.html"> <strong>#181</strong></a>
                      <br>توسط: <a href="mailto:ricky@example.com"><strong>مهدی ذبحی</strong></a></td>
                    <td class="date py-2 align-middle">12 تیر 1402</td>
                    <td class="address py-2 align-middle white-space-nowrap">
                      پرداخت حق الزحمه کار در پروژه
                      <p class="mb-0 text-500">ارسالی</p>
                    </td>
                    <td class="status py-2 align-middle text-center fs-0 white-space-nowrap">
                      <span class="badge badge rounded-pill d-block badge-soft-success">تکمیل شد
                       <span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span>
                      </span>
                    </td>
                    <td class="amount py-2 align-middle text-end fs-0 fw-medium">13,250,000</td>
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
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check fs-0 mb-0 d-flex align-items-center"><input class="form-check-input"
                                                                                         type="checkbox" id="checkbox-0"
                                                                                         data-bulk-select-row="data-bulk-select-row">
                      </div>
                    </td>
                    <td class="order py-2 align-middle white-space-nowrap"><a
                        href="../../../app/e-commerce/orders/order-details.html"> <strong>#181</strong></a>
                      <br>توسط: <a href="mailto:ricky@example.com"><strong>مهدی ذبحی</strong></a></td>
                    <td class="date py-2 align-middle">12 تیر 1402</td>
                    <td class="address py-2 align-middle white-space-nowrap">
                      پرداخت حق الزحمه کار در پروژه
                      <p class="mb-0 text-500">دریافتی</p>
                    </td>
                    <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span
                        class="badge badge rounded-pill d-block badge-soft-primary">درحال انجام
                       <span class="ms-1 fas fa-redo" data-fa-transform="shrink-2"></span> </span>
                    </td>
                    <td class="amount py-2 align-middle text-end fs-0 fw-medium">13,250,000</td>
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
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check fs-0 mb-0 d-flex align-items-center"><input class="form-check-input"
                                                                                         type="checkbox" id="checkbox-0"
                                                                                         data-bulk-select-row="data-bulk-select-row">
                      </div>
                    </td>
                    <td class="order py-2 align-middle white-space-nowrap"><a
                        href="../../../app/e-commerce/orders/order-details.html"> <strong>#181</strong></a>
                      <br>توسط: <a href="mailto:ricky@example.com"><strong>مهدی ذبحی</strong></a></td>
                    <td class="date py-2 align-middle">12 تیر 1402</td>
                    <td class="address py-2 align-middle white-space-nowrap">
                      پرداخت حق الزحمه کار در پروژه
                      <p class="mb-0 text-500">ارسالی</p>
                    </td>
                    <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span
                        class="badge badge rounded-pill d-block badge-soft-secondary">ناموفق
                       <span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="amount py-2 align-middle text-end fs-0 fw-medium">13,250,000</td>
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
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check fs-0 mb-0 d-flex align-items-center"><input class="form-check-input"
                                                                                         type="checkbox" id="checkbox-0"
                                                                                         data-bulk-select-row="data-bulk-select-row">
                      </div>
                    </td>
                    <td class="order py-2 align-middle white-space-nowrap"><a
                        href="../../../app/e-commerce/orders/order-details.html"> <strong>#181</strong></a>
                      <br>توسط: <a href="mailto:ricky@example.com"><strong>مهدی ذبحی</strong></a></td>
                    <td class="date py-2 align-middle">12 تیر 1402</td>
                    <td class="address py-2 align-middle white-space-nowrap">
                      پرداخت حق الزحمه کار در پروژه
                      <p class="mb-0 text-500">ارسالی</p>
                    </td>
                    <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span
                        class="badge badge rounded-pill d-block badge-soft-warning">درحال انتظار
                       <span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="amount py-2 align-middle text-end fs-0 fw-medium">13,250,000</td>
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
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check fs-0 mb-0 d-flex align-items-center"><input class="form-check-input"
                                                                                         type="checkbox" id="checkbox-0"
                                                                                         data-bulk-select-row="data-bulk-select-row">
                      </div>
                    </td>
                    <td class="order py-2 align-middle white-space-nowrap"><a
                        href="../../../app/e-commerce/orders/order-details.html"> <strong>#181</strong></a>
                      <br>توسط: <a href="mailto:ricky@example.com"><strong>مهدی ذبحی</strong></a></td>
                    <td class="date py-2 align-middle">12 تیر 1402</td>
                    <td class="address py-2 align-middle white-space-nowrap">
                      پرداخت حق الزحمه کار در پروژه
                      <p class="mb-0 text-500">ارسالی</p>
                    </td>
                    <td class="status py-2 align-middle text-center fs-0 white-space-nowrap">
                      <span class="badge badge rounded-pill d-block badge-soft-danger">لغو شد
                       <span class="ms-1 far fa-window-close" data-fa-transform="shrink-2"></span>
                      </span>
                    </td>
                    <td class="amount py-2 align-middle text-end fs-0 fw-medium">13,250,000</td>
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
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-center">
                <button class="btn btn-sm btn-falcon-default me-1 disabled" type="button" title="Previous" data-list-pagination="prev" disabled=""><svg class="svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg><!-- <span class="fas fa-chevron-left"></span> Font Awesome fontawesome.com --></button>
                <ul class="pagination mb-0"><li class="active"><button class="page" type="button" data-i="1" data-page="10">1</button></li><li><button class="page" type="button" data-i="2" data-page="10">2</button></li><li><button class="page" type="button" data-i="3" data-page="10">3</button></li></ul><button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><svg class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg><!-- <span class="fas fa-chevron-right">             </span> Font Awesome fontawesome.com --></button>
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
  name: "ConnectionHistoryPage",
  components: {ContentLayout}
}
</script>

<style scoped>

</style>