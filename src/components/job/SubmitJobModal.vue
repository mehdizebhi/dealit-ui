<template>

  <v-row justify="center">
    <v-dialog v-model="dialog" width="1024">
      <template v-slot:activator="{ props }">
        <slot :props="props" name="activator"></slot>
      </template>
      <v-card class="px-2 py-4">
        <v-card-title>
          <span class="h4">ارسال پروپوزال</span>
        </v-card-title>
        <v-card-text>
          <v-container>

            <v-row v-if="fixed" class="mb-4">
              <v-col cols="12">
              <span class="mx-2">مرحله 1</span>
                <button class="btn btn-danger btn-sm text-light mx-2" type="button">
                  <span class="fas fa-trash ms-1" data-fa-transform="shrink-3"></span>
                  حذف
                </button>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    color="blue-darken-1"
                    density="compact"
                    label="توضیحات مختصر"
                    model-value=""
                    placeholder="شرح کوتاه از کاری که در این مرحله قرار است انجام شود"
                    type="text"
                    variant="outlined">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                    color="blue-darken-1"
                    density="compact"
                    label="تعداد روز مورد نیاز"
                    model-value=""
                    placeholder="تعداد روزهایی که برای این مرحله نیاز دارید"
                    suffix="روز"
                    type="number"
                    variant="outlined">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                    color="blue-darken-1"
                    density="compact"
                    label="مبلغ مد نظر"
                    model-value=""
                    placeholder="میزان مبلغ مورد انتظار برای پایان این مرحله"
                    step="100000"
                    suffix="تومان"
                    type="number"
                    variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col col="12" class="py-0">
                <button class="btn btn-primary btn-sm text-light" type="button">
                  <span class="fas fa-plus me-1" data-fa-transform="shrink-3"></span>
                  ایجاد مرحله جدید
                </button>
              </v-col>
            </v-row>

            <v-row v-if="!fixed">
              <v-col cols="12">
                <v-text-field
                    color="blue-darken-1"
                    density="compact"
                    label="مبلغ به ازای هر ساعت"
                    model-value=""
                    placeholder="میزان مبلغ مورد انتظار برای هر ساعت"
                    step="100000"
                    suffix="تومان"
                    type="number"
                    variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                    color="blue-darken-1"
                    density="compact"
                    label="پیشنهادیه"
                    required
                    variant="outlined">
                </v-textarea>
              </v-col>
              <v-col cols="12">
                <v-file-input
                    color="blue-darken-1"
                    density="compact"
                    label="پیوست فایل"
                    variant="outlined"
                    multiple
                    chips
                ></v-file-input>
              </v-col>
            </v-row>

          </v-container>
        </v-card-text>
        <v-card-actions class="mx-4">
          <v-spacer></v-spacer>
          <button class="btn btn-secondary  mx-1 text-light" type="button" @click="dialog = false">لغو</button>
          <button class="btn btn-success mx-1 text-light" type="button" @click="dialog = false">ارسال پروپوزال</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  components: {},
  name: "SubmitJobModal",
  props: {},
  data() {
    return {
      dialog: false,
      fixed: true
    };
  }
}
</script>


<style scoped>

</style>