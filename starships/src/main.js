import { createApp } from 'vue'
import '../src/assets/global.css'
import SidebarComponent from '../src/components/SidebarComponent.vue';
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.component('SidebarComponent', SidebarComponent);
app.use(router)

app.mount('#app')
