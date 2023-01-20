import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import "vue-select/dist/vue-select.css";
import { tenantStore } from './stores/tenantStore'


const app = createApp(App)
app.use(createPinia())
app.use(router);

if (import.meta.env.VITE_TENANT) {
    let tStore = tenantStore();
    tStore.getTenant().then(() => {
        app.mount('#app')
    })
} else {
    app.mount('#app')
}
