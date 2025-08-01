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
  name: "ApexAreaChart",
  mixins: [ColorMixin],
  data() {
    return {
      chartId: `apex-area-chart-${Math.random().toString(36).substr(2, 9)}`,
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
      default: "Evolução de Vendas",
    },
    chartData: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    values: {
      type: Array,
      default: () => [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    seriesName: {
      type: String,
      default: "Vendas",
    },
    chartHeight: {
      type: Number,
      default: 350,
    },
    chartType: {
      type: String,
      default: "line", // 'line', 'area'
    },
    enableZoom: {
      type: Boolean,
      default: false,
    },
    showDataLabels: {
      type: Boolean,
      default: false,
    },
    strokeCurve: {
      type: String,
      default: "straight", // 'straight', 'smooth', 'stepline'
    },
    primaryColor: {
      type: [String, Array],
      default: "#008FFB",
    },
    showGrid: {
      type: Boolean,
      default: true,
    },
    gridColors: {
      type: Array,
      default: () => ["#f3f3f3", "transparent"],
    },
    gridOpacity: {
      type: Number,
      default: 0.5,
    },
    fillType: {
      type: String,
      default: "solid", // 'solid', 'gradient'
    },
    fillOpacity: {
      type: Number,
      default: 0.3,
    },
  },
  computed: {
    getColorCount() {
      return this.processedChartData.length;
    },

    finalPrimaryColor() {
      return (
        this.primaryDynamicColor ||
        (Array.isArray(this.primaryColor)
          ? this.primaryColor
          : [this.primaryColor])
      );
    },

    processedChartData() {
      // Se chartData for fornecido, usa ele diretamente
      if (this.chartData && this.chartData.length > 0) {
        return this.chartData;
      }

      // Caso contrário, usa os valores das props
      return [
        {
          name: this.seriesName,
          data: this.values,
        },
      ];
    },
  },
  methods: {
    renderChart() {
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

      const options = {
        series: this.processedChartData,
        chart: {
          height: this.chartHeight,
          type: this.chartType,
          zoom: {
            enabled: this.enableZoom,
          },
        },
        dataLabels: {
          enabled: this.showDataLabels,
        },
        stroke: {
          curve: this.strokeCurve,
        },
        colors: this.autoColors
          ? this.dynamicColors
          : Array.isArray(this.primaryColor)
          ? this.primaryColor
          : [this.primaryColor],
        fill: {
          type: this.fillType,
          opacity: this.fillOpacity,
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: this.fillOpacity,
            opacityTo: 0.3,
            stops: [0, 50, 100],
          },
        },
        grid: {
          show: this.showGrid,
          row: {
            colors: this.gridColors,
            opacity: this.gridOpacity,
          },
        },
        xaxis: {
          categories: this.categories,
        },
      };

      // Criar nova instância do gráfico
      this.chart = new ApexCharts(element, options);
      this.chart.render();
    },
  },
};
</script>

<style scoped>
[id^="apex-area-chart-"] {
  width: 100%;
}
</style>
