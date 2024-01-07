<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main id="top" class="main">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>
          <SearchComponent/>
          <div class="row g-3 mb-3">
            <HomeDashboard :message="getWelcomeMessage" info="خلاصه ای از جزئیات حساب شما" :account-info="null" :client-info="clientInfo" :freelancer-info="freelancerInfo" :is-client="isClient" :is-freelancer="isFreelancer" />
            <CardTinyStats :data="chartData" title="دریافتی ماه جاری" value="25 میلیون تومان" percentage="5.1% ماه قبل" />
            <CardTinyStats :data="chartData" title="ساعات ثبت شده ماه جاری" value="121h 11m" percentage="3.6% ماه قبل" />
            <AccountActivity />
          </div>
        </template>
      </ContentLayout>
      <!--End Content Layout-->
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
import SearchComponent from "@/components/base/SearchComponent.vue";
import CardTinyStats from "@/components/stats/CardTinyStats.vue";
import HomeDashboard from "@/components/dashboard/HomeDashboard.vue";
import AccountActivity from "@/components/dashboard/AccountActivity.vue";
// import {getOverview} from "@/api/account";
import {mapGetters, mapActions} from "vuex";
import {getAccessTokenCookie} from "@/util/cookie-helper";
import {extractClaim} from "@/util/jwt-helper";

export default {
  name: "HomePage",
  components: {
    AccountActivity,
    HomeDashboard,
    CardTinyStats,
    SearchComponent,
    ContentLayout
  },
  data() {
    return {
      token: "",
      chartData: {
        labels: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10"],
        datasets: [
          {
            data: [85,60,120,70,100,15,65,80,60,75,45],
            fill: true,
            borderColor: 'blue',
            tension: 0.5,
            borderWidth: 2
          }
        ]
      },
      accountOverview: {},
    };
  },
  methods: {
    ...mapActions(["getFreelancerInfoFromApi", "getClientInfoFromApi"]),
  },
  computed: {
    ...mapGetters(["freelancerInfo", "clientInfo", "isFreelancer", "isClient", "displayName"]),
    getWelcomeMessage() {
      const currentHour = new Date().getHours();
      let message = 'سلام ' + this.displayName + "، ";
      if (currentHour >= 5 && currentHour < 12) {
        message += 'صبح بخیر';
      } else if (currentHour >= 12 && currentHour < 17) {
        message += 'بعد از ظهر بخیر';
      } else if (currentHour >= 17 && currentHour < 20) {
        message += 'عصر بخیر';
      } else {
        message += 'شب بخیر';
      }
      return message;
    },
  },
  mounted() {
    const token = getAccessTokenCookie();
    if (extractClaim(token, "isFreelancer")) {
      this.getFreelancerInfoFromApi();
    } else if (extractClaim(token, "isClient")) {
      this.getClientInfoFromApi();
    }
  }
};
</script>

<style>
</style>
  