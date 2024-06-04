import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap'

createApp(App).use(router).mount('#app')

const app = createApp(App);
app.config.globalProperties.$axios = axios;