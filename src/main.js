import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'animate.css';
import vfmPlugin from 'vue-final-modal'
import Vue3Tour from 'vue3-tour'
const moment = require('moment'); // require

moment().format();
import 'vue3-tour/dist/vue3-tour.css'

import HeaderComp from '@/components/header_footer/Header/HeaderMain.vue'
import FooterComp from '@/components/header_footer/Footer/FooterMain.vue'
import Loader from '@/components/Utils/loader.vue'
import GoBack from '@/components/Utils/goBack.vue'

const app = createApp(App)
app.component('app-header', HeaderComp)
app.component('app-footer', FooterComp)
app.component('app-goback', GoBack)
app.component(`app-loader`, Loader)
app.use(vfmPlugin)
app.use(router)
app.use(Vue3Tour)
app.use(VueAxios, axios)
app.mount('#app')
