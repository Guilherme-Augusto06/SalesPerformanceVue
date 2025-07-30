<template>
  <div class="ml-16 pa-6 mr-16">
    <!-- Título do Dashboard -->
    <div>
      <div class="elevation-2 rounded-xl pa-4 bg-white mb-6" :style="{ 'border-bottom': `10px solid ${borderColor}` }">
        <div class="d-flex align-center justify-end mb-4 ga-2 ">
          <v-btn prepend-icon="mdi-filter" color="orange" variant="tonal" rounded="xl" class="font-weight-bold">Filtrar ano atual</v-btn>
          <v-btn prepend-icon="$loading" color="blue" variant="tonal" rounded="xl" class="font-weight-bold">Restaurar Filtros</v-btn>
          <v-btn prepend-icon="mdi-eye" color="purple" variant="tonal" rounded="xl" class="font-weight-bold" @click="toggleFilters">Mostrar filtros</v-btn>
        </div>
        <v-expand-transition>
          <div v-if="toggleFiltersVisible" class="pa-4 bg-grey-lighten-5 rounded">
            <v-row>

              <v-col cols="12" md="6">
                <div class="mb-4">
                  <label class="text-subtitle-2 mb-2 d-block">Período:</label>
                  <div class="d-flex ga-2">
                    <v-text-field
                      v-model="dateRange.from"
                      label="Data Inicial"
                      type="date"
                      variant="outlined"
                      density="compact"
                    />
                    <v-text-field
                      v-model="dateRange.to"
                      label="Data Final"
                      type="date"
                      variant="outlined"
                      density="compact"
                    />
                  </div>
                </div>
              </v-col>
            </v-row>
            <div class="d-flex ga-2">
              <v-btn color="success" class="font-weight-bold" @click="applyFilters">Aplicar Filtros</v-btn>
              <v-btn color="grey" variant="outlined" class="font-weight-bold" @click="clearFilters">Limpar</v-btn>
            </div>
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



    <!-- Fallback para outros dashboards não implementados -->
    <div v-show="!['managerial', 'analysis'].includes(activeDashboard)" class="pa-4">
      <v-card class="pa-6 text-center">
        <v-card-title>Dashboard em Desenvolvimento</v-card-title>
        <v-card-text>
          <p>O dashboard "{{ activeDashboard }}" está em desenvolvimento.</p>
        </v-card-text>
      </v-card>
    </div>

      <div class="position-fixed top-0 right-0 m-2 d-flex flex-column ga-6 mt-14 mr-2" style="z-index: 1000;">
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
          :color="activeDashboard === 'customers' ? 'purple-darken-4' : 'grey'" 
          elevation="2" 
          @click="switchDashboard('customers')"
        >
            <v-icon>mdi-account-search</v-icon>
        </v-btn>
        <v-btn 
          class="" 
          :color="activeDashboard === 'filters' ? 'deep-purple-darken-4' : 'grey'" 
          elevation="2" 
          @click="switchDashboard('filters')"
        >
            <v-icon>mdi-table-filter</v-icon>
        </v-btn>
        <v-btn 
          class="" 
          :color="activeDashboard === 'ranking' ? 'teal-darken-3' : 'grey'" 
          elevation="2" 
          @click="switchDashboard('ranking')"
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
import SimpleCard from '../../components/DashboardGerencial/Embeeded/SimpleCard.vue';
import DashboardManagerial from '../../components/DashboardGerencial/Embeeded/DashboardManagerial.vue';
import DashSelection from '../../components/DashboardGerencial/Embeeded/DashSelection.vue';
import DashboardAnalysis from '../../components/DashboardGerencial/Embeeded/DashboardAnalysis.vue';


export default {
  name: 'DashboardGerencial',
  components: {
    SimpleCard,
    DashboardManagerial,
    DashSelection,
    DashboardAnalysis
  },
  data() {
    return {
      activeDashboard: 'managerial', // Dashboard ativo por padrão
      selectDashboard: ['DashboardGerencial', 'DashboardAnalysis'],
      buttonDashboard: 'DashboardGerencial',
      toggleFiltersVisible: false,
      selectedFilter: null,
      dateRange: {
        from: '2024-01-01',
        to: '2024-12-31'
      }
    }
  },
  computed: {
    borderColor() {
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
  methods: {
    switchDashboard(dashboardType) {
      console.log('🔄 Trocando dashboard para:', dashboardType);
      console.log('🔄 Dashboard anterior:', this.activeDashboard);
      this.activeDashboard = dashboardType;
      console.log('✅ Dashboard atual:', this.activeDashboard);
      
      // Forçar atualização da interface
      this.$nextTick(() => {
        console.log('🔄 Next tick - Dashboard ativo:', this.activeDashboard);
      });
    },
    toggleFilters() {
      this.toggleFiltersVisible = !this.toggleFiltersVisible;
    },
    applyFilters() {
      console.log('Filtros aplicados:', {
        filter: this.selectedFilter,
        dateRange: this.dateRange
      });
      // 
    },
    clearFilters() {
      this.selectedFilter = null;
      this.dateRange = {
        from: '2024-01-01',
        to: '2024-12-31'
      };
    }
  }
};
</script>
