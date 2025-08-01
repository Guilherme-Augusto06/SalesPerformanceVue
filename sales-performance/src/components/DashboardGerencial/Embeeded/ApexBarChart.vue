<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      {{ title }}
    </v-card-title>
    <div :id="chartId"></div>
  </v-card>
</template>

<script>
import { ColorGenerator, ColorMixin } from "../../../utils/colorGenerator.js";

export default {
  name: "ApexBarChart",
  mixins: [ColorMixin],
  data() {
    return {
      chartId: `apex-bar-chart-${Math.random().toString(36).substr(2, 9)}`,
      chart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
  props: {
    title: {
      type: String,
      default: "Vendas Totais",
    },
    chartData: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => ["Mensal", "Trimestral", "Anual"],
    },
    values: {
      type: Array,
      default: () => [45, 120, 480],
    },
    goalValues: {
      type: Array,
      default: () => [50, 135, 500],
    },
    seriesName: {
      type: String,
      default: "Atual",
    },
    chartHeight: {
      type: Number,
      default: 350,
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
    primaryColor: {
      type: String,
      default: "#00E396",
    },
    goalColor: {
      type: String,
      default: "#775DD0",
    },
    showLegend: {
      type: Boolean,
      default: true,
    },
    legendItems: {
      type: Array,
      default: () => ["Atual", "Esperado"],
    },
    goalStrokeWidth: {
      type: Number,
      default: 10,
    },
    goalStrokeHeight: {
      type: Number,
      default: 0,
    },
    goalStrokeLineCap: {
      type: String,
      default: "round",
    },
    goalName: {
      type: String,
      default: "Esperado",
    },
    showDataLabels: {
      type: Boolean,
      default: true,
    },
    dataLabelFormat: {
      type: String,
      default: "value/goal", // 'value/goal', 'value', 'percentage'
    },
  },
  computed: {
    getColorCount() {
      return this.processedChartData.length;
    },

    finalPrimaryColor() {
      return this.primaryDynamicColor || this.primaryColor;
    },

    finalColors() {
      if (this.autoColors && this.processedChartData.length > 1) {
        return this.dynamicColors;
      }
      return [this.finalPrimaryColor];
    },

    processedChartData() {
      // Se chartData for fornecido, usa ele diretamente
      if (this.chartData && this.chartData.length > 0) {
        return this.chartData.map((item) => ({
          ...item,
          goals: item.goals
            ? item.goals.map((goal) => ({
                name: this.goalName,
                value: goal.value,
                strokeWidth: this.goalStrokeWidth,
                strokeHeight: this.goalStrokeHeight,
                strokeLineCap: this.goalStrokeLineCap,
                strokeColor: this.goalColor,
              }))
            : [],
        }));
      }

      // Caso contrário, constrói os dados a partir das props individuais
      return this.categories.map((category, index) => ({
        x: category,
        y: this.values[index] || 0,
        goals: this.goalValues[index]
          ? [
              {
                name: this.goalName,
                value: this.goalValues[index],
                strokeWidth: this.goalStrokeWidth,
                strokeHeight: this.goalStrokeHeight,
                strokeLineCap: this.goalStrokeLineCap,
                strokeColor: this.goalColor,
              },
            ]
          : [],
      }));
    },
  },
  methods: {
    renderChart() {
      const options = {
        series: [
          {
            name: this.seriesName,
            data: this.processedChartData,
          },
        ],
        chart: {
          height: this.chartHeight,
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: this.horizontal,
          },
        },
        colors: this.finalColors,
        dataLabels: {
          enabled: this.showDataLabels,
          formatter: (val, opt) => {
            const goals =
              opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals;

            if (goals && goals.length) {
              const goalValue = goals[0].value;

              switch (this.dataLabelFormat) {
                case "value":
                  return val.toString();
                case "currency":
                  return new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(val);
                case "percentage":
                  return `${Math.round((val / goalValue) * 100)}%`;
                case "value/goal":
                default:
                  return `${val} / ${goalValue}`;
              }
            }

            // Formatação quando não há meta
            switch (this.dataLabelFormat) {
              case "currency":
                return new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(val);
              case "value":
              default:
                return val.toString();
            }
          },
        },
        legend: {
          show: this.showLegend,
          showForSingleSeries: true,
          customLegendItems: this.legendItems,
          markers: {
            fillColors: [this.finalPrimaryColor, this.goalColor],
          },
        },
      };

      // Verificar se o elemento existe
      const element = document.querySelector(`#${this.chartId}`);
      if (!element) {
        console.warn(`Elemento com ID ${this.chartId} não encontrado`);
        return;
      }

      // Destruir gráfico existente se houver
      if (this.chart) {
        this.chart.destroy();
      }

      // Criar nova instância do gráfico
      this.chart = new ApexCharts(element, options);
      this.chart.render();
    },
  },
};
</script>

<style scoped>
[id^="apex-bar-chart-"] {
  width: 100%;
}
</style>
