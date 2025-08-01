<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      {{ title }}
    </v-card-title>
    <div id="chart"></div>
  </v-card>
</template>


<script>
export default {
  name: 'ApexBarAlternativeChart',
  mounted() {
    this.renderChart();
  },
  props: {
    title: {
      type: String,
      default: 'Top 10 Produtos Mais Vendidos'
    },
    chartData: {
      type: Array,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5', 'Produto 6', 'Produto 7', 'Produto 8', 'Produto 9', 'Produto 10']
    },
    values: {
      type: Array,
      default: () => [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    },
    seriesName: {
      type: String,
      default: 'Vendas'
    },
    chartHeight: {
      type: Number,
      default: 380
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    distributed: {
      type: Boolean,
      default: true
    },
    barHeight: {
      type: String,
      default: '100%'
    },
    colors: {
      type: Array,
      default: () => ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e', '#f48024', '#69d2e7']
    },
    showDataLabels: {
      type: Boolean,
      default: true
    },
    dataLabelColor: {
      type: String,
      default: '#fff'
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    titleText: {
      type: String,
      default: 'Top 10 Produtos Mais Vendidos'
    },
    showSubtitle: {
      type: Boolean,
      default: true
    },
    subtitleText: {
      type: String,
      default: 'Ranking de produtos por volume de vendas'
    },
    showYAxisLabels: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number,
      default: 1
    },
    strokeColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    processedChartData() {
      // Se chartData for fornecido, usa ele diretamente
      if (this.chartData && this.chartData.length > 0) {
        return this.chartData;
      }
      
      // Caso contrário, usa os valores das props
      return [{
        name: this.seriesName,
        data: this.values
      }];
    }
  },
  methods: {
    renderChart() {
      const options = {
        series: this.processedChartData,
        chart: {
          type: 'bar',
          height: this.chartHeight
        },
        plotOptions: {
          bar: {
            barHeight: this.barHeight,
            distributed: this.distributed,
            horizontal: this.horizontal,
            dataLabels: {
              position: 'bottom'
            },
          }
        },
        colors: this.colors,
        dataLabels: {
          enabled: this.showDataLabels,
          textAnchor: 'start',
          style: {
            colors: [this.dataLabelColor]
          },
          formatter: (val, opt) => {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: this.strokeWidth,
          colors: [this.strokeColor]
        },
        xaxis: {
          categories: this.categories,
        },
        yaxis: {
          labels: {
            show: this.showYAxisLabels
          }
        },
        title: {
          text: this.showTitle ? this.titleText : '',
          align: 'center',
          floating: true
        },
        subtitle: {
          text: this.showSubtitle ? this.subtitleText : '',
          align: 'center',
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    }
  }
};
</script>