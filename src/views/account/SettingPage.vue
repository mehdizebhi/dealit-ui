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
            <div class="col-lg-4 col-xl-3">
              <div class="sticky-sidebar top-navbar-height">
                <div class="card">
                  <div class="card-body">
                    <div class="row g-3 align-items-center">
                      <div class="col-md-6 col-lg-12 text-center">
                        <img class="img-fluid rounded-3" :src="pictureHref" alt="" />
                      </div>
                      <div class="col-md-6 col-lg-12">
                        <div class="row row-cols-1 g-0">
                          <div class="col text-center">
                            <h4>{{displayName}}</h4>
                          </div>
                          <div class="nav col mt-4 mt-md-5 mt-lg-4 order-md-1 order-lg-0">
                            <a v-for="(nav, i) in tabs" :id="nav.activator.id" :key="'nav-' + i.toString()"
                               :aria-controls="nav.pane.id" :aria-selected="nav.active"
                               :class="{'active': nav.active}"
                               :href="'#' + nav.pane.id"
                               class="btn btn-secondary btn-md w-100 mb-3"
                               data-bs-toggle="tab" role="tab">{{ nav.activator.title }}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-xl-9">
              <div class="tab-content mb-3">
                <div v-for="(nav, i) in tabs" :id="nav.pane.id"
                     :key="'tab-' + i.toString()" :aria-labelledby="nav.activator.id"
                     :class="{'show': nav.active, 'active': nav.active}"
                     class="tab-pane fade" role="tabpanel">

                  <div v-if="nav.pane.id === 'info-tab'">
                    <div class="card mb-4">
                      <div class="card-body">
                        <div class="row flex-between-center">
                          <form class="needs-validation" @submit.prevent="" novalidate="">
                            <div class="mb-3">
                              <label class="form-label" for="setting-username">نام کاربری</label>
                              <div class="input-group">
                                <input dir="ltr" :disabled="!editUsername" v-model="newUsername" id="setting-username" pattern="^[a-zA-Z][a-zA-Z0-9_]{4,}$" class="form-control" type="text" required=""/>
                                <button @click="editUsername = true" v-show="!editUsername" class="input-group-text">
                                  <span class="fas fa-edit"></span>
                                </button>
                                <button v-show="editUsername" @click="changeUsername" class="input-group-text" type="submit">
                                  <span class="fas fa-check"></span>
                                </button>
                                <button @click="editUsername = false; newUsername = username" v-show="editUsername" class="input-group-text">
                                  <span class="fas fa-times"></span>
                                </button>
                              </div>
                              <div class="invalid-feedback">نام کاربری باید حداقل 5 کاراکتر باشد و ترکیبی از حروف انگلیسی، اعداد و _ باشد</div>
                            </div>
                            <div class="mb-3">
                              <label class="form-label" for="setting-display-name">نام نمایشی</label>
                              <div class="input-group">
                                <input :disabled="!editDisplayName" v-model="newDisplayName" id="setting-display-name" class="form-control" type="text" required=""/>
                                <button @click="editDisplayName = true" v-show="!editDisplayName" class="input-group-text">
                                  <span class="fas fa-edit"></span>
                                </button>
                                <button v-show="editDisplayName" @click="changeDisplayName" class="input-group-text" type="submit">
                                  <span class="fas fa-check"></span>
                                </button>
                                <button @click="editDisplayName = false; newDisplayName = displayName" v-show="editDisplayName" class="input-group-text">
                                  <span class="fas fa-times"></span>
                                </button>
                              </div>
                              <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                            </div>
                            <div class="mb-1">
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-4">
                      <div class="card-body">
                        <div class="row flex-between-center">
                          <form class="needs-validation" @submit.prevent="" novalidate="">
                            <div class="mb-3">
                              <label class="form-label" for="setting-email">
                                ایمیل
                                <span v-if="confirmedEmail" class="badge rounded-pill badge-soft-success me-2">
                                  <span>تایید شده</span>
                                  <span class="fas fa-check ms-1"></span>
                                </span>
                                <span v-else class="badge rounded-pill badge-soft-warning me-2">
                                  <span>تایید نشده</span>
                                  <span class="fas fa-exclamation-triangle ms-1"></span>
                                </span>
                              </label>
                              <div class="input-group">
                                <input :disabled="!editEmail" v-model="newEmail" dir="ltr" id="setting-email" class="form-control" type="email" required=""/>
                                <button @click="editEmail = true" v-show="!editEmail" class="input-group-text">
                                  <span class="fas fa-edit"></span>
                                </button>
                                <button v-show="editEmail" @click="changeEmail" class="input-group-text" type="submit">
                                  <span class="fas fa-check"></span>
                                </button>
                                <button @click="editEmail = false; newEmail = email" v-show="editEmail" class="input-group-text">
                                  <span class="fas fa-times"></span>
                                </button>
                              </div>
                              <div class="invalid-feedback">ایمیل وارد شده نامعتبر است</div>
                            </div>
                            <div class="mb-1">
                            </div>
                          </form>
                          <router-link v-if="!confirmedEmail" class="fs--1" :to="{name: 'verify-email'}">
                            <span class="d-inline-block ms-1">&larr;</span>
                            تایید ایمیل
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-4">
                      <div class="card-body">
                        <div class="row flex-between-center">
                          <form class="needs-validation" @submit.prevent="" novalidate="">
                            <div class="mb-3">
                              <label class="form-label" for="setting-phone-number">
                                تلفن همراه
                                <span v-if="confirmedPhone" class="badge rounded-pill badge-soft-success me-2">
                                  <span>تایید شده</span>
                                  <span class="fas fa-check ms-1"></span>
                                </span>
                                <span v-else class="badge rounded-pill badge-soft-warning me-2">
                                  <span>تایید نشده</span>
                                  <span class="fas fa-exclamation-triangle ms-1"></span>
                                </span>
                              </label>
                              <div class="input-group">
                                <input :disabled="!editPhone" v-model="newPhoneNumber" dir="ltr" id="setting-phone-number" pattern="^09\d{9}$" class="form-control" type="tel" required=""/>
                                <button @click="editPhone = true" v-show="!editPhone" class="input-group-text">
                                  <span class="fas fa-edit"></span>
                                </button>
                                <button v-show="editPhone" @click="changePhoneNumber" class="input-group-text" type="submit">
                                  <span class="fas fa-check"></span>
                                </button>
                                <button @click="editPhone = false; newPhoneNumber = phoneNumber" v-show="editPhone" class="input-group-text">
                                  <span class="fas fa-times"></span>
                                </button>
                              </div>
                              <div class="invalid-feedback">تلفن همراه نامعتبر است</div>
                            </div>
                            <div class="mb-1">
                            </div>
                          </form>
                          <router-link v-if="!confirmedPhone" class="fs--1" :to="{name: 'verify-phone'}">
                            <span class="d-inline-block ms-1">&larr;</span>
                            تایید شماره همراه
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header bg-light">
                        <h6 class="mb-0">ویرایش رمز عبور</h6>
                      </div>
                      <div class="card-body">
                        <div class="row flex-between-center">
                          <form class="needs-validation" @submit.prevent="" novalidate="">
                            <div class="mb-3">
                              <label class="form-label" for="setting-old-password">رمز عبور جاری</label>
                              <input dir="ltr" id="setting-old-password" autocomplete="" pattern="^.{6,}$" class="form-control" :type="passwordType" required=""/>
                              <div class="invalid-feedback">رمز عبور نامعتبر است</div>
                            </div>
                            <div class="mb-3">
                              <label class="form-label" for="setting-new-password">رمز عبور جدید</label>
                              <input dir="ltr" id="setting-new-password" autocomplete="" pattern="^.{6,}$" class="form-control" :type="passwordType" required=""/>
                              <div class="invalid-feedback">رمز عبور نامعتبر است</div>
                            </div>
                            <div class="mb-3">
                              <label class="form-label" for="setting-confirm-new-password">تکرار رمز عبور جدید</label>
                              <input dir="ltr" id="setting-confirm-new-password" autocomplete="" pattern="^.{6,}$" class="form-control" :type="passwordType" required=""/>
                              <div class="invalid-feedback">رمز عبور نامعتبر است</div>
                            </div>
                            <div class="form-check mb-4">
                              <input class="form-check-input" id="show-password" type="checkbox" v-model="showPassword" />
                              <label class="form-check-label" for="show-password">نمایش رمز عبور</label>
                            </div>
                            <div class="mb-1">
                              <button class="btn btn-primary d-block w-100 mt-5 text-light" type="submit" name="submit">ویرایش رمز عبور</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="nav.pane.id === 'payment-tab'">
                    <div v-if="this.isCreditCardPresent">
                      <div class="row g-3 mb-3">
                        <div v-show="!editCard" class="col-12">
                          <div class="card h-100">
                            <div class="card-header bg-light d-flex flex-between-center py-2">
                              <h6 class="mb-0">حساب بانکی فعال شما</h6>
                              <div class="dropdown font-sans-serif position-static d-inline-block btn-reveal-trigger">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" id="dropdown-payment-methods" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-payment-methods">
                                  <button @click="editCard = true" class="dropdown-item">ویرایش اطلاعات</button>
                                </div>
                              </div>
                            </div>
                            <div class="card-body">
                              <div class="row g-3 h-100">
                                <div class="col-sm-6 col-lg-12">
                                  <div class="card position-relative rounded-4">
                                    <div class="bg-holder bg-card rounded-4" style="background-image:url(../../assets/img/icons/spot-illustrations/corner-2.png);"></div>
                                    <!--/.bg-holder-->
                                    <div class="card-body p-3 pt-5 pt-xxl-4"><img class="mb-3" src="../../assets/img/icons/chip.png" alt="" width="30" />
                                      <h6 class="text-primary font-base lh-1 mb-1">{{ creditCardInfo.cardNumber }}</h6>
                                      <h6 class="fs--2 fw-semi-bold text-facebook mb-3">{{ creditCardInfo.expiredMonth }}
                                        /
                                        {{ creditCardInfo.expiredYear }}</h6>
                                      <h6 class="mb-0 text-facebook">{{ creditCardInfo.ownerName }}</h6><img class="position-absolute end-0 bottom-0 mb-2 me-2" src="../../assets/img/icons/master-card.png" alt="" width="70" />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-lg-12">
                                  <table class="table table-borderless fw-medium font-sans-serif fs--1 mb-2">
                                    <tbody>
                                    <tr>
                                      <td class="p-1" style="width: 35%;">نوع:</td>
                                      <td class="p-1 text-600">{{ creditCardInfo.type }}</td>
                                    </tr>
                                    <tr>
                                      <td class="p-1" style="width: 35%;">صادرکننده:</td>
                                      <td class="p-1 text-600">{{ creditCardInfo.bank }}</td>
                                    </tr>
                                    <tr>
                                      <td class="p-1" style="width: 35%;">شماره شبا:</td>
                                      <td class="p-1 text-600">{{ creditCardInfo.iban }}</td>
                                    </tr>
                                    </tbody>
                                  </table>
                                  <span v-if="creditCardInfo.confirmed" class="badge rounded-pill badge-soft-success me-2">
                                    <span>تایید شده</span>
                                    <span class="fas fa-check ms-1" data-fa-transform="shrink-4"></span>
                                  </span>
                                  <span v-else class="badge rounded-pill badge-soft-warning">
                                    <span>تایید نشده</span>
                                    <span class="fas fa-exclamation-triangle ms-1" data-fa-transform="shrink-4"></span>
                                  </span>
                                  <span v-if="creditCardInfo.payable" class="badge rounded-pill badge-soft-success me-2">
                                    <span>قابل پرداخت</span>
                                    <span class="fas fa-check ms-1" data-fa-transform="shrink-4"></span>
                                  </span>
                                  <span v-else class="badge rounded-pill badge-soft-warning">
                                    <span>غیرقابل پرداخت</span>
                                    <span class="fas fa-exclamation-triangle ms-1" data-fa-transform="shrink-4"></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-show="editCard" class="card">
                        <div class="card-body">
                          <div class="row flex-between-center">
                            <form class="needs-validation" @submit.prevent="" novalidate="">
                              <div class="row">
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-number">شماره کارت</label>
                                  <input dir="ltr" id="setting-card-number" placeholder="1234 5678 9012 3456" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-iban">شماره شبا</label>
                                  <div class="input-group">
                                    <input dir="ltr" id="setting-card-iban" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                    <span class="input-group-text">IR</span>
                                  </div>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-6 mb-3">
                                  <label class="form-label" for="setting-card-month-expired">ماه انقضا</label>
                                  <input dir="ltr" id="setting-card-month-expired" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-6 mb-3">
                                  <label class="form-label" for="setting-card-year-expired">سال انقضا</label>
                                  <input dir="ltr" id="setting-card-year-expired" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-bank">بانک صادرکننده</label>
                                  <input dir="ltr" id="setting-card-bank" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-owner-name">نام و نام خانوادگی</label>
                                  <input dir="ltr" id="setting-card-owner-name" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-type">نوع کارت</label>
                                  <input dir="ltr" id="setting-card-type" placeholder="" pattern="" class="form-control" type="text"/>
                                </div>
                                <div class="mb-1">
                                  <button class="btn btn-primary d-block w-100 mt-5 text-light" type="button">ذخیره اطلاعات</button>
                                  <button @click="editCard = false" class="btn btn-secondary d-block w-100 mt-2 text-light" type="button">لغو</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="alert alert-warning" role="alert">شما حساب بانکی اضافه نکردید. لطفا حساب بانکی خود را از قسمت زیر اضافه و تایید کنید.</div>
                      <div class="card">
                        <div class="card-body">
                          <div class="row flex-between-center">
                            <form class="needs-validation" @submit.prevent="" novalidate="">
                              <div class="row">
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-number">شماره کارت</label>
                                  <input dir="ltr" id="setting-card-number" placeholder="1234 5678 9012 3456" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-iban">شماره شبا</label>
                                  <div class="input-group">
                                    <input dir="ltr" id="setting-card-iban" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                    <span class="input-group-text">IR</span>
                                  </div>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-6 mb-3">
                                  <label class="form-label" for="setting-card-month-expired">ماه انقضا</label>
                                  <input dir="ltr" id="setting-card-month-expired" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-6 mb-3">
                                  <label class="form-label" for="setting-card-year-expired">سال انقضا</label>
                                  <input dir="ltr" id="setting-card-year-expired" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-bank">بانک صادرکننده</label>
                                  <input dir="ltr" id="setting-card-bank" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-owner-name">نام و نام خانوادگی</label>
                                  <input dir="ltr" id="setting-card-owner-name" placeholder="" pattern="" class="form-control" type="text" required=""/>
                                  <div class="invalid-feedback">این فیلد نمی تواند خالی باشد</div>
                                </div>
                                <div class="col-12 mb-3">
                                  <label class="form-label" for="setting-card-type">نوع کارت</label>
                                  <input dir="ltr" id="setting-card-type" placeholder="" pattern="" class="form-control" type="text"/>
                                </div>
                                <div class="mb-1">
                                  <button class="btn btn-primary d-block w-100 mt-5 text-light" type="button">ذخیره اطلاعات</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="nav.pane.id === 'privacy-tab'">
                    <div class="card bg-soft-danger mb-4">
                      <div class="card-body">
                        <div class="row flex-between-center">
                          <div class="col-12">
                            <h3>حذف حساب کاربری</h3>
                            <p class="mb-0">
                              لطفا اگر قصد حذف حساب خود از دیلیت دارید از لینک زیر اقدام فرمایید. لازم است توجه کنید که بعد از حذف حساب امکان بازگشت حساب شما وجود نخواهد داشت و تمامی اطلاعات شما از پایگاه داده حذف خواهد شد.
                            </p>
                            <a class="btn btn-link btn-sm ps-0 mt-2" href="/delete-account" target="_blank">
                              حذف حساب دیلیت
                             <span class="fas fa-chevron-left ms-1 fs--2"></span>
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="nav.pane.id === 'notification-tab'">
                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="row flex-between-center px-2 mx-1">
                          <div class="col-12 border rounded px-4 pb-2 py-4 mb-3">
                            <div class="mb-4">
                              <h5>
                                وبسایت
                              </h5>
                            </div>
                            <div class="form-check form-switch border-bottom mb-2">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان شغل ها به ایمیل</label>
                            </div>
                            <div class="form-check form-switch border-bottom mb-2">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان شغل ها به ایمیل</label>
                            </div>
                            <div class="form-check form-switch border-bottom mb-2">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان شغل ها به ایمیل</label>
                            </div>
                            <div class="form-check form-switch border-bottom mb-2">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان شغل ها به ایمیل</label>
                            </div>
                            <div class="form-check form-switch border-bottom mb-2">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان شغل ها به ایمیل</label>
                            </div>
                            <div class="form-check form-switch">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان پرداخت ها به ایمیل</label>
                            </div>
                          </div>
                          <div class="col-12 border rounded px-4 pb-2 py-4 mb-3">
                            <div class="mb-4">
                              <h5>
                                ایمیل
                              </h5>
                            </div>
                            <div class="form-check form-switch border-bottom mb-2">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان شغل ها به ایمیل</label>
                            </div>
                            <div class="form-check form-switch">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان پرداخت ها به ایمیل</label>
                            </div>
                          </div>
                          <div class="col-12 border rounded px-4 pb-2 py-4 mb-3">
                            <div class="mb-4">
                              <h5>
                                تلفن همراه
                              </h5>
                            </div>
                            <div class="form-check form-switch border-bottom mb-2">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان شغل ها به ایمیل</label>
                            </div>
                            <div class="form-check form-switch">
                              <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked="" />
                              <label class="form-check-label" for="flexSwitchCheckChecked">ارسال اعلان پرداخت ها به ایمیل</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="nav.pane.id === 'subscription-tab'">
                    <div class="card mb-4">
                      <div class="card-header d-flex flex-between-center">
                        <h5 class="mb-0">وضعیت اشتراک</h5>
                      </div>
                      <div class="card-body">
                        <div class="progress mb-3 rounded-pill" style="height: 6px;">
                          <div class="progress-bar bg-progress-gradient rounded-pill" role="progressbar" style="width: 75%" aria-valuenow="43.72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mb-0 text-primary">24 روز مانده</p>
                        <p class="mb-0 fs--2 text-800">اتمام در: 18 دی 1402</p>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="row g-0">
                          <div class="col-12 mb-3">
                            <div class="row justify-content-center justify-content-sm-between">
                              <div class="col-sm-auto text-center">
                                <h5 class="d-inline-block">فعالسازی اشتراک</h5><span class="badge badge-soft-success rounded-pill ms-2">10% تخفیف</span>
                              </div>
<!--                              <div class="col-sm-auto d-flex justify-content-center mt-1 mt-sm-0">
                                <label class="form-check-label me-2" for="customSwitch1">ماهیانه</label>
                                <div class="form-check form-switch mb-0">
                                  <input class="form-check-input" id="customSwitch1" type="checkbox" checked="checked" />
                                  <label class="form-check-label align-top" for="customSwitch1">سالانه</label>
                                </div>
                              </div>-->
                            </div>
                          </div>
                          <div class="col-lg-6 border-top border-bottom">
                            <div class="h-100">
                              <div class="text-center p-4">
                                <h3 class="fw-normal my-0">پایه</h3>
                                <p class="mt-3">مناسب برای فریلنسرها و کارفرماهای تازه کار</p>
                                <h2 class="fw-medium my-4">
                                  0
                                  <sup class="fw-normal fs-2 me-1">تومان</sup>
                                  <small class="fs--1 text-700">/ ماهانه</small>
                                </h2><button class="btn btn-success" disabled>فعال</button>
                              </div>
                              <hr class="border-bottom-0 m-0" />
                              <div class="text-start px-sm-4 py-4">
                                <h5 class="fw-medium fs-0">قابلیت‌های این پلن:</h5>
                                <ul class="list-unstyled mt-3">
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span>تسویه حساب هفتگی</li>
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span> پرداخت امن <div class="badge badge-soft-success rounded-pill">جدید</div></li>
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span>ارسال نامحدود آگهی شغل</li>
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span>ارسال نامحدود پروپوزال</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 border-top border-bottom dark__bg-1000 px-4 px-lg-0" style="background-color: rgba(115, 255, 236, 0.18);">
                            <div class="h-100">
                              <div class="text-center p-4">
                                <h3 class="fw-normal my-0">ویژه</h3>
                                <p class="mt-3">مناسب برای کسب و کارهای بزرگ</p>
                                <h2 class="fw-medium my-4">
                                  59,000
                                  <sup class="fw-normal fs-2 me-1">تومان</sup>
                                  <small class="fs--1 text-700">/ ماهانه</small>
                                </h2>
                                <a class="btn btn-primary" href="/">خرید اشتراک</a>
                              </div>
                              <hr class="border-bottom-0 m-0" />
                              <div class="text-start px-sm-4 py-4">
                                <h5 class="fw-medium fs-0">همه قابلیت‌های پلن رایگان، به علاوه:</h5>
                                <ul class="list-unstyled mt-3">
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span>تسویه حساب روزانه</li>
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span>پرداخت خودکار</li>
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span>بوست پروپوزال</li>
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span>ارسال آگهی ویژه</li>
                                  <li class="py-1"><span class="me-2 fas fa-check text-success"> </span>100 کانکشن رایگان</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SettingPage",
  components: {ContentLayout},
  data() {
    return {
      activeTab: "info-nav",
      defaultTab: 'info',
      tabs: [
        {active: true, activator: {id: 'info-nav', title: 'اطلاعات حساب'}, pane: {id: 'info-tab'}},
        {active: false, activator: {id: 'payment-nav', title: 'پرداخت و حساب بانکی'}, pane: {id: 'payment-tab'}},
        {active: false, activator: {id: 'privacy-nav', title: 'حریم خصوصی'}, pane: {id: 'privacy-tab'}},
        {active: false, activator: {id: 'notification-nav', title: 'اعلان ها'}, pane: {id: 'notification-tab'}},
        {active: false, activator: {id: 'subscription-nav', title: 'اشتراک'}, pane: {id: 'subscription-tab'}},
      ],
      editUsername: false,
      editDisplayName: false,
      editEmail: false,
      editPhone: false,
      editCard: false,
      showPassword: false,
      passwordType: "password",
      newUsername: "",
      newEmail: "",
      newDisplayName: "",
      newPhoneNumber: "",
    };
  },
  watch: {
    showPassword(value) {
      if (value) {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
  },
  computed: {
    ...mapGetters(["username", "displayName", "pictureHref", "email", "phoneNumber", "confirmedPhone", "confirmedEmail", "creditCardInfo", "isCreditCardPresent"]),
  },
  methods: {
    async changeUsername() {
      this.editUsername = false;
      await this.updateUsername(this.newUsername);
    },
    async changeEmail() {
      this.editEmail = false;
      await this.updateEmail(this.newEmail);
    },
    async changeDisplayName() {
      this.editDisplayName = false;
      await this.updateDisplayName(this.newDisplayName);
    },
    async changePhoneNumber() {
      this.editPhone = false;
      await this.updatePhoneNumber(this.newPhoneNumber);
    },
    ...mapActions(["getUserInfo", "updateUsername", "updateEmail", "updateDisplayName", "updatePhoneNumber", "getCreditCardFromApi"]),
  },
  async created() {
    await this.getUserInfo();
    this.newUsername = this.username;
    this.newEmail = this.email;
    this.newDisplayName = this.displayName;
    this.newPhoneNumber = this.phoneNumber;
    await this.getCreditCardFromApi();
  },
}
</script>

<style scoped>
.btn.active {
  color: var(--falcon-btn-active-color);
  background-color: #2c7be5;
  border-color: #2c7be5;
  box-shadow: var(--falcon-btn-active-shadow);
}
</style>