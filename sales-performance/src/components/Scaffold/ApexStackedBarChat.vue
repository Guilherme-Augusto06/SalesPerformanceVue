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
  mixins: [ColorMixin],
  data() {
    return {
      chartId: `apex-stacked-bar-chart-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      chart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
  props: {
    title: {
      type: String,
      default: "Gráfico de Barras Empilhadas",
    },
    series: {
      type: Array,
      default: () => [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6, 9, 4],
        },
        {
          name: "Reborn Kid",
          data: [25, 12, 19, 32, 25, 24, 10],
        },
      ],
    },
    categories: {
      type: Array,
      default: () => [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    chartHeight: {
      type: Number,
      default: 350,
    },
    colors: {
      type: Array,
      default: () => ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
    stacked: {
      type: Boolean,
      default: true,
    },
    strokeWidth: {
      type: Number,
      default: 1,
    },
    strokeColors: {
      type: Array,
      default: () => ["#fff"],
    },
    showDataLabels: {
      type: Boolean,
      default: true,
    },
    showTotal: {
      type: Boolean,
      default: true,
    },
    totalOffsetX: {
      type: Number,
      default: 0,
    },
    totalFontSize: {
      type: String,
      default: "13px",
    },
    totalFontWeight: {
      type: [String, Number],
      default: 900,
    },
    xAxisFormatter: {
      type: Function,
      default: (val) => val + "K",
    },
    yAxisTitle: {
      type: String,
      default: undefined,
    },
    tooltipFormatter: {
      type: Function,
      default: (val) => val + "K",
    },
    fillOpacity: {
      type: Number,
      default: 1,
    },
    showLegend: {
      type: Boolean,
      default: true,
    },
    legendPosition: {
      type: String,
      default: "top", // 'top', 'right', 'bottom', 'left'
    },
    legendHorizontalAlign: {
      type: String,
      default: "left", // 'left', 'center', 'right'
    },
    legendOffsetX: {
      type: Number,
      default: 40,
    },
    legendOffsetY: {
      type: Number,
      default: 0,
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
      // Destruir o gráfico anterior se existir
      if (this.chart) {
        this.chart.destroy();
      }

      const options = {
        series: this.series,
        chart: {
          type: "bar",
          height: this.chartHeight,
          stacked: this.stacked,
        },
        colors: this.finalColors,
        plotOptions: {
          bar: {
            horizontal: this.horizontal,
            dataLabels: {
              total: {
                enabled: this.showTotal,
                offsetX: this.totalOffsetX,
                style: {
                  fontSize: this.totalFontSize,
                  fontWeight: this.totalFontWeight,
                },
              },
            },
          },
        },
        dataLabels: {
          enabled: this.showDataLabels,
        },
        stroke: {
          width: this.strokeWidth,
          colors: this.strokeColors,
        },
        xaxis: {
          categories: this.categories,
          labels: {
            formatter: this.xAxisFormatter,
          },
        },
        yaxis: {
          title: {
            text: this.yAxisTitle,
          },
        },
        tooltip: {
          y: {
            formatter: this.tooltipFormatter,
          },
        },
        fill: {
          opacity: this.fillOpacity,
        },
        legend: {
          show: this.showLegend,
          position: this.legendPosition,
          horizontalAlign: this.legendHorizontalAlign,
          offsetX: this.legendOffsetX,
          offsetY: this.legendOffsetY,
        },
      };

      this.chart = new ApexCharts(
        document.querySelector(`#${this.chartId}`),
        options
      );
      this.chart.render();
    },
  },
  watch: {
    series: {
      handler() {
        this.renderChart();
      },
      deep: true,
    },
    categories: {
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
[id^="apex-stacked-bar-chart-"] {
  width: 100%;
}
</style>
