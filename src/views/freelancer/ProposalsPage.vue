<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main id="top" class="main">
    <div class="container" data-layout="container">
      <!--Start Content Layout-->
      <ContentLayout>
        <template #content>

          <div class="card mb-3">
            <div class="card-header">
              <h5 class="mb-0">پروپوزال‌ها</h5>
            </div>
            <div class="card-body bg-light">

              <SimpleTabs :navs="navs" :tabs="tabs">
                <template #tab-0>
                  <SimpleTableComponent :headers="headers" :rows="rows"/>
                </template>

                <template #tab-1>
                  <SimpleTableComponent :headers="headers" :rows="rows"/>
                </template>

                <template #tab-2>
                  <SimpleTableComponent :headers="headers" :rows="rows"/>
                </template>

                <template #tab-3>
                  <SimpleTableComponent :headers="headers" :rows="rows"/>
                </template>
              </SimpleTabs>


              <!--
                            <v-tabs v-model="tab" color="blue-darken-2">
                              <v-tab value="active">فعال</v-tab>
                              <v-tab value="sent">ارسال شده</v-tab>
                              <v-tab value="archive">آرشیو</v-tab>
                              <v-tab value="invitation">دعوتنامه</v-tab>
                            </v-tabs>

                            <v-card-text>
                              <v-window v-model="tab">
                                <v-window-item value="active">
                                  <table class="table">
                                    <tbody>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye"></span>
                                        دیده شده توسط کارفرما
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye"></span>
                                        دیده شده توسط کارفرما
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye-slash"></span>
                                        دیده نشده
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
                                  <div class="text-center">
                                    <v-pagination
                                        v-model="page"
                                        :length="4"
                                        rounded="circle"
                                    ></v-pagination>
                                  </div>
                                </v-window-item>

                                <v-window-item value="sent">
                                  <table class="table">
                                    <tbody>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye"></span>
                                        دیده شده توسط کارفرما
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye"></span>
                                        دیده شده توسط کارفرما
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye-slash"></span>
                                        دیده نشده
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </v-window-item>

                                <v-window-item value="archive">
                                  <table class="table">
                                    <tbody>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye"></span>
                                        دیده شده توسط کارفرما
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye"></span>
                                        دیده شده توسط کارفرما
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye-slash"></span>
                                        دیده نشده
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </v-window-item>

                                <v-window-item value="invitation">
                                  <table class="table">
                                    <tbody>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye"></span>
                                        دیده شده توسط کارفرما
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye"></span>
                                        دیده شده توسط کارفرما
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>17 مهر 1402</td>
                                      <td>
                                        <a href="">
                                          توسعه دهنده بک اند با تجربه در حوزه بانکی
                                        </a>
                                      </td>
                                      <td>فول استک</td>
                                      <td>
                                        <span class="far fa-eye-slash"></span>
                                        دیده نشده
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </v-window-item>
                              </v-window>
                            </v-card-text>

              -->
              <p></p>
            </div>
          </div>
        </template>
      </ContentLayout>
      <!--End Content Layout-->
    </div>
  </main>
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->
</template>

<script>
import ContentLayout from "@/components/layouts/ContentLayout.vue";
import SimpleTabs from "@/components/base/SimpleTabs.vue";
import SimpleTableComponent from "@/components/table/SimpleTableComponent.vue";

export default {
  name: "ProposalsPage",
  components: {SimpleTableComponent, SimpleTabs, ContentLayout},
  data() {
    return {
      tab: null,
      page: 1,
      rows: [
        {
          data: ['17 مهر 1402', 'توسعه دهنده بک اند با تجربه در حوزه بانکی', 'فول استک', 'دیده شده توسط کارفرما'],
          href: "###"
        },
        {
          data: ['17 مهر 1402', 'توسعه دهنده بک اند با تجربه در حوزه بانکی', 'فول استک', 'دیده شده توسط کارفرما'],
          href: "###"
        },
        {
          data: ['17 مهر 1402', 'توسعه دهنده بک اند با تجربه در حوزه بانکی', 'فول استک', 'دیده شده توسط کارفرما'],
          href: "###"
        },
        {
          data: ['17 مهر 1402', 'توسعه دهنده بک اند با تجربه در حوزه بانکی', 'فول استک', 'دیده شده توسط کارفرما'],
          href: "###"
        },
      ],
      headers: [],
      navs: [
        {title: 'فعال', id: 'active'},
        {title: 'ارسال شده', id: 'sent'},
        {title: 'آرشیو', id: 'archive'},
        {title: 'دعوتنامه', id: 'invitation'},
      ]
    };
  }
}
</script>

<style scoped>

</style>