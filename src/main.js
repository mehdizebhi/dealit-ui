import {createApp} from 'vue';
import App from './App.vue';
import VueCookies from 'vue-cookies';
import router from './router/routes';
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App);
app.use(VueCookies);
app.use(router);
app.mount('#app');