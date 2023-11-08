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
              <h5 class="mb-0">همه قراردادها</h5>
            </div>
            <div class="card-body bg-light">

              <div id="tableExample3"
                   data-list='{"valueNames":["title","hired","type", "date", "status"],"page":5,"pagination":true}'>
                <div class="row justify-content-end g-0">
                  <div class="col-auto col-sm-5 mb-3">
                    <form>
                      <div class="input-group"><input aria-label="search"
                                                      class="form-control form-control-sm shadow-none search"
                                                      placeholder="جستوجو..." type="search"/>
                        <div class="input-group-text bg-transparent"><span class="fa fa-search fs--1 text-600"></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="table-responsive scrollbar">
                  <table class="table table-striped fs--1 mb-0">
                    <thead class="bg-200 text-900">
                    <tr>
                      <th class="sort" data-sort="title">عنوان</th>
                      <th class="sort" data-sort="hired">استخدام توسط</th>
                      <th class="sort" data-sort="type">نوع پرداختی</th>
                      <th class="sort" data-sort="date">تاریخ</th>
                      <th class="sort" data-sort="status">وضعیت</th>
                      <th>عملیات</th>
                    </tr>
                    </thead>
                    <tbody class="list">
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td class="title">
                        <a href=""> برنامه نویس جاوا با تجربه در حوزه بانکی</a>
                      </td>
                      <td class="hired">شرکت نرم افزاری</td>
                      <td class="type">200 هزارتومن / ساعتی</td>
                      <td class="date">14 تیر تا الان</td>
                      <td class="status">فعال</td>
                      <td>18</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="d-flex justify-content-center mt-3">
                  <button class="btn btn-sm btn-falcon-default me-1" data-list-pagination="prev" title="Previous"
                          type="button">
                    <span class="fas fa-chevron-right"></span>
                  </button>
                  <ul class="pagination mb-0"></ul>
                  <button class="btn btn-sm btn-falcon-default ms-1" data-list-pagination="next" title="Next"
                          type="button">
                    <span class="fas fa-chevron-left"> </span>
                  </button>
                </div>
              </div>
            </div>
          </div>


            <v-data-table
                v-model:items-per-page="itemsPerPage"
                :headers="headers"
                :items="desserts"
                item-value="name"
                class="elevation-1"
            ></v-data-table>


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
import {
  VDataTable,
} from "vuetify/labs/VDataTable";

export default {
  name: "YourContractsPage",
  components: {
    ContentLayout,
    VDataTable
  },
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        {title: 'Calories', align: 'end', key: 'calories'},
        {title: 'Fat (g)', align: 'end', key: 'fat'},
        {title: 'Carbs (g)', align: 'end', key: 'carbs'},
        {title: 'Protein (g)', align: 'end', key: 'protein'},
        {title: 'Iron (%)', align: 'end', key: 'iron'},
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22',
        },
      ],

    };
  },
};
</script>

<style scoped>

</style>