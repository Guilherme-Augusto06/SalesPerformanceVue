<template>
  <div>
        <div>
      <h1 class="text-h3 font-weight-bold mb-2 text-red-darken-4" >Dashboard</h1>
      <p class="text-subtitle-1 text-grey">Análise por Produto</p>
    </div>
        <v-row class="mt-4">
      <v-col cols="12" md="12">
        <ApexBarChart
        title="Vendas por código e descrição do produto"
        :categories="['Q1', 'Q2', 'Q3', 'Q4']"
        :values="[250, 320, 280, 380]"
        :goal-values="[300, 350, 300, 400]"
        series-name="Vendas Trimestrais"
        :chart-height="400"
        :horizontal="false"
        :primary-color="colorPalette.primary"
        :goal-color="colorPalette.accent"
        :goal-stroke-width="12"
        goal-stroke-line-cap="square"
        goal-name="Meta Trimestral"
        data-label-format="value"
        :legend-items="['Vendas', 'Meta']"
        />
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <ApexAreaChart
        title="Itens em queda de performance"
        :categories="itemsEmQueda.categories"
        :chart-data="itemsEmQueda.chartData"
        :chart-height="450"
        chart-type="area"
        stroke-curve="smooth"
        :primary-color="itemsEmQueda.colors"
        :show-grid="true"
        :grid-colors="['#e0e0e0', 'transparent']"
        :grid-opacity="0.3"
        fill-type="gradient"
        :fill-opacity="0.2"
        :show-data-labels="false"
        />
      </v-col>

    </v-row>
    

    
    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarAlternativeChart
        title="Performance por linha"
        title-text="Melhores linhas"
        :categories="['Scania R440', 'Volvo FH540', 'MB Atego', 'Ford Cargo', 'Iveco Daily']"
        :values="[1380, 1200, 1100, 690, 580]"
        :colors="colorPalette.barColors"
        />
      </v-col>
      <v-col cols="6" sm="3" md="4">
        <ApexDonutChart
          :title="giroEstoque.title"
          :series="giroEstoque.series"
          :labels="giroEstoque.labels"
          :colors="giroEstoque.colors"
          :chart-height="400"
          :show-data-labels="true"
          :data-labels-style="{ fontSize: '14px', fontWeight: 'bold' }"
          legend-position="bottom"
          :stroke-width="2"
          stroke-color="#fff"
          tooltip-format="percentage"
        />
      </v-col>

    </v-row>


  </div>
</template>
<script>
import ApexAreaChart from './ApexAreaChart.vue';
import ApexDonutChart from './ApexDonutChart.vue';
import ApexBarChart from './ApexBarChart.vue';
import ApexBarAlternativeChart from './ApexBarAlternativeChart.vue';
import ApexAreaAlternativeChart from './ApexAreaAlternativeChart.vue';
import ApexRadialChart from './ApexRadialChart.vue';
import ApexBarBasicChart from './ApexBarBasicChart.vue';
import ApexAlternativeDonutChart from './ApexAlternativeDonutChart.vue';
import MapDrilldown from './MapDrilldown.vue';
import SimpleCard from './SimpleCard.vue';


export default {
  name: 'DashboardAnalysis',
    computed: {
    colors() {
      const colorMap = {
        'managerial': '#1976d2',    // primary (azul)
        'analysis': '#c62828',      // red-darken-4
        'customers': '#4a148c',     // purple-darken-4
        'filters': '#311b92',       // deep-purple-darken-4
        'ranking': '#00695c',       // teal-darken-3
        'map': '#37474f',           // blue-grey-darken-3
        'trends': '#bf360c'         // deep-orange-darken-4
      };
      return colorMap[this.activeDashboard] || '#757575'; // grey como fallback
    }
  },
  components: {
    ApexAreaChart,
    ApexDonutChart,
    ApexBarChart,
    ApexBarAlternativeChart,
    ApexAreaAlternativeChart,
    ApexRadialChart,
    ApexBarBasicChart,
    ApexAlternativeDonutChart,
    MapDrilldown,
    SimpleCard
  },
  data() {
    return {
      selectedFilter: null,
      dateRange: {
        from: '2024-01-01',
        to: '2024-12-31'
      },
      // Paleta de cores dinâmica baseada em red-darken-4
      colorPalette: {
        primary: '#c62828',      // red-darken-4 (principal)
        secondary: '#1565c0',    // blue-darken-3 (complementar)
        accent: '#00C853',       // green-darken-3 (sucesso)
        warning: '#ef6c00',      // orange-darken-3 (alerta)
        info: '#00838f',         // cyan-darken-3 (informação)
        neutral: '#424242',      // grey-darken-3 (neutro)
        light: '#6a1b9a',        // purple-darken-3 (destaque)
        gradient: ['#c62828', '#d32f2f', '#f44336', '#e57373', '#ffcdd2', '#1565c0', '#2e7d32', '#ef6c00'],
        // Paleta diversificada para gráficos de barras
        barColors: ['#c62828', '#6200EA', '#004D40', '#C51162', '#E65100']
      },
      meusProdutos: ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'],
      minhasVendas: [1200, 1100, 900, 800, 700],
      // Dados de giro de estoque
      giroEstoque: {
        series: [65, 35],
        labels: ['Vendas Realizadas', 'Estoque Parado'],
        colors: ['#00C853', '#c62828'], // Verde para sucesso, vermelho para alerta
        title: 'Giro de estoque x vendas'
      },
      // Dados dos itens com pior performance
      itemsEmQueda: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        chartData: [
          {
            name: 'Embreagem Scania R440',
            data: [1000, 820, 780, 540, 380, 230, 150]
          },
          {
            name: 'Embreagem Volvo FH540',
            data: [720, 680, 360, 320, 290, 250, 150]
          },
          {
            name: 'Embreagem MB Atego',
            data: [320, 300, 270, 240, 200, 160, 120]
          },
          {
            name: 'Embreagem Ford Cargo',
            data: [280, 250, 220, 180, 150, 120, 100]
          },
          {
            name: 'Embreagem Iveco Daily',
            data: [180, 160, 140, 120, 100, 80, 60]
          }
        ],
        colors: ['#c62828', '#1565c0', '#2e7d32', '#ef6c00', '#00838f', '#6a1b9a', '#424242', '#d32f2f']
      }
    }
  },
};    
</script>