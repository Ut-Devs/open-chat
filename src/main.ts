import { createApp } from 'vue'
import '@assets/css/globals.scss'
import App from './App.vue'
import router from '@router/index'

alert(process.env.NODE_ENV)

createApp(App).use(router).mount('#app')
