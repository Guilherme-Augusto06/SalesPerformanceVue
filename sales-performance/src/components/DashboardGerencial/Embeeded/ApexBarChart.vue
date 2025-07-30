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
    chartData: {
      type: Array,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => ['Mensal', 'Trimestral', 'Anual']
    },
    values: {
      type: Array,
      default: () => [45, 120, 480]
    },
    goalValues: {
      type: Array,
      default: () => [50, 135, 500]
    },
    seriesName: {
      type: String,
      default: 'Atual'
    },
    chartHeight: {
      type: Number,
      default: 350
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    primaryColor: {
      type: String,
      default: '#00E396'
    },
    goalColor: {
      type: String,
      default: '#775DD0'
    },
    showLegend: {
      type: Boolean,
      default: true
    },
    legendItems: {
      type: Array,
      default: () => ['Atual', 'Esperado']
    },
    goalStrokeWidth: {
      type: Number,
      default: 10
    },
    goalStrokeHeight: {
      type: Number,
      default: 0
    },
    goalStrokeLineCap: {
      type: String,
      default: 'round'
    },
    goalName: {
      type: String,
      default: 'Esperado'
    },
    showDataLabels: {
      type: Boolean,
      default: true
    },
    dataLabelFormat: {
      type: String,
      default: 'value/goal' // 'value/goal', 'value', 'percentage'
    }
  },
  computed: {
    processedChartData() {
      // Se chartData for fornecido, usa ele diretamente
      if (this.chartData && this.chartData.length > 0) {
        return this.chartData.map(item => ({
          ...item,
          goals: item.goals ? item.goals.map(goal => ({
            name: this.goalName,
            value: goal.value,
            strokeWidth: this.goalStrokeWidth,
            strokeHeight: this.goalStrokeHeight,
            strokeLineCap: this.goalStrokeLineCap,
            strokeColor: this.goalColor
          })) : []
        }));
      }
      
      // Caso contrário, constrói os dados a partir das props individuais
      return this.categories.map((category, index) => ({
        x: category,
        y: this.values[index] || 0,
        goals: this.goalValues[index] ? [
          {
            name: this.goalName,
            value: this.goalValues[index],
            strokeWidth: this.goalStrokeWidth,
            strokeHeight: this.goalStrokeHeight,
            strokeLineCap: this.goalStrokeLineCap,
            strokeColor: this.goalColor
          }
        ] : []
      }));
    }
  },
  methods: {
    renderChart() {
      const options = {
        series: [
          {
            name: this.seriesName,
            data: this.processedChartData
          }
        ],
        chart: {
          height: this.chartHeight,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: this.horizontal,
          }
        },
        colors: [this.primaryColor],
        dataLabels: {
          enabled: this.showDataLabels,
          formatter: (val, opt) => {
            const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
            
            if (goals && goals.length) {
              const goalValue = goals[0].value;
              
              switch (this.dataLabelFormat) {
                case 'value':
                  return val.toString();
                case 'percentage':
                  return `${Math.round((val / goalValue) * 100)}%`;
                case 'value/goal':
                default:
                  return `${val} / ${goalValue}`;
              }
            }
            return val.toString();
          }
        },
        legend: {
          show: this.showLegend,
          showForSingleSeries: true,
          customLegendItems: this.legendItems,
          markers: {
            fillColors: [this.primaryColor, this.goalColor]
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
