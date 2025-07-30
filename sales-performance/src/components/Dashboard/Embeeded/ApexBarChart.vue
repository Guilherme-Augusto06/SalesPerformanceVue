<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      {{ title }}
    </v-card-title>
    <div id="apex-bar-chart"></div>
  </v-card>
</template>

<script>
export default {
  name: 'ApexBarChart',
  mounted() {
    this.renderChart();
  },
  props: {
    title: {
      type: String,
      default: 'Vendas Totais'
    },
  },
  methods: {
    renderChart() {
      const options = {
        series: [
          {
            name: 'Atual',
            data: [
              {
                x: 'Mensal',
                y: 45,
                goals: [
                  {
                    name: 'Esperado',
                    value: 50,
                    strokeWidth: 10,
                    strokeHeight: 0,
                    strokeLineCap: 'round',
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: 'Trimestral',
                y: 120,
                goals: [
                  {
                    name: 'Esperado',
                    value: 135,
                    strokeWidth: 10,
                    strokeHeight: 0,
                    strokeLineCap: 'round',
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: 'Anual',
                y: 480,
                goals: [
                  {
                    name: 'Esperado',
                    value: 500,
                    strokeWidth: 10,
                    strokeHeight: 0,
                    strokeLineCap: 'round',
                    strokeColor: '#775DD0'
                  }
                ]
              }
            ]
          }
        ],
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#00E396'],
        dataLabels: {
          formatter: function(val, opt) {
            const goals =
              opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals
        
            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`
            }
            return val
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Atual', 'Esperado'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#apex-bar-chart"), options);
      chart.render();
    }
  }
};
</script>

<style scoped>
#apex-bar-chart {
  width: 100%;
}
</style>
