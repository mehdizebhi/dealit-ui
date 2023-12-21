<template>
  <div :id="idTag" class="card" :data-list="dataList">
    <div class="card-header">
      <div class="row flex-between-center">
        <div class="col-6 col-sm-auto d-flex align-items-center pe-0">
          <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">{{ title }}</h5>
        </div>
        <div class="col-6 col-sm-auto ms-auto text-end ps-0">
          <div v-if="!editable" class="h-100">
            <form>
              <div class="input-group"><input aria-label="search"
                                              v-model="search"
                                              class="form-control form-control-sm shadow-none search" placeholder="جستوجو"
                                              type="search">
                <div class="input-group-text bg-transparent">
                  <span class="fa fa-search fs--1 text-600"></span>
                </div>
              </div>
            </form>
          </div>
          <div v-else>
            <slot name="activator"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body p-0">
      <div class="scrollbar">
        <table class="table mb-0 table-striped fs--2 border-200 overflow-hidden table-running-project">
          <thead class="bg-200 text-900">
          <tr class="text-800">
            <th v-for="(header, i) in headers" :key="'th-' + i.toString()" :class="{'sort': header.sort}" :data-sort="header.key">{{ header.title }}</th>
          </tr>
          </thead>
          <tbody class="list">
          <tr v-for="(row, i) in rows" :key="'tr-' + i.toString()">
            <td v-for="(header, j) in headers" :key="'td-' + i.toString() + j.toString()" class="align-middle" :class="header.key" v-html="row[header.key]">
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer bg-light pt-4 pb-0 text-center">
      <v-pagination
          density="compact"
          v-model="page"
          :length="length"
          rounded="circle"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTableComponent",
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    idTag: {
      type: String,
      required: true
    },
    length: {
      type: Number,
      required: true
    },
    title: {
      type: String
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      page: 1,
      search: ""
    };
  },
  computed: {
    dataList() {
      let object = {};
      let array = [];
      this.headers.forEach(header => array.push(header.key));
      object["valueNames"] = array;
      return JSON.stringify(object);
    }
  }
}
</script>

<style scoped>

</style>