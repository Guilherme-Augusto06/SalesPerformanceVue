<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
    <highcharts :options="chartOptions"  :constructor-type="'mapChart'" />
    </v-card-title>
  </v-card>
</template>

<script>
import * as Highcharts from 'highcharts/highmaps';
import HighchartsVue from 'highcharts-vue';
import mapData from '@highcharts/map-collection/countries/br/br-all.geo.json';

export default {
  name: 'MapaBrasil',
  components: {
    highcharts: HighchartsVue.component
  },
  data() {
    return {
      Highcharts,
      chartOptions: {}
    };
  },
  methods: {
    loadMap() {
      const data = mapData.features.map((f, i) => ({
        key: f.properties['hc-key'],
        value: Math.floor(Math.random() * 100)
      }));

      this.chartOptions = {
        chart: {
          map: mapData
        },
        title: {
          text: 'Mapa do Brasil - Dados de Teste'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        colorAxis: {
          min: 0,
          stops: [
            [0, '#EFEFFF'],
            [0.5, '#4444FF'],
            [1, '#000022']
          ]
        },
        series: [{
          data,
          joinBy: 'hc-key',
          name: 'Vendas',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.key}'
          }
        }]
      };
    }
  },
  mounted() {
    this.loadMap();
  }
};
</script>

<style scoped>
.highcharts-container, .highcharts-root {
  width: 100%;
  height: 100%;
}
</style>
