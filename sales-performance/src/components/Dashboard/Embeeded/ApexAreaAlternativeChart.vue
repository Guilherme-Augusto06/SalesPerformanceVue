<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
        {{ title }}
    </v-card-title>
    <div id="apex-area-alternative-chart"></div>
  </v-card>
</template>

<script>

export default {
  name: 'ApexAreaChart',
  mounted() {
    this.renderChart();
  },
  props: {
    title: {
      type: String,
      default: 'Margem Bruta x Margem Líquida'
    },
    
  },
  methods: {
    renderChart() {
      const options = {
          series: [{
          name: 'Margem Bruta',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Margem Líquida',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#apex-area-alternative-chart"), options);
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
