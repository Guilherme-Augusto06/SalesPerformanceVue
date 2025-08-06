<template>
  <div>
    <div>
      <h1 class="text-h4 font-weight-bold mb-2 text-deep-purple-darken-4">
        Análise por representante
      </h1>
      <p class="text-subtitle-1 text-grey">Dashboard</p>
    </div>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <BarChart
          :title="ComissoesPagasEstimadas.title"
          :categories="ComissoesPagasEstimadas.categories"
          :values="ComissoesPagasEstimadas.values"
          :goal-values="ComissoesPagasEstimadas.goalValues"
          :series-name="ComissoesPagasEstimadas.seriesName"
          :chart-height="ComissoesPagasEstimadas.chartHeight"
          :horizontal="ComissoesPagasEstimadas.horizontal"
          :primary-color="ComissoesPagasEstimadas.primaryColor"
          :goal-color="configuracoes.colorPalette.accent"
          :goal-stroke-width="12"
          goal-stroke-line-cap="square"
          goal-name="Meta"
          :data-label-format="ComissoesPagasEstimadas.dataLabelFormat"
          :legend-items="ComissoesPagasEstimadas.legendItems"
        />
      </v-col>
      <v-col cols="12" md="6">
        <BarChart
          :title="DesempenhoVendedor.title"
          :categories="DesempenhoVendedor.categories"
          :values="DesempenhoVendedor.values"
          :goal-values="false"
          :series-name="DesempenhoVendedor.seriesName"
          :chart-height="DesempenhoVendedor.chartHeight"
          :horizontal="DesempenhoVendedor.horizontal"
          :primary-color="DesempenhoVendedor.primaryColor"
          :goal-color="configuracoes.colorPalette.accent"
          :goal-stroke-width="12"
          :data-label-format="DesempenhoVendedor.dataLabelFormat"
          :legend-items="DesempenhoVendedor.legendItems"
        />
      </v-col>
      <v-col cols="12" md="12">
        <AreaAlternativeChart
          :title="`Atingimento de Meta - ${clienteSelecionado}`"
          :series="atingimentoMetaPorCanal.series"
          :categories="atingimentoMetaPorCanal.meses"
          :chart-height="atingimentoMetaPorCanal.chartHeight"
          :colors="atingimentoMetaPorCanal.colors"
          :stroke-curve="atingimentoMetaPorCanal.strokeCurve"
          :stroke-width="atingimentoMetaPorCanal.strokeWidth"
          x-axis-type="category"
          :fill-type="atingimentoMetaPorCanal.fillType"
          :show-data-labels="atingimentoMetaPorCanal.showDataLabels"
          :legend-position="atingimentoMetaPorCanal.legendPosition"
          :show-grid="atingimentoMetaPorCanal.showGrid"
          :grid-colors="atingimentoMetaPorCanal.gridColors"
          :grid-opacity="atingimentoMetaPorCanal.gridOpacity"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import BarChart from "../Scaffold/BarChart.vue";
import AreaAlternativeChart from "../Scaffold/AreaAlternativeChart.vue";
import MapDrilldown from "../Scaffold/MapDrilldown.vue";

// Importação dos dados de mockup
import {
  ComissoesPagasEstimadas,
  dashboardAnalysisByClientData,
  DesempenhoVendedor,
} from "../../utils/mockup/dashboard.js";

export default {
  name: "DashboardAnalysisByCanal",
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
    BarChart,
    AreaAlternativeChart,
    MapDrilldown,
  },
  data() {
    return {
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
