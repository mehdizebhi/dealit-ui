<template>
  <div class="content">
    <!--Start NavBar Layout-->
    <NavBar :account-info="accountInfo" />
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

export default {
  name: "ContentLayout",
  components: {
    AlertComponent,
    NavBar,
    FooterLayout,
  },
  props: {
    accountInfo: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      alerts: []
    };
  },
  methods: {},
  mounted() {},
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