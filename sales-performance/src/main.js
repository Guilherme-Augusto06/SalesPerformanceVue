import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as Highcharts from 'highcharts/highmaps';
import HighchartsVue from 'highcharts-vue';
import mapData from '@highcharts/map-collection/countries/br/br-all.geo.json';
import router from './routes/router.js'

Highcharts.setOptions({
  lang: {
    decimalPoint: ',',
    thousandsSep: '.',
    locale: 'pt-BR',
    loading: 'Carregando...',
    noData: 'Sem dados para exibir'
  }
});
Highcharts.maps['countries/br/br-all'] = mapData;

const app = createApp(App);
app.use(router)
app.use(vuetify);
app.use(HighchartsVue, { highcharts: Highcharts })
app.mount('#app');