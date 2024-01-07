<template>
  <li class="alert mb-0 rounded-0 py-3 px-card border-top border-x-0 border-top-0" :class="classObject">
    <div class="row flex-between-center">
      <div class="col">
        <div class="d-flex">
          <div
              class="fas fa-circle mt-1 fs--2"
          ></div>
          <p class="fs--1 ps-2 mb-0">
            <strong>{{ title }}</strong>
            {{ text }}
          </p>
        </div>
      </div>
      <div class="col-auto d-flex align-items-center">
        <router-link class="alert-link fs--1 fw-medium" :to="{path: link}"
        >{{ linkTitle }}<i
            class="fas fa-chevron-left ms-1 fs--2"
        ></i
        ></router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "DashboardTinyNotification",
  props: {
    type: String,
    title: String,
    text: String,
    link: String,
    linkTitle: String
  },
  computed: {
    classObject() {
      return {
        'alert-success': this.type === 'success',
        'alert-info': this.type === 'info',
        'alert-warning': this.type === 'warning',
        'alert-danger': this.type === 'danger',
        'greetings-item': this.type === 'simple'
      }
    }
  }
}
</script>


<style scoped>

</style>