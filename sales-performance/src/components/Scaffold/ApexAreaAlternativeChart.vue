<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      {{ title }}
    </v-card-title>
    <div :id="chartId"></div>
  </v-card>
</template>

<script>
import { ColorGenerator, ColorMixin } from "../../utils/colorGenerator.js";

export default {
  name: "ApexAreaAlternativeChart",
  mixins: [ColorMixin],
  data() {
    return {
      chartId: `apex-area-alternative-chart-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
    };
  },
  mounted() {
    this.renderChart();
  },
  props: {
    title: {
      type: String,
      default: "Margem Bruta x Margem Líquida",
    },
    series: {
      type: Array,
      default: () => [
        {
          name: "Margem Bruta",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Margem Líquida",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
    },
    categories: {
      type: Array,
      default: () => [
        "2024-01-01T00:00:00.000Z",
        "2024-02-01T00:00:00.000Z",
        "2024-03-01T00:00:00.000Z",
        "2024-04-01T00:00:00.000Z",
        "2024-05-01T00:00:00.000Z",
        "2024-06-01T00:00:00.000Z",
        "2024-07-01T00:00:00.000Z",
      ],
    },
    chartHeight: {
      type: Number,
      default: 350,
    },
    colors: {
      type: Array,
      default: () => ["#008FFB", "#00E396"],
    },
    strokeCurve: {
      type: String,
      default: "smooth", // 'smooth', 'straight', 'stepline'
    },
    strokeWidth: {
      type: Number,
      default: 3, // Aumentado de 2 para 3 para destacar mais as linhas
    },
    showDataLabels: {
      type: Boolean,
      default: false,
    },
    xAxisType: {
      type: String,
      default: "datetime", // 'category', 'datetime', 'numeric'
    },
    tooltipFormat: {
      type: String,
      default: "dd/MM/yy HH:mm",
    },

    fillType: {
      type: String,
      default: "gradient", // 'solid', 'gradient'
    },
    showLegend: {
      type: Boolean,
      default: true,
    },
    legendPosition: {
      type: String,
      default: "top", // 'top', 'right', 'bottom', 'left'
    },
    showGrid: {
      type: Boolean,
      default: true,
    },
    gridColors: {
      type: Array,
      default: () => ["#e0e0e0", "transparent"],
    },
    gridOpacity: {
      type: Number,
      default: 0.3,
    },
  },
  computed: {
    getColorCount() {
      return this.series.length;
    },

    finalColors() {
      return this.autoColors ? this.dynamicColors : this.colors;
    },
  },
  methods: {
    renderChart() {
      const options = {
        series: this.series,
        chart: {
          height: this.chartHeight,
          type: "area",
        },
        colors: this.finalColors,
        dataLabels: {
          enabled: this.showDataLabels,
        },
        stroke: {
          curve: this.strokeCurve,
          width: this.strokeWidth,
        },

        xaxis: {
          type: this.xAxisType,
          categories: this.categories,
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        grid: {
          show: this.showGrid,
          borderColor: this.gridColors[0],
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: this.showGrid,
            },
          },
          yaxis: {
            lines: {
              show: this.showGrid,
            },
          },
          row: {
            colors: this.gridColors,
            opacity: this.gridOpacity,
          },
        },
        legend: {
          show: this.showLegend,
          position: this.legendPosition,
        },
        tooltip: {
          x: {
            format:
              this.xAxisType === "datetime" ? this.tooltipFormat : undefined,
          },
        },
      };

      const chart = new ApexCharts(
        document.querySelector(`#${this.chartId}`),
        options
      );
      chart.render();
    },
  },
};
</script>

<style scoped>
[id^="apex-area-alternative-chart-"] {
  width: 100%;
}
</style>
