<template>
  <table class="table">
    <thead v-if="headers.length > 0">
    <tr>
      <th v-for="(header, i) in headers" :key="'header-' + i.toString()">{{ header }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(row, i) in rows" :key="'row-' + i.toString()">
      <td v-for="(col, j) in row.data" :key="'col-' + j.toString() + i.toString()">
        <a v-if="j === 1" :href="row.href">{{ col }}</a>
        <template v-else>{{ col }}</template>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SimpleTableComponent",
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
  }
}
</script>


<style scoped>

</style>