<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      Evolução de vendas
    </v-card-title>
    <div id="apex-area-chart"></div>
  </v-card>
</template>

<script>
export default {
  name: 'ApexAreaChart',
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const options = {
          series: [{
            name: "Vendas",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        };

        var chart = new ApexCharts(document.querySelector("#apex-area-chart"), options);
        chart.render();
    }
  }
};
</script>

<style scoped>
#apex-area-chart {
  width: 100%;
}
</style>
