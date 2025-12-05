import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import { i18n } from './locales/i18n'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(i18n)

app.mount('#app')