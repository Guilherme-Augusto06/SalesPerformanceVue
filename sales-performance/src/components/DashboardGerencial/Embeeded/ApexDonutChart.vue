<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      {{ title }}
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
  props: {
    title: {
      type: String,
      default: 'Meta vs Realizado'
    },
    chartData: {
      type: Array,
      default: () => []
    },
    series: {
      type: Array,
      default: () => [41, 59]
    },
    labels: {
      type: Array,
      default: () => ['Meta', 'Realizado']
    },
    chartType: {
      type: String,
      default: 'donut' // 'donut', 'pie'
    },
    chartHeight: {
      type: Number,
      default: 350
    },
    colors: {
      type: Array,
      default: () => ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8']
    },
    showLegend: {
      type: Boolean,
      default: true
    },
    legendPosition: {
      type: String,
      default: 'bottom' // 'top', 'right', 'bottom', 'left'
    },
    showDataLabels: {
      type: Boolean,
      default: true
    },
    dataLabelsStyle: {
      type: Object,
      default: () => ({
        fontSize: '14px',
        fontWeight: 'bold'
      })
    },
    donutSize: {
      type: String,
      default: '70%' // Tamanho do buraco central para donut
    },
    strokeWidth: {
      type: Number,
      default: 2
    },
    strokeColor: {
      type: String,
      default: '#fff'
    },
    responsive: {
      type: Array,
      default: () => [{
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
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    tooltipFormat: {
      type: String,
      default: 'percentage' // 'percentage', 'value'
    }
  },
  computed: {
    processedChartData() {
      // Se chartData for fornecido (formato [{ label: 'Meta', value: 41 }]), usa ele
      if (this.chartData && this.chartData.length > 0) {
        return {
          series: this.chartData.map(item => item.value),
          labels: this.chartData.map(item => item.label)
        };
      }
      
      // Caso contrário, usa series e labels das props
      return {
        series: this.series,
        labels: this.labels
      };
    }
  },
  methods: {
    renderChart() {
      const data = this.processedChartData;
      
      const options = {
        series: data.series,
        chart: {
          type: this.chartType,
          height: this.chartHeight
        },
        labels: data.labels,
        colors: this.colors,
        dataLabels: {
          enabled: this.showDataLabels,
          style: this.dataLabelsStyle,
          formatter: (val) => {
            return this.tooltipFormat === 'percentage' ? `${val.toFixed(1)}%` : val;
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: this.chartType === 'donut' ? this.donutSize : '0%'
            }
          }
        },
        stroke: {
          width: this.strokeWidth,
          colors: [this.strokeColor]
        },
        legend: {
          show: this.showLegend,
          position: this.legendPosition
        },
        tooltip: {
          enabled: this.showTooltip,
          y: {
            formatter: (val) => {
              return this.tooltipFormat === 'percentage' 
                ? `${((val / data.series.reduce((a, b) => a + b, 0)) * 100).toFixed(1)}%`
                : val;
            }
          }
        },
        responsive: this.responsive
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
