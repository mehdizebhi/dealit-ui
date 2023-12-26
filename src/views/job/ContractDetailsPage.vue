<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <div class="col-12">
            <div class="card theme-wizard mb-5">
              <div class="card-header bg-light pt-3 pb-2">
                <ul class="nav nav-pills mb-3" role="tablist" id="pill-tab1">
                  <li v-for="(tab, i) in tabs" :key="'tab-' + i.toString()" class="nav-item" role="presentation" @click="activeTab = tab.id">
                    <button :class="{'active': tab.id === activeTab, 'bg-success': tab.id === activeTab}" class="nav-link" type="button" role="tab">
                      <span class="fs--1">{{tab.title}}</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="card-body py-4">
                <div class="tab-content pb-4">
                  <div v-for="(tab, i) in tabs" :key="'pane-' + i.toString()" :class="{'active': tab.id === activeTab}" class="tab-pane px-sm-3 px-md-5" role="tabpanel" :id="tab.id">

                    <div v-show="tab.id === 'view-job-ad'">
                      1
                    </div>

                    <div v-show="tab.id === 'invite-freelancer'">
                      2
                    </div>

                    <div v-show="tab.id === 'view-proposals'">
                      3
                    </div>

                    <div v-show="tab.id === 'hire'">
                      4
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
  name: "ContractDetailsPage",
  components: {ContentLayout},
  data() {
    return {
      tabs: [
        {title: 'بررسی اجمالی', id: 'overview'},
        {title: 'فضای کاری', id: 'workroom'},
        {title: 'جزئیات', id: 'details'},
      ],
      activeTab: 'overview',
    };
  },
}
</script>

<style scoped>

</style>