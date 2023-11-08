<template>
  <div class="content">
    <!--Start NavBar Layout-->
    <NavBar />
    <!--End NavBar Layout-->

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

export default {
  name: "ContentLayout",
  components: {
    NavBar,
    FooterLayout,
  },
  data() {
    return {};
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