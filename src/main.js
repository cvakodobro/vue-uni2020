import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* import VModal from 'vue-js-modal'; */
import Vuesax from 'vuesax';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faBars, faHeart, faHamburger, faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vuesax/dist/vuesax.css'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import * as VueGoogleMaps from 'vue2-google-maps';
import 'material-icons/iconfont/material-icons.css';



Vue.component('v-select', vSelect)

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDRneDLyY78cf8J38SKQv5_-QYuVzQ16Ck',
        v: 'OPTIONAL VERSION NUMBER',
        // libraries: 'places', //// If you need to use place input
    },
    installComponents: true
});



library.add(faEdit, faBars, faHeart, faHamburger, faBed);

Vue.component('font-awesome-icon', FontAwesomeIcon);
/* Vue.use(VModal); */
Vue.use(Vuesax);

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')