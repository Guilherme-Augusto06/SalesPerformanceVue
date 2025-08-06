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
import { watch, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "ApexBarBasicChart",
  props: {
    title: {
      type: String,
      default: "Top 10 Produtos Mais Vendidos",
    },
  },
  data() {
    return {
      chartId: `apex-bar-basic-chart-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      chart: null,
      currentTheme: "light",
      unwatch: null,
    };
  },
  mounted() {
    const theme = useTheme();
    this.currentTheme = theme.global.name.value;

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
  methods: {
    renderChart() {
      const el = document.querySelector(`#${this.chartId}`);
      if (!el) return;
      if (this.chart) this.chart.destroy();

      const options = {
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
          },
        ],
        chart: {
          type: "bar",
          height: 350,
          background: this.currentTheme,
        },
        theme: {
          mode: this.currentTheme,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ],
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
          theme: this.currentTheme,
        },
      };

      this.chart = new ApexCharts(el, options);
      this.chart.render();
    },
  },
};
</script>

<style scoped>
[id^="apex-bar-basic-chart-"] {
  width: 100%;
}
</style>
