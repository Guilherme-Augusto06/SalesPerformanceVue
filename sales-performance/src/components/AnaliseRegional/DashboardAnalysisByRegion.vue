<template>
  <div>
    <div>
      <h1 class="text-h4 font-weight-bold mb-2 text-blue-grey-darken-3">
        Análise por região
      </h1>
      <p class="text-subtitle-1 text-grey">Dashboard</p>
    </div>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <map-drilldown
          title="Potencial de Vendas por Região"
          :data="vendasData.data"
          :series-name="vendasData.seriesName"
          :color-stops="vendasData.colorStops"
          :hover-color="vendasData.hoverColor"
          :min-value="vendasData.minValue"
          :max-value="vendasData.maxValue"
          :height="vendasData.height"
          :show-data-labels="vendasData.showDataLabels"
          :data-label-format="vendasData.dataLabelFormat"
          :enable-navigation="false"
        />
      </v-col>
      <v-col cols="12" md="6">
        <map-drilldown
          title="Potencial de Vendas por Estado"
          :data="vendasData.data"
          :series-name="vendasData.seriesName"
          :color-stops="vendasData.colorStops"
          :hover-color="vendasData.hoverColor"
          :min-value="vendasData.minValue"
          :max-value="vendasData.maxValue"
          :height="vendasData.height"
          :show-data-labels="vendasData.showDataLabels"
          :data-label-format="vendasData.dataLabelFormat"
          :enable-navigation="false"
        />
      </v-col>
      <v-col cols="12" md="12">
        <map-pin-point />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import DonutChart from "../Scaffold/DonutChart.vue";
import BarChart from "../Scaffold/BarChart.vue";
import MapDrilldown from "../Scaffold/MapDrilldown.vue";
import MapPinPoint from "../Scaffold/MapPinPoint.vue";
("");

// Importação dos dados de mockup
import {
  ComissoesPagasEstimadas,
  dashboardAnalysisByClientData,
  DesempenhoVendedor,
  mapDrilldownData,
} from "../../utils/mockup/dashboard.js";

export default {
  computed: {
    colors() {
      const colorMap = {
        managerial: "#1976d2", // primary (azul)
        analysis: "#c62828", // red-darken-4
        customers: "#4a148c", // purple-darken-4
        filters: "#311b92", // deep-purple-darken-4
        ranking: "#00695c", // teal-darken-3
        map: "#37474f", // blue-grey-darken-3
        trends: "#bf360c", // deep-orange-darken-4
      };
      return colorMap[this.activeDashboard] || "#757575"; // grey como fallback
    },
  },
  components: {
    DonutChart,
    BarChart,
    MapDrilldown,
    MapPinPoint,
  },
  data() {
    return {
      // Dados do mapa
      vendasData: mapDrilldownData.vendasPorEstado,

      // Dados importados do mockup
      atingimentoMetaPorCanal:
        dashboardAnalysisByClientData.atingimentoMetaPorCanal,
      DesempenhoVendedor: dashboardAnalysisByClientData.DesempenhoVendedor,
      ComissoesPagasEstimadas:
        dashboardAnalysisByClientData.ComissoesPagasEstimadas,
      rankingVolume: dashboardAnalysisByClientData.rankingClientesVolume,
      rankingValor: dashboardAnalysisByClientData.rankingClientesValor,
      rankingVolumeAuto:
        dashboardAnalysisByClientData.rankingClientesVolumeAuto,
      atingimentoMeta: dashboardAnalysisByClientData.atingimentoMeta,
      historicoCompras: dashboardAnalysisByClientData.historicoCompras,
      frequenciaPedidos: dashboardAnalysisByClientData.frequenciaPedidos,
      clientesInativos: dashboardAnalysisByClientData.clientesInativos,
      configuracoes: dashboardAnalysisByClientData.configuracoes,
      metricas: dashboardAnalysisByClientData.metricas,
      giroEstoque: dashboardAnalysisByClientData.giroEstoque,
      itemsEmQueda: dashboardAnalysisByClientData.itemsEmQueda,

      // Cliente selecionado para filtro (padrão: Consolidado)
      clienteSelecionado:
        dashboardAnalysisByClientData.configuracoes.clienteSelecionado,

      // Filtros e configurações locais
      selectedFilter: null,
      dateRange: dashboardAnalysisByClientData.configuracoes.dateRange,

      // Dados temporários para compatibilidade (podem ser removidos se não utilizados)
      series: [
        {
          name: "Vendas",
          data: [44, 55, 41, 67, 22, 43, 21, 49],
        },
        {
          name: "Meta",
          data: [50, 60, 45, 70, 30, 50, 25, 55],
        },
      ],
    };
  },
};
</script>
