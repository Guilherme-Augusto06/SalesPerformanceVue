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
  name: "ApexDonutChart",
  props: {
    title: {
      type: String,
      default: "Margem bruta vs margem líquida",
    },
  },
  data() {
    return {
      chartId: `apex-alternative-donut-chart-${Math.random()
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
      (newVal) => {
        this.currentTheme = newVal;
        this.renderChart(); // Recria o gráfico com novo tema
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
        series: [44, 55],
        chart: {
          type: "donut",
          height: 350,
          background: this.currentTheme,
          dropShadow: {
            enabled: true,
            color: "#111",
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.5,
          },
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true,
                },
              },
            },
          },
        },
        labels: ["Margem Bruta", "Margem Líquida"],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 1,
          },
        },
        fill: {
          type: "pattern",
          opacity: 1,
          pattern: {
            enabled: true,
            style: [
              "verticalLines",
              "squares",
              "horizontalLines",
              "circles",
              "slantedLines",
            ],
          },
        },
        theme: {
          mode: this.currentTheme, // light or dark
        },
        title: {
          text: this.title,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      this.chart = new ApexCharts(element, options);
      this.chart.render();
    },
  },
};
</script>

<style scoped>
[id^="apex-alternative-donut-chart"] {
  width: 100%;
}
</style>
