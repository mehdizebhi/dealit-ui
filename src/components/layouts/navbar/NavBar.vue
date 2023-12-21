<template>
  <!-- Top Navbar Start -->
  <TopNavBar :account-info="accountInfo" />
  <!-- Top Navbar End -->
</template>

<script>
import TopNavBar from "./TopNavBar.vue";

export default {
  name: "NavBar",
  props: {
    accountInfo: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  components: {
    TopNavBar
  },
  data() {
    return {
      token: "",
    };
  },
  methods: {
    fluid() {
      var isFluid = JSON.parse(localStorage.getItem('isFluid'));
      if (isFluid) {
        var container = document.querySelector('[data-layout]');
        container.classList.remove('container');
        container.classList.add('container-fluid');
      }
    },
    navbarStyle() {
      var navbarStyle = localStorage.getItem("navbarStyle");
      if (navbarStyle && navbarStyle !== 'transparent') {
        return;
      }
    },
    navbarPosition() {
      var navbarPosition = localStorage.getItem('navbarPosition');
      var navbarTop = document.querySelector('[data-layout] .navbar-top:not([data-double-top-nav');

      if (localStorage.getItem('navbarPosition') === 'double-top') {
        document.documentElement.classList.toggle('double-top-nav-layout');
      }

      if (navbarPosition === 'top') {
        navbarTop.removeAttribute('style');
      } else if (navbarPosition === 'combo') {
        navbarTop.remove(navbarTop);
      } else if (navbarPosition === 'double-top') {
        navbarTop.remove(navbarTop);
      } else {
        navbarTop.remove(navbarTop);
      }
    }
  },
  mounted() {
    this.token = this.$cookies.get("token");
    this.fluid();
    this.navbarStyle();
    this.navbarPosition();
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