import { createApp } from 'vue'
import './style.css'
import VueApp from './App.vue'
import router from './router'

const app = createApp(VueApp)
app.use(router)
app.mount('#app')

declare global {
    interface Window {
        electron?: any;
    }
}