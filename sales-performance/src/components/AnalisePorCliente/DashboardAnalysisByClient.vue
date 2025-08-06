<template>
  <div>
    <div>
      <h1 class="text-h4 font-weight-bold mb-2 text-purple-darken-4">
        Análise por cliente
      </h1>
      <p class="text-subtitle-1 text-grey">Dashboard</p>
    </div>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <BarChart
          :title="rankingVolume.title"
          :categories="rankingVolume.categories"
          :values="rankingVolume.values"
          :goal-values="false"
          :series-name="rankingVolume.seriesName"
          :chart-height="rankingVolume.chartHeight"
          :horizontal="rankingVolume.horizontal"
          :primary-color="rankingVolume.primaryColor"
          :goal-color="configuracoes.colorPalette.accent"
          :goal-stroke-width="12"
          goal-stroke-line-cap="square"
          goal-name="Meta Volume"
          :data-label-format="rankingVolume.dataLabelFormat"
          :legend-items="rankingVolume.legendItems"
        />
      </v-col>
      <v-col cols="12" md="6">
        <BarChart
          :title="rankingValor.title"
          :categories="rankingValor.categories"
          :values="rankingValor.values"
          :goal-values="false"
          :series-name="rankingValor.seriesName"
          :chart-height="rankingValor.chartHeight"
          :horizontal="rankingValor.vertical"
          :primary-color="rankingValor.primaryColor"
          :goal-color="configuracoes.colorPalette.accent"
          :goal-stroke-width="12"
          goal-stroke-line-cap="square"
          goal-name="Meta Valor"
          :data-label-format="rankingValor.dataLabelFormat"
          :legend-items="rankingValor.legendItems"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <AreaAlternativeChart
          :title="`Atingimento de Meta - ${clienteSelecionado}`"
          :series="atingimentoMeta.series"
          :categories="atingimentoMeta.meses"
          :chart-height="atingimentoMeta.chartHeight"
          :colors="atingimentoMeta.colors"
          :stroke-curve="atingimentoMeta.strokeCurve"
          :stroke-width="atingimentoMeta.strokeWidth"
          x-axis-type="category"
          :fill-type="atingimentoMeta.fillType"
          :show-data-labels="atingimentoMeta.showDataLabels"
          :legend-position="atingimentoMeta.legendPosition"
          :show-grid="atingimentoMeta.showGrid"
          :grid-colors="atingimentoMeta.gridColors"
          :grid-opacity="atingimentoMeta.gridOpacity"
        />
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <AreaChart
          :title="historicoCompras.title"
          :categories="historicoCompras.meses"
          :chart-data="historicoCompras.chartData"
          :chart-height="historicoCompras.chartHeight"
          :chart-type="historicoCompras.chartType"
          :stroke-curve="historicoCompras.strokeCurve"
          :primary-color="historicoCompras.colors"
          :show-grid="historicoCompras.showGrid"
          :grid-colors="historicoCompras.gridColors"
          :grid-opacity="historicoCompras.gridOpacity"
          :fill-type="historicoCompras.fillType"
          :fill-opacity="historicoCompras.fillOpacity"
          :show-data-labels="historicoCompras.showDataLabels"
        />
      </v-col>
      <v-col cols="12" sm="3" md="6">
        <ColumnChart
          :title="frequenciaPedidos.title"
          :series="frequenciaPedidos.series"
          :categories="frequenciaPedidos.meses"
          :chart-height="frequenciaPedidos.chartHeight"
          :colors="frequenciaPedidos.colors"
          :stacked="frequenciaPedidos.stacked"
          :stack-type="frequenciaPedidos.stackType"
          :legend-position="frequenciaPedidos.legendPosition"
        />
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="12">
        <AreaChart
          :title="clientesInativos.title"
          :categories="clientesInativos.meses"
          :chart-data="clientesInativos.chartData"
          :chart-height="clientesInativos.chartHeight"
          :chart-type="clientesInativos.chartType"
          :stroke-curve="clientesInativos.strokeCurve"
          :primary-color="clientesInativos.colors"
          :show-grid="clientesInativos.showGrid"
          :grid-colors="clientesInativos.gridColors"
          :grid-opacity="clientesInativos.gridOpacity"
          :fill-type="clientesInativos.fillType"
          :fill-opacity="clientesInativos.fillOpacity"
          :show-data-labels="clientesInativos.showDataLabels"
          :enable-zoom="clientesInativos.enableZoom"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import AreaChart from "../Scaffold/AreaChart.vue";
import BarChart from "../Scaffold/BarChart.vue";
import ColumnChart from "../Scaffold/ColumnChart.vue";
import AreaAlternativeChart from "../Scaffold/AreaAlternativeChart.vue";

// Importação dos dados de mockup
import { dashboardAnalysisByClientData } from "../../utils/mockup/dashboard.js";

export default {
  name: "DashboardAnalysisByClient",
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
    AreaChart,
    BarChart,
    ColumnChart,
    AreaAlternativeChart,
  },
  data() {
    return {
      // Dados importados do mockup
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
