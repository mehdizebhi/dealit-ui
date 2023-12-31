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
    <slot name="content"></slot>
    <v-snackbar :color="snackbarType" v-model="snackbar" :timeout="5000">
      {{ snackbarText }}
      <template v-slot:actions>
        <v-btn
            color="white"
            variant="text"
            @click="this.closeSnackbar"
        >
          بستن
        </v-btn>
      </template>
    </v-snackbar>
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
import { mapGetters, mapState, mapMutations } from "vuex";

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
  methods: {
    updateAlert(isUserPresent) {
      if (isUserPresent) {
        this.alerts = [];
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
            text: 'شماره تلفن همراه حساب شما هنوز تایید نشده است. لطفا از تنظیمات شماره خود را تایید کنید.',
            closable: false
          })
        }
      }
    },
    ...mapMutations(["closeSnackbar"]),
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    ...mapGetters(["confirmedEmail", "confirmedPhone", "isUserPresent"]),
    ...mapState(["snackbar", "snackbarType", "snackbarText"])
  },
  mounted() {
    this.updateAlert(this.isUserPresent);
  },
  watch: {
    isUserPresent(val) {
      this.updateAlert(val);
    }
  }
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