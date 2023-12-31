<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
      <!--Start Main Divs-->
      <slot name="container"></slot>
      <!--End Main Divs-->
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
  </main>
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "MainLayout",
  methods: {
    ...mapMutations(["closeSnackbar"]),
  },
  computed: {
    ...mapGetters(["confirmedEmail", "confirmedPhone", "isUserPresent"]),
    ...mapState(["snackbar", "snackbarType", "snackbarText"])
  }
}
</script>


<style scoped>

</style>