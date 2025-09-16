import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createPinia } from 'pinia'
import axios from 'axios'


const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).use(router);
app.use(createPinia());
app.mount('#app');

//createApp(App).use(store).use(router).mount('#app')
