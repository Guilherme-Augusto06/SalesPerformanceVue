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
  name: "ApexColumnChart",
  mixins: [ColorMixin],
  data() {
    return {
      chartId: `apex-column-chart-${Math.random().toString(36).substr(2, 9)}`,
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
      default: "Gráfico de Colunas",
    },
    series: {
      type: Array,
      default: () => [
        {
          name: "PRODUTO A",
          data: [44, 55, 41, 67, 22, 43, 21, 49],
        },
        {
          name: "PRODUTO B",
          data: [13, 23, 20, 8, 13, 27, 33, 12],
        },
        {
          name: "PRODUTO C",
          data: [11, 17, 15, 15, 21, 14, 15, 13],
        },
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
    chartHeight: {
      type: Number,
      default: 350,
    },
    chartType: {
      type: String,
      default: "bar", // 'bar' ou 'column'
    },
    stacked: {
      type: Boolean,
      default: true,
    },
    stackType: {
      type: String,
      default: "100%", // 'normal', '100%'
    },
    colors: {
      type: Array,
      default: () => ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
    },
    showLegend: {
      type: Boolean,
      default: true,
    },
    legendPosition: {
      type: String,
      default: "right", // 'top', 'right', 'bottom', 'left'
    },
    fillOpacity: {
      type: Number,
      default: 1,
    },
    showDataLabels: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Boolean,
      default: true,
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
          type: this.chartType,
          height: this.chartHeight,
          stacked: this.stacked,
          stackType: this.stackType,
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
        },
        yaxis: {
          title: {
            text: undefined,
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
        tooltip: {
          y: {
            formatter: function (val) {
              return val.toString();
            },
          },
        },
      };

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

      // Criar nova instância do gráfico
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
