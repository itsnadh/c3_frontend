import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import {creatLogin} from 'vue'
import Login from './views/Login.vue'
import './assets/base.css'

const login = createApp(Login)
const app = createApp(App)

login.use(router)
app.use(router)

app.mount('#app')
