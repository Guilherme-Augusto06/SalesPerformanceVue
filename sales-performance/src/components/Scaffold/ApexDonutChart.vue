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
import { useTheme } from "vuetify";
import { watch } from "vue";

export default {
  name: "ApexDonutChart",
  props: {
    title: { type: String, default: "Meta vs Realizado" },
    chartData: { type: Array, default: () => [] },
    series: { type: Array, default: () => [41, 59] },
    labels: { type: Array, default: () => ["Meta", "Realizado"] },
    chartType: { type: String, default: "donut" },
    chartHeight: { type: Number, default: 350 },
    colors: {
      type: Array,
      default: () => [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8",
      ],
    },
    showLegend: { type: Boolean, default: true },
    legendPosition: { type: String, default: "bottom" },
    showDataLabels: { type: Boolean, default: true },
    dataLabelsStyle: {
      type: Object,
      default: () => ({
        fontSize: "14px",
        fontWeight: "bold",
      }),
    },
    donutSize: { type: String, default: "70%" },
    strokeWidth: { type: Number, default: 2 },
    strokeColor: { type: String, default: "#fff" },
    responsive: {
      type: Array,
      default: () => [
        {
          breakpoint: 480,
          options: {
            chart: { width: 200 },
            legend: { position: "bottom" },
          },
        },
      ],
    },
    showTooltip: { type: Boolean, default: true },
    tooltipFormat: { type: String, default: "percentage" },
  },
  data() {
    return {
      chart: null,
      chartId: `apex-donut-chart-${Math.random().toString(36).substr(2, 9)}`,
      currentTheme: "light",
    };
  },
  computed: {
    processedChartData() {
      if (this.chartData.length) {
        return {
          series: this.chartData.map((item) => item.value),
          labels: this.chartData.map((item) => item.label),
        };
      }
      return { series: this.series, labels: this.labels };
    },
  },
  mounted() {
    const theme = useTheme();
    this.currentTheme = theme.global.name.value;

    this.unwatch = watch(
      () => theme.global.name.value,
      (newVal) => {
        this.currentTheme = newVal;
        this.renderChart(); // atualiza ao mudar tema
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
      const data = this.processedChartData;
      const el = document.querySelector(`#${this.chartId}`);

      if (!el) return;
      if (this.chart) this.chart.destroy();

      const options = {
        series: data.series,
        chart: {
          type: this.chartType,
          height: this.chartHeight,
          background: "transparent",
        },
        theme: {
          mode: this.currentTheme,
        },
        labels: data.labels,
        colors: this.colors,
        dataLabels: {
          enabled: this.showDataLabels,
          style: this.dataLabelsStyle,
          formatter: (val) => {
            return this.tooltipFormat === "percentage"
              ? `${val.toFixed(1)}%`
              : val;
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: this.chartType === "donut" ? this.donutSize : "0%",
            },
          },
        },
        stroke: {
          width: this.strokeWidth,
          colors: [this.strokeColor],
        },
        legend: {
          show: this.showLegend,
          position: this.legendPosition,
          labels: {
            colors: this.currentTheme === "dark" ? "#fff" : "#000",
          },
        },
        tooltip: {
          enabled: this.showTooltip,
          theme: this.currentTheme,
          y: {
            formatter: (val) => {
              return this.tooltipFormat === "percentage"
                ? `${(
                    (val / data.series.reduce((a, b) => a + b, 0)) *
                    100
                  ).toFixed(1)}%`
                : val;
            },
          },
        },
        responsive: this.responsive,
      };

      this.chart = new ApexCharts(el, options);
      this.chart.render();
    },
  },
};
</script>

<style scoped>
[id^="apex-donut-chart-"] {
  width: 100%;
}
</style>
