<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title v-if="title" class="text-h6 font-weight-medium mb-3">
      {{ title }}
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

export default {
  name: "MapDrilldown",
  props: {
    title: {
      type: String,
      default: "Mapa do Brasil",
    },
    data: {
      type: Array,
      default: () => [],
    },
    seriesName: {
      type: String,
      default: "Dados",
    },
    colorStops: {
      type: Array,
      default: () => [
        [0, "#EFEFFF"],
        [0.5, "#4444FF"],
        [1, "#000022"],
      ],
    },
    hoverColor: {
      type: String,
      default: "#BADA55",
    },
    showDataLabels: {
      type: Boolean,
      default: true,
    },
    dataLabelFormat: {
      type: String,
      default: "{point.code}",
    },
    minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: 400,
    },
    enableNavigation: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      chart: null,
      mapContainerId: `map-container-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
    };
  },
  methods: {
    loadMap() {
      // Aguarda o DOM estar pronto
      if (!document.getElementById(this.mapContainerId)) {
        setTimeout(() => this.loadMap(), 100);
        return;
      }

      // Converte os dados para o formato correto do Highcharts
      const mapDataSeries =
        this.data.length > 0
          ? this.data.map((item) => [
              item.key || item.state, // hc-key
              item.value, // value
            ])
          : mapData.features.map((f, i) => [
              f.properties["hc-key"],
              Math.floor(Math.random() * 100),
            ]);

      // Configuração do mapa seguindo a documentação oficial
      const chartOptions = {
        chart: {
          map: mapData,
          height: this.height,
        },
        title: {
          text: this.title,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
        mapNavigation: {
          enabled: this.enableNavigation,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },
        legend: {
          layout: "horizontal",
          borderWidth: 0,
          backgroundColor: "rgba(255,255,255,0.85)",
          floating: true,
          verticalAlign: "top",
          y: 25,
        },
        colorAxis: {
          min: this.minValue,
          max: this.maxValue,
          stops: this.colorStops,
          minColor: this.colorStops[0] ? this.colorStops[0][1] : "#EFEFFF",
          maxColor: this.colorStops[this.colorStops.length - 1]
            ? this.colorStops[this.colorStops.length - 1][1]
            : "#000022",
        },
        series: [
          {
            accessibility: {
              point: {
                valueDescriptionFormat:
                  "{xDescription}, {point.value} " + this.seriesName,
              },
            },
            animation: {
              duration: 1000,
            },
            data: mapDataSeries,
            joinBy: "hc-key",
            name: this.seriesName,
            states: {
              hover: {
                color: this.hoverColor,
              },
            },
            dataLabels: {
              enabled: this.showDataLabels,
              color: "#FFFFFF",
              format: this.dataLabelFormat,
              style: {
                fontSize: "11px",
                fontWeight: "bold",
              },
            },
            tooltip: {
              pointFormat:
                "<b>{point.name}</b><br/>" +
                this.seriesName +
                ": <b>{point.value:,.0f}</b>",
              backgroundColor: "rgba(0,0,0,0.8)",
              style: {
                color: "#FFFFFF",
              },
            },
          },
        ],
      };

      // Destroi o gráfico anterior se existir
      if (this.chart) {
        this.chart.destroy();
      }

      // Cria o novo gráfico
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
  mounted() {
    this.$nextTick(() => {
      this.loadMap();
    });
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
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
