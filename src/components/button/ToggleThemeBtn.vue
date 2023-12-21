<template>
  <div class="theme-control-toggle fa-icon-wait px-2">
    <input id="themeControlToggle"
           class="form-check-input ms-0 theme-control-toggle-input"
           data-theme-control="theme"
           type="checkbox"
           value="dark"
           @click="toggleTheme"
    /><label
      class="mb-0 theme-control-toggle-label theme-control-toggle-light"
      data-bs-placement="left"
      data-bs-toggle="tooltip"
      for="themeControlToggle"
      title="تغییر به نمایه روز"
  ><span class="fas fa-sun fs-0"></span></label
  ><label
      class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
      data-bs-placement="left"
      data-bs-toggle="tooltip"
      for="themeControlToggle"
      title="تغییر به نمایه شب"
  ><span class="fas fa-moon fs-0"></span
  ></label>
  </div>
</template>

<script setup>
import {useTheme} from 'vuetify';

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>


<style scoped>

</style>