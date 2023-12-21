<template>
  <div class="border rounded-1 position-relative bg-white dark__bg-1100 p-3">
    <div class="position-absolute end-0 top-0 mt-2 me-3 z-index-1">
      <button @click="$emit('delete')" class="btn btn-link btn-sm p-0" type="button"><span class="fas fa-times-circle text-danger" data-fa-transform="shrink-1"></span></button>
    </div>
    <div class="row gx-2">
      <div class="col-12 mb-3"><label class="form-label" for="schedule-title">Title</label><input class="form-control form-control-sm" id="schedule-title" type="text" placeholder="Title" /></div>
      <div class="col-sm-6 mb-3"><label class="form-label" for="schedule-start-date">Start Date</label><input class="form-control form-control-sm datetimepicker" id="schedule-start-date" type="text" placeholder="d/m/y" data-options='{"dateFormat":"d/m/y","enableTime":false}' /></div>
      <div class="col-sm-6 mb-3"><label class="form-label" for="schedule-start-time">Start Time</label><input class="form-control form-control-sm datetimepicker" id="schedule-start-time" type="text" placeholder="H:i" data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i"}' /></div>
      <div class="col-sm-6 mb-3 mb-sm-0"><label class="form-label" for="schedule-end-date">End Date</label><input class="form-control form-control-sm datetimepicker" id="schedule-end-date" type="text" placeholder="d/m/y" data-options='{"dateFormat":"d/m/y","enableTime":false}' /></div>
      <div class="col-sm-6"><label class="form-label" for="schedule-end-time">End Time</label><input class="form-control form-control-sm datetimepicker" id="schedule-end-time" type="text" placeholder="H:i" data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i"}' /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MilestoneProposeCard",
  emits: ['delete'],
  props: {
    data: {
      type: Object
    }
  }
}
</script>


<style scoped>

</style>