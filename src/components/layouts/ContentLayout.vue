<template>
  <div class="content">
    <!--Start NavBar Layout-->
    <NavBar />
    <!--End NavBar Layout-->

    <!--Start Alert Layout-->
    <AlertComponent v-for="(alert, i) in alerts"
                    :key="'alert-' + i.toString()"
                    :type="alert.type"
                    :text="alert.text"
                    :closable="alert.closable"
    />
    <!--End Alert Layout-->

    <!--Start Content Divs-->
<!--    <v-overlay v-model="loading" location-strategy="connected" scroll-strategy="block">
    </v-overlay>-->
    <slot name="content"></slot>
    <!--End Content Divs-->

    <!--Start Footer Layout-->
    <FooterLayout />
    <!--End Footer Layout-->
  </div>
</template>
  
  <script>
import FooterLayout from "../layouts/FooterLayout.vue";
import NavBar from "@/components/layouts/navbar/NavBar.vue";
import AlertComponent from "@/components/base/AlertComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "ContentLayout",
  components: {
    AlertComponent,
    NavBar,
    FooterLayout,
  },
  data() {
    return {
      alerts: []
    };
  },
  methods: {},
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    ...mapGetters(["confirmedEmail", "confirmedPhone", "isUserPresent"]),
  },
  mounted() {
    if (this.isUserPresent) {
      if (!this.confirmedEmail) {
        this.alerts.push({
          type: 'alert-warning',
          text: 'ایمیل حساب شما هنوز تایید نشده است. لطفا از تنظیمات ایمیل خود را تایید کنید.',
          closable: false
        })
      }
      if (!this.confirmedPhone) {
        this.alerts.push({
          type: 'alert-warning',
          text: 'شماه تلفن همراه حساب شما هنوز تایید نشده است. لطفا از تنظیمات شماره خود را تایید کنید.',
          closable: false
        })
      }
    }
  },
};
</script>
    
    <style>
.dropdown-menu-center {
  right: auto;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
</style>