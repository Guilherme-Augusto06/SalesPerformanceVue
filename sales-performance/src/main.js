import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import HighchartsVue from 'highcharts-vue'

createApp(App)
  .use(vuetify)
  .use(HighchartsVue) // ⬅️ aqui adiciona o Highcharts
  .mount('#app')
