<template>
  <ul class="nav nav-tabs" role="tablist">
    <li v-for="(nav, i) in navs" :key="'nav-' + i.toString()" class="nav-item">
      <a :id="nav.id" :aria-controls="nav.id + '-href'" :aria-selected="i === 0" :href="'#' + nav.id + '-href'" class="nav-link"
         :class="{'active': i === 0}"
         data-bs-toggle="tab" role="tab">{{ nav.title }}</a>
    </li>
  </ul>
  <div class="tab-content p-3">
    <div v-for="(nav, i) in navs" :key="'tab-' + i.toString()" :id="nav.id + '-href'" :aria-labelledby="nav.id" class="tab-pane fade"
         :class="{'active': i === 0, 'show': i === 0}"
         role="tabpanel">
      <slot :name="'tab-' + i.toString()"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleTabs",
  props: {
    navs: {
      type: Array,
      required: true
    },
  }
}
</script>


<style scoped>

</style>