<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
        {{ title }}
    </v-card-title>
    <div id="radial-chart"></div>
  </v-card>
</template>

<script>
export default {
  name: 'ApexRadialChart',
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
        series: [76, 67, 61],
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            },
            barLabels: {
              enabled: true,
              useSeriesColors: true,
              offsetX: -8,
              fontSize: '16px',
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
              },
            },
          }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E'],
        labels: ['Mensal', 'Trimestral', 'Anual'],
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
      };

      var chart = new ApexCharts(document.querySelector("#radial-chart"), options);
      chart.render();
    }
  }
};
</script>

<style scoped>
#radial-chart {
  width: 100%;
}
</style>
