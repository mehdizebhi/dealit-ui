<template>
    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <main class="main" id="top">
      <div class="container" data-layout="container">
        <!--Start Content Layout-->
        <ContentLayout>
          <template #content>
            <div class="row g-3">
                <div class="col-xxl-9">
                  <div class="card rounded-3 overflow-hidden h-100">
                    <div class="card-body bg-line-chart-gradient d-flex flex-column justify-content-between">
                      <div class="row align-items-center g-0">
                        <div class="col light">
                          <h4 class="text-white mb-0">موجودی کل
                             7,584,600
                            </h4>
                          <p class="fs--1 fw-semi-bold text-white">دریافتی امروز <span class="opacity-50">550,000</span></p>
                        </div>
                        <div class="col-auto d-none d-sm-block"><select class="form-select form-select-sm mb-3" id="dashboard-chart-select">
                            <option value="all">همه پرداخت‌ها</option>
                            <option value="successful" selected="selected">پرداخت‌های موفق</option>
                            <option value="failed">پرداخت‌های ناموفق</option>
                          </select></div>
                      </div><!-- Find the JS file for the following calendar at: src/js/charts/echarts/line-payment.js-->
                      <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                      <div class="echart-line-payment" style="height:200px" data-echart-responsive="true"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-xxl-9">
                  <div class="row g-3 my-1">
                    <div class="col-sm-6 col-md-4">
                      <div class="card overflow-hidden" style="min-width: 12rem">
                        <div class="bg-holder bg-card" style="background-image:url(../../assets/img/icons/spot-illustrations/corner-1.png);"></div>
                        <!--/.bg-holder-->
                        <div class="card-body position-relative">
                          <h6>Customers<span class="badge badge-soft-warning rounded-pill ms-2">-0.23%</span></h6>
                          <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-warning" data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'>0</div><a class="fw-semi-bold fs--1 text-nowrap" href="../app/e-commerce/customers.html">See all<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <div class="card overflow-hidden" style="min-width: 12rem">
                        <div class="bg-holder bg-card" style="background-image:url(../../assets/img/icons/spot-illustrations/corner-2.png);"></div>
                        <!--/.bg-holder-->
                        <div class="card-body position-relative">
                          <h6>Orders<span class="badge badge-soft-info rounded-pill ms-2">0.0%</span></h6>
                          <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-info" data-countup='{"endValue":23.434,"decimalPlaces":2,"suffix":"k"}'>0</div><a class="fw-semi-bold fs--1 text-nowrap" href="../app/e-commerce/orders/order-list.html">All orders<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card overflow-hidden" style="min-width: 12rem">
                        <div class="bg-holder bg-card" style="background-image:url(../../assets/img/icons/spot-illustrations/corner-3.png);"></div>
                        <!--/.bg-holder-->
                        <div class="card-body position-relative">
                          <h6>Revenue<span class="badge badge-soft-success rounded-pill ms-2">9.54%</span></h6>
                          <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif" data-countup='{"endValue":43594,"prefix":"$"}'>0</div><a class="fw-semi-bold fs--1 text-nowrap" href="../index.html">Statistics<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="card overflow-hidden">
                    <div class="card-header d-flex flex-between-center bg-light py-2">
                      <h6 class="mb-0">Transaction Summary</h6>
                      <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-transaction-summary" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-transaction-summary"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body py-0">
                      <div class="table-responsive scrollbar">
                        <table class="table table-dashboard mb-0 fs--1">
                          <tr>
                            <td class="align-middle ps-0 text-nowrap">
                              <div class="d-flex position-relative align-items-center"><img class="d-flex align-self-center me-2" src="../../assets/img/logos/atlassian.png" alt="" width="30" />
                                <div class="flex-1"><a class="stretched-link" href="#!">
                                    <h6 class="mb-0">Atlassian</h6>
                                  </a>
                                  <p class="mb-0">Subscription payment</p>
                                </div>
                              </div>
                            </td>
                            <td class="align-middle px-4" style="width:1%;"><span class="badge fs--1 w-100 badge-soft-success">Completed</span></td>
                            <td class="align-middle px-4 text-end text-nowrap" style="width:1%;">
                              <h6 class="mb-0">$290.00 USD</h6>
                              <p class="fs--2 mb-0">15 May, 2020</p>
                            </td>
                            <td class="align-middle ps-4 pe-1" style="width: 130px; min-width: 130px;"><select class="form-select form-select-sm px-2 bg-transparent">
                                <option>Action</option>
                                <option>Archive</option>
                                <option>Delete</option>
                              </select></td>
                          </tr>
                          <tr>
                            <td class="align-middle ps-0 text-nowrap">
                              <div class="d-flex position-relative align-items-center"><img class="d-flex align-self-center me-2" src="../../assets/img/logos/hubstaff.png" alt="" width="30" />
                                <div class="flex-1"><a class="stretched-link" href="#!">
                                    <h6 class="mb-0">Hubstaff</h6>
                                  </a>
                                  <p class="mb-0">Subscription payment</p>
                                </div>
                              </div>
                            </td>
                            <td class="align-middle px-4" style="width:1%;"><span class="badge fs--1 w-100 badge-soft-warning">Pending</span></td>
                            <td class="align-middle px-4 text-end text-nowrap" style="width:1%;">
                              <h6 class="mb-0">$200.00 USD</h6>
                              <p class="fs--2 mb-0">1 May, 2020</p>
                            </td>
                            <td class="align-middle ps-4 pe-1" style="width: 130px; min-width: 130px;"><select class="form-select form-select-sm px-2 bg-transparent">
                                <option>Action</option>
                                <option>Archive</option>
                                <option>Delete</option>
                              </select></td>
                          </tr>
                          <tr>
                            <td class="align-middle ps-0 text-nowrap">
                              <div class="d-flex position-relative align-items-center"><img class="d-flex align-self-center me-2" src="../../assets/img/logos/bs-5.png" alt="" width="30" />
                                <div class="flex-1"><a class="stretched-link" href="#!">
                                    <h6 class="mb-0">Bootstrap</h6>
                                  </a>
                                  <p class="mb-0">Subscription payment</p>
                                </div>
                              </div>
                            </td>
                            <td class="align-middle px-4" style="width:1%;"><span class="badge fs--1 w-100 badge-soft-warning">Pending</span></td>
                            <td class="align-middle px-4 text-end text-nowrap" style="width:1%;">
                              <h6 class="mb-0">$300.00 USD</h6>
                              <p class="fs--2 mb-0">26 April, 2020</p>
                            </td>
                            <td class="align-middle ps-4 pe-1" style="width: 130px; min-width: 130px;"><select class="form-select form-select-sm px-2 bg-transparent">
                                <option>Action</option>
                                <option>Archive</option>
                                <option>Delete</option>
                              </select></td>
                          </tr>
                          <tr>
                            <td class="align-middle ps-0 text-nowrap">
                              <div class="d-flex position-relative align-items-center"><img class="d-flex align-self-center me-2" src="../../assets/img/logos/asana-logo.png" alt="" width="30" />
                                <div class="flex-1"><a class="stretched-link" href="#!">
                                    <h6 class="mb-0">Asana</h6>
                                  </a>
                                  <p class="mb-0">Subscription payment</p>
                                </div>
                              </div>
                            </td>
                            <td class="align-middle px-4" style="width:1%;"><span class="badge fs--1 w-100 badge-soft-warning">Pending</span></td>
                            <td class="align-middle px-4 text-end text-nowrap" style="width:1%;">
                              <h6 class="mb-0">$320.00 USD</h6>
                              <p class="fs--2 mb-0">14 April, 2020</p>
                            </td>
                            <td class="align-middle ps-4 pe-1" style="width: 130px; min-width: 130px;"><select class="form-select form-select-sm px-2 bg-transparent">
                                <option>Action</option>
                                <option>Archive</option>
                                <option>Delete</option>
                              </select></td>
                          </tr>
                          <tr>
                            <td class="align-middle ps-0 text-nowrap">
                              <div class="d-flex position-relative align-items-center"><img class="d-flex align-self-center me-2" src="../../assets/img/logos/adobe-creative-cloud.png" alt="" width="30" />
                                <div class="flex-1"><a class="stretched-link" href="#!">
                                    <h6 class="mb-0">Adobe Creative Cloud</h6>
                                  </a>
                                  <p class="mb-0">Subscription payment</p>
                                </div>
                              </div>
                            </td>
                            <td class="align-middle px-4" style="width:1%;"><span class="badge fs--1 w-100 badge-soft-warning">Pending</span></td>
                            <td class="align-middle px-4 text-end text-nowrap" style="width:1%;">
                              <h6 class="mb-0">$150.00 USD</h6>
                              <p class="fs--2 mb-0">11 April, 2020</p>
                            </td>
                            <td class="align-middle ps-4 pe-1" style="width: 130px; min-width: 130px;"><select class="form-select form-select-sm px-2 bg-transparent">
                                <option>Action</option>
                                <option>Archive</option>
                                <option>Delete</option>
                              </select></td>
                          </tr>
                          <tr>
                            <td class="align-middle ps-0 text-nowrap">
                              <div class="d-flex position-relative align-items-center"><img class="d-flex align-self-center me-2" src="../../assets/img/logos/coursera.png" alt="" width="30" />
                                <div class="flex-1"><a class="stretched-link" href="#!">
                                    <h6 class="mb-0">Coursera</h6>
                                  </a>
                                  <p class="mb-0">Subscription payment</p>
                                </div>
                              </div>
                            </td>
                            <td class="align-middle px-4" style="width:1%;"><span class="badge fs--1 w-100 badge-soft-warning">Pending</span></td>
                            <td class="align-middle px-4 text-end text-nowrap" style="width:1%;">
                              <h6 class="mb-0">$280.00 USD</h6>
                              <p class="fs--2 mb-0">26 March, 2020</p>
                            </td>
                            <td class="align-middle ps-4 pe-1" style="width: 130px; min-width: 130px;"><select class="form-select form-select-sm px-2 bg-transparent">
                                <option>Action</option>
                                <option>Archive</option>
                                <option>Delete</option>
                              </select></td>
                          </tr>
                          <tr class="border-0">
                            <td class="align-middle ps-0 text-nowrap border-0">
                              <div class="d-flex position-relative align-items-center"><img class="d-flex align-self-center me-2" src="../../assets/img/logos/medium.png" alt="" width="30" />
                                <div class="flex-1"><a class="stretched-link" href="#!">
                                    <h6 class="mb-0">Medium</h6>
                                  </a>
                                  <p class="mb-0">Subscription payment</p>
                                </div>
                              </div>
                            </td>
                            <td class="align-middle px-4 border-0" style="width:1%;"><span class="badge fs--1 w-100 badge-soft-danger">Rejected</span></td>
                            <td class="align-middle px-4 text-end text-nowrap border-0" style="width:1%;">
                              <h6 class="mb-0">$290.00 USD</h6>
                              <p class="fs--2 mb-0">15 March, 2020</p>
                            </td>
                            <td class="align-middle ps-4 pe-1 border-0" style="width: 130px; min-width: 130px;"><select class="form-select form-select-sm px-2 bg-transparent">
                                <option>Action</option>
                                <option>Archive</option>
                                <option>Delete</option>
                              </select></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="card-footer bg-light py-2">
                      <div class="row flex-between-center">
                        <div class="col-auto"><select class="form-select form-select-sm">
                            <option>Last 7 days</option>
                            <option>Last Month</option>
                            <option>Last Year</option>
                          </select></div>
                        <div class="col-auto"><a class="btn btn-link btn-sm px-0 fw-medium" href="#!">View All<span class="fas fa-chevron-right ms-1 fs--2"></span></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </template>
        </ContentLayout>
        <!--End Content Layout-->
        <div class="modal fade" id="authentication-modal" tabindex="-1" role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
          <div class="modal-dialog mt-6" role="document">
            <div class="modal-content border-0">
              <div class="modal-header px-5 position-relative modal-shape-header bg-shape">
                <div class="position-relative z-index-1 light">
                  <h4 class="mb-0 text-white" id="authentication-modal-label">Register</h4>
                  <p class="fs--1 mb-0 text-white">Please create your free Falcon account</p>
                </div><button class="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body py-4 px-5">
                <form>
                  <div class="mb-3"><label class="form-label" for="modal-auth-name">Name</label><input class="form-control" type="text" autocomplete="on" id="modal-auth-name" /></div>
                  <div class="mb-3"><label class="form-label" for="modal-auth-email">Email address</label><input class="form-control" type="email" autocomplete="on" id="modal-auth-email" /></div>
                  <div class="row gx-2">
                    <div class="mb-3 col-sm-6"><label class="form-label" for="modal-auth-password">Password</label><input class="form-control" type="password" autocomplete="on" id="modal-auth-password" /></div>
                    <div class="mb-3 col-sm-6"><label class="form-label" for="modal-auth-confirm-password">Confirm Password</label><input class="form-control" type="password" autocomplete="on" id="modal-auth-confirm-password" /></div>
                  </div>
                  <div class="form-check"><input class="form-check-input" type="checkbox" id="modal-auth-register-checkbox" /><label class="form-label" for="modal-auth-register-checkbox">I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a></label></div>
                  <div class="mb-3"><button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button></div>
                </form>
                <div class="position-relative mt-5">
                  <hr />
                  <div class="divider-content-center">or register with</div>
                </div>
                <div class="row g-2 mt-2">
                  <div class="col-sm-6"><a class="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> google</a></div>
                  <div class="col-sm-6"><a class="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> facebook</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- ===============================================-->
    <!--    End of Main Content-->
    <!-- ===============================================-->
    <!--Start Custom Setting Layout-->
    <!--End Custom Setting Layout-->
</template>
  
  <script>
import ContentLayout from "/src/components/layouts/ContentLayout.vue";

export default {
  name: "WalletPage",
  components: {
    ContentLayout
  },
  data() {
    return {
      token: "",
    };
  },
  methods: {
  },
  mounted() {
    this.token = this.$cookies.get("token");
  },
};
</script>


  <style>
</style>
  