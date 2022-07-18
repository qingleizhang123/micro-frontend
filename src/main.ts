import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import start from './index'
import './styles/index.less'

const app = createApp(App)

start()

app.use(store)
  .use(router)
  .mount('#app')
