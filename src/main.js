import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'animate.css';
import vfmPlugin from 'vue-final-modal'

import HeaderComp from '@/components/header_footer/Header/HeaderMain.vue'
import FooterComp from '@/components/header_footer/Footer/FooterMain.vue'

const app = createApp(App)
app.component('app-header', HeaderComp)
app.component('app-footer', FooterComp)
app.use(vfmPlugin)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')