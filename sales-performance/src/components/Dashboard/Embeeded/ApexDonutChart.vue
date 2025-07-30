<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      Meta vs Realizado
    </v-card-title>
    <div id="apex-donut-chart"></div>
  </v-card>
</template>

<script>
export default {
  name: 'ApexDonutChart',
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const options = {
        series: [41, 59],
        chart: {
          type: 'donut',
        },
        labels: ['Meta', 'Realizado'],
        legend: {
          show: true,
          position: 'bottom'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };

      const chart = new ApexCharts(document.querySelector("#apex-donut-chart"), options);
      chart.render();
    }
  }
};
</script>

<style scoped>
#apex-donut-chart {
  width: 100%;
}
</style>
