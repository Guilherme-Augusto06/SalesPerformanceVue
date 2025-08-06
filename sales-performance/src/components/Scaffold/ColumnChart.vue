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
  name: "ColumnChart",
  mixins: [ColorMixin],
  data() {
    return {
      chartId: `apex-column-chart-${Math.random().toString(36).substr(2, 9)}`,
      chart: null,
      currentTheme: "light",
      unwatch: null,
    };
  },
  props: {
    title: { type: String, default: "Gráfico de Colunas" },
    series: {
      type: Array,
      default: () => [
        { name: "PRODUTO A", data: [44, 55, 41, 67, 22, 43, 21, 49] },
        { name: "PRODUTO B", data: [13, 23, 20, 8, 13, 27, 33, 12] },
        { name: "PRODUTO C", data: [11, 17, 15, 15, 21, 14, 15, 13] },
      ],
    },
    categories: {
      type: Array,
      default: () => [
        "2024 Q1",
        "2024 Q2",
        "2024 Q3",
        "2024 Q4",
        "2025 Q1",
        "2025 Q2",
        "2025 Q3",
        "2025 Q4",
      ],
    },
    chartHeight: { type: Number, default: 350 },
    chartType: { type: String, default: "bar" },
    stacked: { type: Boolean, default: true },
    stackType: { type: String, default: "100%" },
    colors: {
      type: Array,
      default: () => ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
    },
    showLegend: { type: Boolean, default: true },
    legendPosition: { type: String, default: "right" },
    fillOpacity: { type: Number, default: 1 },
    showDataLabels: { type: Boolean, default: false },
    responsive: { type: Boolean, default: true },
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
      (newTheme) => {
        this.currentTheme = newTheme;
        this.renderChart(); // Recria o gráfico com o novo tema
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
      if (!element) {
        console.warn(`Elemento com ID ${this.chartId} não encontrado`);
        return;
      }

      if (this.chart) this.chart.destroy();

      const options = {
        series: this.series,
        chart: {
          type: this.chartType,
          height: this.chartHeight,
          stacked: this.stacked,
          stackType: this.stackType,
          background: this.currentTheme,
        },
        theme: {
          mode: this.currentTheme,
        },
        colors: this.finalColors,
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "70%",
          },
        },
        dataLabels: {
          enabled: this.showDataLabels,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
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
        fill: {
          opacity: this.fillOpacity,
        },
        legend: {
          show: this.showLegend,
          position: this.legendPosition,
          offsetX: this.legendPosition === "right" ? 0 : undefined,
          offsetY: this.legendPosition === "right" ? 50 : undefined,
          labels: {
            colors: this.currentTheme === "dark" ? "white" : "black",
          },
        },
        tooltip: {
          theme: this.currentTheme,
          y: {
            formatter: (val) => val.toString(),
          },
        },
        responsive: this.responsive
          ? [
              {
                breakpoint: 480,
                options: {
                  legend: {
                    position: "bottom",
                    offsetX: -10,
                    offsetY: 0,
                  },
                },
              },
            ]
          : [],
      };

      this.chart = new ApexCharts(element, options);
      this.chart.render();
    },
  },
};
</script>

<style scoped>
[id^="apex-column-chart-"] {
  width: 100%;
}
</style>
