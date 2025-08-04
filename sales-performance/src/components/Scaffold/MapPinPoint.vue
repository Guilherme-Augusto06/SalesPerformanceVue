<template>
  <v-card elevation="2" rounded="lg" class="pa-4">
    <v-card-title class="text-h6 font-weight-medium mb-3">
      Distribuição de Vendas por Região
    </v-card-title>
    <div id="map" style="height: 500px"></div>
  </v-card>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "MapaBrasilComPontos",
  data() {
    return {
      map: null,
      pontos: [
        { nome: "São Paulo - SP", coords: [-23.55052, -46.633308] },
        { nome: "Rio de Janeiro - RJ", coords: [-22.906847, -43.172896] },
        { nome: "Belo Horizonte - MG", coords: [-19.916681, -43.934493] },
        { nome: "Manaus - AM", coords: [-3.119028, -60.021731] },
      ],
    };
  },
  mounted() {
    this.inicializarMapa();
  },
  methods: {
    inicializarMapa() {
      // Centraliza o mapa no Brasil
      this.map = L.map("map").setView([-14.235, -51.9253], 4);

      // Limita o mapa aos limites do Brasil
      const limitesBrasil = L.latLngBounds(
        L.latLng(-34.0, -74.0), // Sudoeste
        L.latLng(5.5, -32.0) // Nordeste
      );
      this.map.setMaxBounds(limitesBrasil);
      this.map.on("drag", () => {
        this.map.panInsideBounds(limitesBrasil, { animate: false });
      });

      // Camada base
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // Adiciona os marcadores
      this.pontos.forEach((ponto) => {
        L.marker(ponto.coords).addTo(this.map).bindPopup(ponto.nome);
      });
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
}
</style>
