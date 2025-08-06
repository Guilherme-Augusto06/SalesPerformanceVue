<template>
  <div>
    <div>
      <h1 class="text-h4 font-weight-bold mb-2 text-orange-darken-4">
        Análise por pedidos e mix
      </h1>
      <p class="text-subtitle-1 text-grey">Dashboard</p>
    </div>
    <v-row class="mt-4">
      <v-col class="mb-4" cols="12" md="6">
        <StackedBarChart
          :title="vendasData.title"
          :series="vendasData.series"
          :categories="vendasData.categories"
          :chart-height="vendasData.chartHeight"
          :colors="vendasData.colors"
          :horizontal="vendasData.horizontal"
          :stacked="vendasData.stacked"
          :stroke-width="vendasData.strokeWidth"
          :stroke-colors="vendasData.strokeColors"
          :show-data-labels="vendasData.showDataLabels"
          :show-total="vendasData.showTotal"
          :total-offset-x="vendasData.totalOffsetX"
          :total-font-size="vendasData.totalFontSize"
          :total-font-weight="vendasData.totalFontWeight"
          :x-axis-formatter="vendasData.xAxisFormatter"
          :y-axis-title="vendasData.yAxisTitle"
          :tooltip-formatter="vendasData.tooltipFormatter"
          :fill-opacity="vendasData.fillOpacity"
          :show-legend="vendasData.showLegend"
          :legend-position="vendasData.legendPosition"
          :legend-horizontal-align="vendasData.legendHorizontalAlign"
          :legend-offset-x="vendasData.legendOffsetX"
          :legend-offset-y="vendasData.legendOffsetY"
        />
      </v-col>
      <v-col class="mb-4" cols="12" md="6">
        <BarChart
          title="Frequência média de compra"
          :categories="DesempenhoVendedor.categories"
          :values="DesempenhoVendedor.values"
          :goal-values="false"
          :series-name="DesempenhoVendedor.seriesName"
          :chart-height="DesempenhoVendedor.chartHeight"
          :horizontal="DesempenhoVendedor.horizontal"
          primary-color="#E65100"
          :goal-color="configuracoes.colorPalette.accent"
          :goal-stroke-width="12"
          :data-label-format="DesempenhoVendedor.dataLabelFormat"
          :legend-items="DesempenhoVendedor.legendItems"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-4" cols="12" md="12">
        <box-plot
          :title="ticketMedioPorCliente.title"
          :series-name="ticketMedioPorCliente.seriesName"
          :chart-data="ticketMedioPorCliente.chartData"
          :chart-height="ticketMedioPorCliente.chartHeight"
          :colors="ticketMedioPorCliente.colors"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import BarChart from "../Scaffold/BarChart.vue";
import StackedBarChart from "../Scaffold/StackedBarChart.vue";
import BoxPlot from "../Scaffold/BoxPlot.vue";

import {
  stackedBarChartData,
  boxPlotTicketMedioData,
} from "../../utils/mockup/dashboard.js";
// Importação dos dados de mockup
import { dashboardAnalysisByClientData } from "../../utils/mockup/dashboard.js";

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
    BarChart,
    StackedBarChart,
    BoxPlot,
  },
  data() {
    return {
      // Dados do mix de produtos por cliente
      DesempenhoVendedor: dashboardAnalysisByClientData.DesempenhoVendedor,
      vendasData: stackedBarChartData.mixProdutosPorCliente,
      mixPorPeriodo: stackedBarChartData.mixProdutosPorPeriodo,
      participacaoMix: stackedBarChartData.participacaoMixClientesTop,

      // Dados para BoxPlot - Ticket Médio
      ticketMedioPorCliente: boxPlotTicketMedioData.ticketMedioPorCliente,

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
