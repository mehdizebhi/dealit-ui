<template>
  <div v-if="closable" class="alert alert-dismissible fade show" :class="type" role="alert">
    {{ text }}
    <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div v-else class="alert" :class="type" role="alert">{{ text }}</div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: {
    type: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
    closable: {
      type: Boolean
    }
  }
}
</script>


<style scoped>

</style>