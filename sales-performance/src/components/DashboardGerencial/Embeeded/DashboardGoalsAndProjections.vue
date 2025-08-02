<template>
  <div>
    <div>
      <h1 class="text-h3 font-weight-bold mb-2 text-teal-darken-3">
        Metas e Projeções
      </h1>
      <p class="text-subtitle-1 text-grey">Dashboard</p>
    </div>
    <v-row class="mt-4">
      <v-col cols="12" md="12">
        <DataTable />
      </v-col>
      <v-col cols="12" md="12">
        <ApexAreaAlternativeChart
          :title="`Comparação Meta vs Real`"
          :series="ComparacaoRealVsMeta.series"
          :categories="ComparacaoRealVsMeta.meses"
          :chart-height="ComparacaoRealVsMeta.chartHeight"
          :colors="ComparacaoRealVsMeta.colors"
          :stroke-curve="ComparacaoRealVsMeta.strokeCurve"
          :stroke-width="ComparacaoRealVsMeta.strokeWidth"
          x-axis-type="category"
          :fill-type="ComparacaoRealVsMeta.fillType"
          :show-data-labels="ComparacaoRealVsMeta.showDataLabels"
          :legend-position="ComparacaoRealVsMeta.legendPosition"
          :show-grid="ComparacaoRealVsMeta.showGrid"
          :grid-colors="ComparacaoRealVsMeta.gridColors"
          :grid-opacity="ComparacaoRealVsMeta.gridOpacity"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ApexAreaChart from "./ApexAreaChart.vue";
import ApexDonutChart from "./ApexDonutChart.vue";
import ApexBarChart from "./ApexBarChart.vue";
import ApexColumnChart from "./ApexColumnChart.vue";
import ApexBarAlternativeChart from "./ApexBarAlternativeChart.vue";
import ApexAreaAlternativeChart from "./ApexAreaAlternativeChart.vue";
import ApexRadialChart from "./ApexRadialChart.vue";
import ApexBarBasicChart from "./ApexBarBasicChart.vue";
import ApexAlternativeDonutChart from "./ApexAlternativeDonutChart.vue";
import MapDrilldown from "./MapDrilldown.vue";
import SimpleCard from "./SimpleCard.vue";
import DataTable from "./DataTable.vue";

// Importação dos dados de mockup
import { dashboardAnalysisByClientData } from "../../../utils/mockup/dashboard.js";

export default {
  name: "DashboardGoalsAndProjections",
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
    ApexAreaChart,
    ApexDonutChart,
    ApexBarChart,
    ApexColumnChart,
    ApexBarAlternativeChart,
    ApexAreaAlternativeChart,
    ApexRadialChart,
    ApexBarBasicChart,
    ApexAlternativeDonutChart,
    MapDrilldown,
    SimpleCard,
    DataTable,
  },
  data() {
    return {
      // Dados importados do mockup
      ComparacaoRealVsMeta: dashboardAnalysisByClientData.ComparacaoRealVsMeta,
      atingimentoMetaPorCanal:
        dashboardAnalysisByClientData.atingimentoMetaPorCanal,
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
