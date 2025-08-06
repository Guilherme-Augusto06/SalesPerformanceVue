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
  name: "ApexBarChart",
  mixins: [ColorMixin],
  data() {
    return {
      chartId: `apex-bar-chart-${Math.random().toString(36).substr(2, 9)}`,
      chart: null,
      currentTheme: "light",
    };
  },
  mounted() {
    const theme = useTheme();
    this.currentTheme = theme.global.name.value;

    // Watch para tema reativo
    this.unwatch = watch(
      () => theme.global.name.value,
      (newTheme) => {
        this.currentTheme = newTheme;
        this.renderChart();
      }
    );

    this.renderChart();
  },
  beforeUnmount() {
    if (this.chart) this.chart.destroy();
    if (this.unwatch) this.unwatch();
  },
  props: {
    title: { type: String, default: "Vendas Totais" },
    chartData: { type: Array, default: () => [] },
    categories: {
      type: Array,
      default: () => ["Mensal", "Trimestral", "Anual"],
    },
    values: { type: Array, default: () => [45, 120, 480] },
    goalValues: { type: Array, default: () => [50, 135, 500] },
    seriesName: { type: String, default: "Atual" },
    chartHeight: { type: Number, default: 350 },
    horizontal: { type: Boolean, default: true },
    primaryColor: { type: String, default: "#00E396" },
    goalColor: { type: String, default: "#775DD0" },
    showLegend: { type: Boolean, default: true },
    legendItems: { type: Array, default: () => ["Atual", "Esperado"] },
    goalStrokeWidth: { type: Number, default: 10 },
    goalStrokeHeight: { type: Number, default: 0 },
    goalStrokeLineCap: { type: String, default: "round" },
    goalName: { type: String, default: "Esperado" },
    showDataLabels: { type: Boolean, default: true },
    dataLabelFormat: {
      type: String,
      default: "value/goal", // 'value/goal', 'value', 'percentage'
    },
  },
  computed: {
    finalPrimaryColor() {
      return this.primaryDynamicColor || this.primaryColor;
    },
    finalColors() {
      return this.autoColors && this.processedChartData.length > 1
        ? this.dynamicColors
        : [this.finalPrimaryColor];
    },
    processedChartData() {
      if (this.chartData.length > 0) {
        return this.chartData.map((item) => ({
          ...item,
          goals: item.goals?.map((goal) => ({
            name: this.goalName,
            value: goal.value,
            strokeWidth: this.goalStrokeWidth,
            strokeHeight: this.goalStrokeHeight,
            strokeLineCap: this.goalStrokeLineCap,
            strokeColor: this.goalColor,
          })),
        }));
      }

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
      const element = document.querySelector(`#${this.chartId}`);
      if (!element) return;
      if (this.chart) this.chart.destroy();

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
          background: this.currentTheme,
        },
        theme: {
          mode: this.currentTheme,
        },
        plotOptions: {
          bar: {
            horizontal: this.horizontal,
          },
        },
        colors: this.finalColors,
        dataLabels: {
          enabled: this.showDataLabels,
          style: {
            colors: [this.currentTheme === "dark" ? "#fff" : "#fff"],
          },
          formatter: (val, opt) => {
            const goals =
              opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals;

            if (goals?.length) {
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

            return this.dataLabelFormat === "currency"
              ? new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(val)
              : val.toString();
          },
        },
        xaxis: {
          labels: {
            style: {
              colors: this.currentTheme === "dark" ? "#fff" : "#000",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: this.currentTheme === "dark" ? "#fff" : "#000",
            },
          },
        },
        legend: {
          show: this.showLegend,
          showForSingleSeries: true,
          customLegendItems: this.legendItems,
          markers: {
            fillColors: [this.finalPrimaryColor, this.goalColor],
          },
          labels: {
            colors: this.currentTheme === "dark" ? "#fff" : "#000",
          },
        },
        tooltip: {
          theme: this.currentTheme,
        },
      };

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
