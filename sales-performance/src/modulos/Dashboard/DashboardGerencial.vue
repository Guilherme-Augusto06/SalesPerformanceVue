<template>
  <div class="ml-16 pa-6 mr-16">
    <!-- Título do Dashboard -->
    <div>
      <div
        class="elevation-2 rounded-xl pa-4 bg-white mb-6"
        :style="{ 'border-bottom': `10px solid ${borderColor}` }"
      >
        <div class="d-flex align-center justify-end mb-4 ga-2">
          <v-btn
            prepend-icon="mdi-filter"
            color="orange"
            variant="tonal"
            rounded="xl"
            class="font-weight-bold"
            >Filtrar ano atual</v-btn
          >
          <v-btn
            prepend-icon="$loading"
            color="blue"
            variant="tonal"
            rounded="xl"
            class="font-weight-bold"
            >Restaurar Filtros</v-btn
          >
          <v-btn
            prepend-icon="mdi-eye"
            color="purple"
            variant="tonal"
            rounded="xl"
            class="font-weight-bold"
            @click="toggleFilters"
            >Mostrar filtros</v-btn
          >
        </div>
        <v-expand-transition>
          <div v-if="toggleFiltersVisible">
            <v-row class="pa-4">
              <v-row>
                <v-col cols="12" md="2" class="d-flex align-center">
                  <v-date-input
                    v-model="model"
                    label="Selecionar período"
                    max-width="368"
                    multiple="range"
                  ></v-date-input>
                </v-col>
                <v-col cols="12" md="2">
                  <v-select
                    v-model="filters.mes"
                    :items="meses"
                    label="Filtrar Mês"
                    clearable
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <v-combobox
                    v-model="filters.produto"
                    :items="opcoesMockup.produtos"
                    label="Filtrar Produto"
                    clearable
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <v-combobox
                    v-model="filters.cliente"
                    :items="opcoesMockup.clientes"
                    label="Filtrar Cliente"
                    clearable
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <v-select
                    v-model="filters.regiao"
                    :items="opcoesMockup.regioes"
                    label="Filtrar Região"
                    clearable
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <v-select
                    v-model="filters.representante"
                    :items="opcoesMockup.representantes"
                    label="Filtrar Representante"
                    clearable
                  />
                </v-col>
              </v-row>
            </v-row>
          </div>
        </v-expand-transition>
      </div>
    </div>

    <!-- Debug: Mostrar dashboard ativo -->

    <!-- Renderização condicional dos dashboards -->
    <div v-if="activeDashboard === 'managerial'" key="managerial-dashboard">
      <DashboardManagerial key="managerial-component" />
    </div>

    <div v-if="activeDashboard === 'analysis'" key="analysis-dashboard">
      <DashboardAnalysis key="analysis-component" />
    </div>

    <div
      v-if="activeDashboard === 'analysisByClient'"
      key="analysisByClient-dashboard"
    >
      <DashboardAnalysisByClient
        key="analysisByClient-component"
        :active-dashboard="activeDashboard"
      />
    </div>
    <div
      v-if="activeDashboard === 'analysisByCanal'"
      key="analysisByCanal-dashboard"
    >
      <DashboardAnalysisByCanal
        key="analysisByCanal-component"
        :active-dashboard="activeDashboard"
      />
    </div>
    <div
      v-if="activeDashboard === 'GoalsAndProjections'"
      key="GoalsAndProjections-dashboard"
    >
      <DashboardGoalsAndProjections
        key="GoalsAndProjections-component"
        :active-dashboard="activeDashboard"
      />
    </div>

    <!-- Fallback para outros dashboards não implementados -->
    <div
      v-show="
        ![
          'managerial',
          'analysis',
          'analysisByClient',
          'analysisByCanal',
          'GoalsAndProjections',
        ].includes(activeDashboard)
      "
      class="pa-4"
    >
      <v-card class="pa-6 text-center">
        <v-card-title>Dashboard em Desenvolvimento</v-card-title>
        <v-card-text>
          <p>O dashboard "{{ activeDashboard }}" está em desenvolvimento.</p>
        </v-card-text>
      </v-card>
    </div>

    <div
      class="position-fixed d-flex flex-column ga-6"
      style="z-index: 1000; right: 1rem; top: 50%; transform: translateY(-50%)"
    >
      <v-btn
        class=""
        :color="activeDashboard === 'managerial' ? 'primary' : 'grey'"
        elevation="2"
        @click="switchDashboard('managerial')"
      >
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <v-btn
        class=""
        :color="activeDashboard === 'analysis' ? 'red-darken-3' : 'grey'"
        elevation="2"
        @click="switchDashboard('analysis')"
      >
        <v-icon>mdi-google-analytics</v-icon>
      </v-btn>
      <v-btn
        class=""
        :color="
          activeDashboard === 'analysisByClient' ? 'purple-darken-4' : 'grey'
        "
        elevation="2"
        @click="switchDashboard('analysisByClient')"
      >
        <v-icon>mdi-account-search</v-icon>
      </v-btn>
      <v-btn
        class=""
        :color="
          activeDashboard === 'analysisByCanal'
            ? 'deep-purple-darken-4'
            : 'grey'
        "
        elevation="2"
        @click="switchDashboard('analysisByCanal')"
      >
        <v-icon>mdi-table-filter</v-icon>
      </v-btn>
      <v-btn
        class=""
        :color="
          activeDashboard === 'GoalsAndProjections' ? 'teal-darken-3' : 'grey'
        "
        elevation="2"
        @click="switchDashboard('GoalsAndProjections')"
      >
        <v-icon>mdi-podium-gold</v-icon>
      </v-btn>
      <v-btn
        class=""
        :color="activeDashboard === 'map' ? 'blue-grey-darken-3' : 'grey'"
        elevation="2"
        @click="switchDashboard('map')"
      >
        <v-icon>mdi-map</v-icon>
      </v-btn>
      <v-btn
        class=""
        :color="activeDashboard === 'trends' ? 'deep-orange-darken-4' : 'grey'"
        elevation="2"
        @click="switchDashboard('trends')"
      >
        <v-icon>mdi-sine-wave</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
// Imports dos componentes utilizados no Dashboard
import SimpleCard from "../../components/DashboardGerencial/Embeeded/SimpleCard.vue";
import DashboardManagerial from "../../components/DashboardGerencial/Embeeded/DashboardManagerial.vue";
import DashboardAnalysis from "../../components/DashboardGerencial/Embeeded/DashboardAnalysis.vue";
import DashboardAnalysisByClient from "../../components/DashboardGerencial/Embeeded/DashboardAnalysisByClient.vue";
import DashboardAnalysisByCanal from "../../components/DashboardGerencial/Embeeded/DashboardAnalysisByCanal.vue";
import DashboardGoalsAndProjections from "../../components/DashboardGerencial/Embeeded/DashboardGoalsAndProjections.vue";
import { shallowRef } from "vue";

export default {
  name: "DashboardGerencial",
  components: {
    SimpleCard,
    DashboardManagerial,
    DashboardAnalysis,
    DashboardAnalysisByClient,
    DashboardAnalysisByCanal,
    DashboardGoalsAndProjections,
  },
  data() {
    return {
      model: null,
      activeDashboard: "managerial", // Dashboard ativo por padrão
      selectDashboard: [
        "DashboardGerencial",
        "DashboardAnalysis",
        "DashboardGoalsAndProjections",
        "DashboardAnalysisByClient",
        "DashboardAnalysisByCanal",
      ],
      buttonDashboard: "DashboardGerencial",
      toggleFiltersVisible: false,
      selectedFilter: null,
      dateRange: {
        from: "2024-01-01",
        to: "2024-12-31",
      },
      // Filtros dos dashboards
      filters: {
        mes: null,
        produto: null,
        cliente: null,
        regiao: null,
        representante: null,
      },
      // Opções para os filtros
      meses: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      opcoesMockup: {
        produtos: [
          "Notebook Dell Inspiron",
          "Monitor LG 24''",
          "Impressora HP LaserJet",
          "Smartphone Samsung",
          "Tablet iPad",
          "Teclado Mecânico",
          "Webcam Logitech",
          "SSD Kingston 1TB",
          "Placa de Vídeo RTX",
          "Processador Intel i7",
          "Mouse Gamer",
          "Memória RAM 32GB",
        ],
        clientes: [
          "TechCorp Solutions",
          "InfoTech Ltda",
          "Office Express",
          "Mobile World",
          "Digital Store",
          "Gamer Zone",
          "Stream Pro",
          "Hardware Plus",
          "Gaming Masters",
          "PC Builder",
          "Esports Arena",
          "Server Solutions",
        ],
        regioes: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
        representantes: [
          "João Silva",
          "Maria Santos",
          "Pedro Costa",
          "Ana Oliveira",
          "Carlos Ferreira",
        ],
      },
    };
  },
  computed: {
    borderColor() {
      const colorMap = {
        managerial: "#1976d2", // primary (azul)
        analysis: "#c62828", // red-darken-4
        analysisByClient: "#4a148c", // purple-darken-4
        analysisByCanal: "#311b92", // deep-purple-darken-4
        GoalsAndProjections: "#00695c", // teal-darken-3
        map: "#37474f", // blue-grey-darken-3
        trends: "#bf360c", // deep-orange-darken-4
      };
      return colorMap[this.activeDashboard] || "#757575"; // grey como fallback
    },
  },
  methods: {
    switchDashboard(dashboardType) {
      console.log("🔄 Trocando dashboard para:", dashboardType);
      console.log("🔄 Dashboard anterior:", this.activeDashboard);
      this.activeDashboard = dashboardType;
      console.log("✅ Dashboard atual:", this.activeDashboard);

      // Forçar atualização da interface
      this.$nextTick(() => {
        console.log("🔄 Next tick - Dashboard ativo:", this.activeDashboard);
      });
    },
    toggleFilters() {
      this.toggleFiltersVisible = !this.toggleFiltersVisible;
    },
    applyFilters() {
      console.log("Filtros aplicados:", {
        filter: this.selectedFilter,
        dateRange: this.dateRange,
        filters: this.filters,
      });
      //
    },
    clearFilters() {
      this.selectedFilter = null;
      this.dateRange = {
        from: "2024-01-01",
        to: "2024-12-31",
      };
      this.resetFilters();
    },
    resetFilters() {
      this.filters = {
        mes: null,
        produto: null,
        cliente: null,
        regiao: null,
        representante: null,
      };
    },
  },
};
</script>
