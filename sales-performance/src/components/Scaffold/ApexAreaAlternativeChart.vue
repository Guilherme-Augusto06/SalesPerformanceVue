<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      {{ title }}
    </v-card-title>
    <div :id="chartId"></div>
  </v-card>
</template>

<script>
import ApexCharts from "apexcharts";
import { ColorGenerator, ColorMixin } from "../../utils/colorGenerator.js";
import { useTheme } from "vuetify";
import { watch, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "ApexAreaAlternativeChart",
  mixins: [ColorMixin],
  data() {
    return {
      chartId: `apex-area-alternative-chart-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      chart: null,
      currentTheme: "light",
      unwatch: null,
    };
  },
  props: {
    title: { type: String, default: "Margem Bruta x Margem Líquida" },
    series: {
      type: Array,
      default: () => [
        { name: "Margem Bruta", data: [31, 40, 28, 51, 42, 109, 100] },
        { name: "Margem Líquida", data: [11, 32, 45, 32, 34, 52, 41] },
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
    chartHeight: { type: Number, default: 350 },
    colors: {
      type: Array,
      default: () => ["#008FFB", "#00E396"],
    },
    strokeCurve: { type: String, default: "smooth" },
    strokeWidth: { type: Number, default: 3 },
    showDataLabels: { type: Boolean, default: false },
    xAxisType: { type: String, default: "datetime" },
    tooltipFormat: { type: String, default: "dd/MM/yy HH:mm" },
    fillType: { type: String, default: "gradient" },
    showLegend: { type: Boolean, default: true },
    legendPosition: { type: String, default: "top" },
    showGrid: { type: Boolean, default: true },
    gridColors: {
      type: Array,
      default: () => ["#e0e0e0", "transparent"],
    },
    gridOpacity: { type: Number, default: 0.3 },
  },
  computed: {
    getColorCount() {
      return this.series.length;
    },
    finalColors() {
      return this.autoColors ? this.dynamicColors : this.colors;
    },
  },
  mounted() {
    const theme = useTheme();
    this.currentTheme = theme.global.name.value;

    this.unwatch = watch(
      () => theme.global.name.value,
      (newVal) => {
        this.currentTheme = newVal;
        this.renderChart(); // Re-renderiza com o novo tema
      }
    );

    this.renderChart();
  },
  beforeUnmount() {
    if (this.chart) this.chart.destroy();
    if (this.unwatch) this.unwatch();
  },
  methods: {
    renderChart() {
      const el = document.querySelector(`#${this.chartId}`);
      if (!el) return;
      if (this.chart) this.chart.destroy();

      const options = {
        series: this.series,
        chart: {
          height: this.chartHeight,
          type: "area",
          toolbar: { show: false },
          zoom: { enabled: false },
          background: this.currentTheme,
        },
        theme: {
          mode: this.currentTheme,
        },
        colors: this.finalColors,
        dataLabels: {
          enabled: this.showDataLabels,
        },
        stroke: {
          curve: this.strokeCurve,
          width: this.strokeWidth,
        },
        fill: {
          type: this.fillType,
          gradient:
            this.fillType === "gradient"
              ? {
                  shade: "light",
                  type: "vertical",
                  shadeIntensity: 0.3,
                  inverseColors: true,
                  opacityFrom: 0.6,
                  opacityTo: 0.1,
                  stops: [0, 50, 100],
                }
              : undefined,
        },
        xaxis: {
          type: this.xAxisType,
          categories: this.categories,
          labels: {
            style: {
              colors: this.currentTheme === "dark" ? "white" : "black",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: this.currentTheme === "dark" ? "white" : "black",
            },
          },
        },
        gridColors: {
          type: Array,
          default: () => ["#f3f3f3", "transparent"],
        },
        legend: {
          show: this.showLegend,
          position: this.legendPosition,
          labels: {
            colors: this.currentTheme === "dark" ? "white" : "black",
          },
        },
        tooltip: {
          theme: this.currentTheme,
          x: {
            format:
              this.xAxisType === "datetime" ? this.tooltipFormat : undefined,
          },
        },
      };

      this.chart = new ApexCharts(el, options);
      this.chart.render();
    },
  },
};
</script>

<style scoped>
[id^="apex-area-alternative-chart-"] {
  width: 100%;
}
</style>
