<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title v-if="title" class="text-h6 font-weight-medium mb-3">
    </v-card-title>
    <div
      :id="mapContainerId"
      :style="{ height: height + 'px', width: '100%' }"
    ></div>
  </v-card>
</template>

<script>
import * as Highcharts from "highcharts/highmaps";
import mapData from "@highcharts/map-collection/countries/br/br-all.geo.json";
import { useTheme } from "vuetify";
import { watch } from "vue";

export default {
  name: "MapDrilldown",
  props: {
    title: { type: String, default: "Mapa do Brasil" },
    data: { type: Array, default: () => [] },
    seriesName: { type: String, default: "Dados" },
    colorStops: {
      type: Array,
      default: () => [
        [0, "#EFEFFF"],
        [0.5, "#4444FF"],
        [1, "#000022"],
      ],
    },
    hoverColor: { type: String, default: "#fff" },
    showDataLabels: { type: Boolean, default: true },
    dataLabelFormat: { type: String, default: "{point.code}" },
    minValue: { type: Number, default: 0 },
    maxValue: { type: Number, default: null },
    height: { type: Number, default: 400 },
    enableNavigation: { type: Boolean, default: true },
  },
  data() {
    return {
      chart: null,
      mapContainerId: `map-container-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      currentTheme: "light",
    };
  },
  mounted() {
    const theme = useTheme();
    this.currentTheme = theme.global.name.value;

    this.unwatch = watch(
      () => theme.global.name.value,
      (newVal) => {
        this.currentTheme = newVal;
        this.loadMap();
      }
    );

    this.$nextTick(() => {
      this.loadMap();
    });
  },
  beforeUnmount() {
    if (this.chart) this.chart.destroy();
    if (this.unwatch) this.unwatch();
  },
  methods: {
    loadMap() {
      if (!document.getElementById(this.mapContainerId)) {
        setTimeout(() => this.loadMap(), 100);
        return;
      }

      const isDark = this.currentTheme === "dark";

      const mapDataSeries =
        this.data.length > 0
          ? this.data.map((item) => [item.key || item.state, item.value])
          : mapData.features.map((f) => [
              f.properties["hc-key"],
              Math.floor(Math.random() * 100),
            ]);

      const chartOptions = {
        chart: {
          map: mapData,
          height: this.height,
          backgroundColor: isDark ? "" : "#FFFFFF",
        },

        title: {
          text: this.title,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            color: isDark ? "#FFFFFF" : "#000000",
          },
        },

        mapNavigation: {
          enabled: this.enableNavigation,
          buttonOptions: {
            verticalAlign: "bottom",
            theme: {
              fill: isDark ? "#2c2c2c" : "#FFFFFF",
              style: {
                color: isDark ? "#FFFFFF" : "#000000",
              },
            },
          },
        },
        legend: {
          enabled: false,
        },
        colorAxis: {
          min: this.minValue,
          max: this.maxValue,
          stops: this.colorStops,
          minColor: this.colorStops[0]?.[1] || "#EFEFFF",
          maxColor:
            this.colorStops[this.colorStops.length - 1]?.[1] || "#000022",
        },
        series: [
          {
            accessibility: {
              point: {
                valueDescriptionFormat: `{xDescription}, {point.value} ${this.seriesName}`,
              },
            },
            animation: { duration: 1000 },
            data: mapDataSeries,
            joinBy: "hc-key",
            name: this.seriesName,
            states: {
              hover: { color: this.hoverColor },
            },
            dataLabels: {
              enabled: this.showDataLabels,
              color: isDark ? "#FFFFFF" : "#000000",
              format: this.dataLabelFormat,
              style: {
                fontSize: "11px",
                fontWeight: "bold",
              },
            },
            tooltip: {
              pointFormat: `<b>{point.name}</b><br/>${this.seriesName}: <b>{point.value:,.0f}</b>`,
              backgroundColor: isDark ? "rgba(0,0,0,0.85)" : "#FFFFFF",
              style: {
                color: isDark ? "#FFFFFF" : "#000000",
              },
            },
          },
        ],
      };

      if (this.chart) this.chart.destroy();

      this.chart = Highcharts.mapChart(this.mapContainerId, chartOptions);
    },
  },
  watch: {
    data: {
      handler() {
        this.loadMap();
      },
      deep: true,
    },
    title() {
      this.loadMap();
    },
    seriesName() {
      this.loadMap();
    },
    colorStops: {
      handler() {
        this.loadMap();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.highcharts-container,
.highcharts-root {
  width: 100%;
  height: 100%;
}
</style>
