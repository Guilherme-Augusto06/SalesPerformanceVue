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
import { watch } from "vue";

export default {
  name: "BoxPlot",
  mixins: [ColorMixin],
  props: {
    seriesName: { type: String, default: "Ticket Médio" },
    chartData: {
      type: Array,
      default: () => [
        {
          x: "Q1 2024",
          y: [1200, 1450, 1680, 1920, 2150],
          goals: [
            {
              value: 1000,
              strokeWidth: 0,
              strokeHeight: 13,
              strokeLineCap: "round",
              strokeColor: "#FEB019",
            },
            {
              value: 2300,
              strokeWidth: 0,
              strokeHeight: 13,
              strokeLineCap: "round",
              strokeColor: "#FF4560",
            },
          ],
        },
        {
          x: "Q2 2024",
          y: [1150, 1380, 1620, 1850, 2080],
          goals: [
            {
              value: 1100,
              strokeWidth: 0,
              strokeHeight: 13,
              strokeLineCap: "round",
              strokeColor: "#FEB019",
            },
            {
              value: 2200,
              strokeWidth: 0,
              strokeHeight: 13,
              strokeLineCap: "round",
              strokeColor: "#FF4560",
            },
          ],
        },
      ],
    },
    chartHeight: { type: Number, default: 350 },
    colors: { type: Array, default: () => ["#008FFB", "#FEB019"] },
    goalColor: { type: String, default: "#FEB019" },
    goalStrokeHeight: { type: Number, default: 13 },
    goalStrokeLineCap: { type: String, default: "round" },
    showTitle: { type: Boolean, default: true },
    titleAlign: { type: String, default: "left" },
    xAxisType: { type: String, default: "category" },
    showLegend: { type: Boolean, default: true },
    showTooltip: { type: Boolean, default: true },
    tooltipFormatter: {
      type: Function,
      default: (val) => `R$ ${val.toLocaleString("pt-BR")}`,
    },
  },
  data() {
    return {
      chartId: `apex-boxplot-chart-${Math.random().toString(36).substr(2, 9)}`,
      chart: null,
      currentTheme: "light",
    };
  },
  computed: {
    finalColors() {
      return this.autoColors ? this.dynamicColors : this.colors;
    },
    processedChartData() {
      return this.chartData.map((item) => ({
        x: item.x,
        y: item.y,
        goals: item.goals
          ? item.goals.map((goal) => ({
              value: goal.value,
              strokeWidth: goal.strokeWidth || 0,
              strokeHeight: goal.strokeHeight || this.goalStrokeHeight,
              strokeLineCap: goal.strokeLineCap || this.goalStrokeLineCap,
              strokeColor: goal.strokeColor || this.goalColor,
            }))
          : [],
      }));
    },
  },
  mounted() {
    const theme = useTheme();
    this.currentTheme = theme.global.name.value;

    this.unwatch = watch(
      () => theme.global.name.value,
      (newVal) => {
        this.currentTheme = newVal;
        this.renderChart();
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
        series: [
          {
            name: this.seriesName,
            type: "boxPlot",
            data: this.processedChartData,
          },
        ],
        chart: {
          type: "boxPlot",
          height: this.chartHeight,
          toolbar: { show: false },
          zoom: { enabled: false },
          background: this.currentTheme,
        },
        theme: {
          mode: this.currentTheme,
          background: this.currentTheme,
        },
        colors: this.finalColors,
        title: this.showTitle
          ? {
              text: this.title,
              align: this.titleAlign,
              style: {
                color: this.currentTheme === "dark" ? "white" : "black",
              },
            }
          : undefined,
        xaxis: {
          type: this.xAxisType,
          labels: {
            style: {
              colors: this.currentTheme === "dark" ? "white" : "black",
            },
          },
        },
        yaxis: {
          title: {
            text: "Valor do Ticket (R$)",
            style: {
              color: this.currentTheme === "dark" ? "white" : "black",
            },
          },
          labels: {
            style: {
              colors: this.currentTheme === "dark" ? "white" : "black",
            },
            formatter: (val) => {
              return new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
              }).format(val);
            },
          },
        },
        legend: {
          show: this.showLegend,
          labels: {
            colors: this.currentTheme === "dark" ? "white" : "black",
          },
        },
        tooltip: {
          enabled: this.showTooltip,
          theme: this.currentTheme,
          shared: false,
          intersect: true,
          y: {
            formatter: this.tooltipFormatter,
          },
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: this.finalColors[0],
              lower: this.finalColors[1] || this.finalColors[0],
            },
          },
        },
      };

      this.chart = new ApexCharts(element, options);
      this.chart.render();
    },
  },
  watch: {
    chartData: {
      handler() {
        this.renderChart();
      },
      deep: true,
    },
    title() {
      this.renderChart();
    },
  },
};
</script>

<style scoped>
[id^="apex-boxplot-chart-"] {
  width: 100%;
}
</style>
