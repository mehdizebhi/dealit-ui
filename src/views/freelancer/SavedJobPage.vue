<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main id="top" class="main">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <div class="card mb-3">
            <div class="card-body">
              <div class="row flex-between-center">
                <div class="col-sm-auto mb-2 mb-sm-0">
                  <h6 class="mb-0">10 شغل ذخیره شده</h6>
                </div>
                <div class="col-sm-auto">
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="card-body p-0 overflow-hidden">
              <div class="row g-0">

                <JobAdCard/>
                <JobAdCard/>
                <JobAdCard/>
                <JobAdCard/>

              </div>
            </div>
            <div class="text-center">
              <v-pagination
                  v-model="page"
                  :length="4"
                  rounded="circle"
              ></v-pagination>
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
import JobAdCard from "@/components/job/JobAdCard.vue";

export default {
  name: "SavedJobPage",
  components: {JobAdCard, ContentLayout},
  data() {
    return {
      page: 1
    };
  }
}
</script>

<style scoped>

</style>