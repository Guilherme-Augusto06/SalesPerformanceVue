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
import ApexCharts from "apexcharts";
import { useTheme } from "vuetify";
import { onMounted, onBeforeUnmount, watch } from "vue";

export default {
  name: "AreaChart",
  mixins: [ColorMixin],
  props: {
    title: { type: String, default: "Evolução de Vendas" },
    chartData: { type: Array, default: () => [] },
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
    seriesName: { type: String, default: "Vendas" },
    chartHeight: { type: Number, default: 350 },
    chartType: { type: String, default: "line" },
    enableZoom: { type: Boolean, default: false },
    showDataLabels: { type: Boolean, default: false },
    strokeCurve: { type: String, default: "straight" },
    primaryColor: { type: [String, Array], default: "#008FFB" },
    showGrid: { type: Boolean, default: true },
    gridColors: { type: Array, default: () => ["#f3f3f3", "transparent"] },
    gridOpacity: { type: Number, default: 0.5 },
    fillType: { type: String, default: "solid" },
    fillOpacity: { type: Number, default: 0.3 },
  },
  data() {
    return {
      chartId: `apex-area-chart-${Math.random().toString(36).substr(2, 9)}`,
      chart: null,
      currentTheme: "light", // default
    };
  },
  computed: {
    finalPrimaryColor() {
      return Array.isArray(this.primaryColor)
        ? this.primaryColor
        : [this.primaryColor];
    },
    processedChartData() {
      return this.chartData.length
        ? this.chartData
        : [{ name: this.seriesName, data: this.values }];
    },
  },
  mounted() {
    const theme = useTheme();
    this.currentTheme = theme.global.name.value;

    // reatividade ao mudar tema no Vuetify
    this.unwatch = watch(
      () => theme.global.name.value,
      (newVal) => {
        this.currentTheme = newVal;
        this.renderChart(); // recria com novo tema
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
      const element = document.querySelector(`#${this.chartId}`);
      if (!element) return;

      if (this.chart) {
        this.chart.destroy();
      }

      const options = {
        series: this.processedChartData,
        chart: {
          height: this.chartHeight,
          type: this.chartType,
          toolbar: { show: false },
          zoom: { enabled: this.enableZoom },
          background: this.currentTheme,
        },
        theme: {
          mode: this.currentTheme, // 'light' or 'dark'
          background: this.currentTheme,
        },
        dataLabels: {
          enabled: this.showDataLabels,
          background: this.currentTheme,
        },
        stroke: {
          curve: this.strokeCurve,
          background: this.currentTheme,
        },
        colors: this.finalPrimaryColor,
        fill: {
          type: this.fillType,
          opacity: this.fillOpacity,
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.25,
            inverseColors: true,
            opacityFrom: this.fillOpacity,
            opacityTo: 0.1,
            stops: [0, 50, 100],
          },
        },
        gridColors: {
          type: Array,
          default: () => ["#f3f3f3", "transparent"],
        },
        xaxis: {
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
        tooltip: {
          theme: this.currentTheme, // dark ou light
        },
      };

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
