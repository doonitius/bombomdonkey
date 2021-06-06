import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue-apexcharts'
import moment from 'moment'
// Import Bootstrap an BootstrapVue CSS files (order is important)

// Make BootstrapVue available throughout your project

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(moment)
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value).format('MM/DD/YYYY hh:mm'))
    }
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");