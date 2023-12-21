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
            <HomeDashboard :account-overview="accountOverview" />
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
      accountOverview: {
        message: 'سلام، وقت بخیر',
        info: 'خلاصه ای جزئیات حساب شما',
        freelancer: {
          jobs: '3',
          proposals: '12',
          income: '39,000,000'
        },
        client: {
          contracts: '5',
          proposals: '22',
          outcome: '53,000,000'
        }
      },
    };
  },
  methods: {
  }
};
</script>

<style>
</style>
  