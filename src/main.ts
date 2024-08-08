import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";


const app = createApp(App)

app.use(router)
app.use(VueSidebarMenu)


app.mount('#app')

