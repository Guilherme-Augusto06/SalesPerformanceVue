<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
        {{ title }}
    </v-card-title>
    <div id="apex-alternative-donut-chart"></div>
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
      default: 'Margem bruta vs margem líquida'
    },
    
  },
  methods: {
    renderChart() {
      const options = {
          series: [44, 55],
          chart: {
          width: 380,
          type: 'donut',
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.5
          }
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true
                }
              }
            }
          }
        },
        labels: ["Margem Bruta", "Margem Líquida"],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 1
          }
        },
        fill: {
        type: 'pattern',
          opacity: 1,
          pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
          },
        },
        states: {
          hover: {
            filter: 'none'
          }
        },
        theme: {
          palette: 'palette2'
        },
        title: {
          text: "Margem Bruta vs Margem Líquida"
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

        var chart = new ApexCharts(document.querySelector("#apex-alternative-donut-chart"), options);
        chart.render();
    }
  }
};
</script>

<style scoped>
#apex-alternative-donut-chart {
  width: 100%;
}
</style>
