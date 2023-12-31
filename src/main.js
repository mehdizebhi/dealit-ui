import {createApp} from 'vue';
import App from './App.vue';
import VueCookies from 'vue-cookies';
import router from './router/routes';
import store from "@/store/store";
// import Vuelidate from 'vuelidate';

// Vuetify
import '@/assets/styles/main.scss';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {fa} from 'vuetify/locale'
// import { fa } from "vuetify/iconsets/fa";
import {aliases, mdi} from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

// PrimeVue
import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/lara-light-teal/theme.css';
// import "primevue/resources/primevue.min.css";


const app = createApp(App);
// Use Vue Library
app.use(VueCookies);
app.use(router);

// Use Vuetify
const vuetify = createVuetify({
    locale: {
        locale: 'fa',
        messages: {fa},
    },
    theme: {
        defaultTheme: 'light',
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives,
});
app.use(vuetify);

// Use PrimeVue
app.use(PrimeVue, {
    local: {}
});

// Use Vuelidate to Validation
// Vue.use(Vuelidate);

// Vuex Config and Usage
app.use(store);

app.mount('#app');