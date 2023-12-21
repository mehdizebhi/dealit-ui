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
            <div class="col-xxl-8">
              <div class="card overflow-hidden h-100">
                <div class="card-body p-0 management-calendar">
                  <div class="row g-3">
                    <div class="col-md-7">
                      <div class="p-card">
                        <div class="d-flex justify-content-between">
                          <div class="order-md-1">
                            <button class="btn btn-sm border me-1 shadow-sm" data-bs-toggle="tooltip" data-event="prev"
                                    title="Previous" type="button"><span class="fas fa-chevron-left"></span>
                            </button>
                            <button class="btn btn-sm text-secondary border px-sm-4 shadow-sm" data-event="today"
                                    type="button">Today
                            </button>
                            <button class="btn btn-sm border ms-1 shadow-sm" data-bs-toggle="tooltip" data-event="next"
                                    title="Next" type="button"><span class="fas fa-chevron-right"></span>
                            </button>
                          </div>
                          <button class="btn btn-sm text-primary border order-md-0 shadow-none" data-bs-target="#addEventModal"
                                  data-bs-toggle="modal" type="button"><span
                              class="fas fa-plus me-2"></span>New Schedule
                          </button>
                        </div>
                      </div>
                      <!-- Find the JS file for the following calendar at: src/js/calendar/management-calendar.js-->
                      <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                      <div id="managementAppCalendar" class="calendar-outline px-3"
                           data-calendar-option='{"title":"management-calendar-title","day":"management-calendar-day","events":"management-calendar-events"}'></div>
                    </div>
                    <div class="col-md-5 bg-light pt-3">
                      <div class="px-3">
                        <h4 id="management-calendar-title" class="mb-0 fs-0 fs-sm-1 fs-lg-2"></h4>
                        <p id="management-calendar-day" class="text-500 mb-0"></p>
                        <ul id="management-calendar-events"
                            class="list-unstyled mt-3 scrollbar management-calendar-events"></ul>
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

export default {
  name: "CalenderPage",
  components: {ContentLayout}
}
</script>


<style scoped>

</style>