<template>
  <div class="ml-16 pa-6">
    <!-- Título do Dashboard -->
    <div>
      <div class="elevation-2 rounded-xl pa-4 bg-white mb-6">
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
      <h1 class="text-h3 font-weight-light text-primary mb-2">Dashboard</h1>
      <p class="text-subtitle-1 text-grey">Sales Performance Overview</p>
    </div>

    <v-row class="mb-4">
      <v-col cols="6" sm="3" md="3">
        <SimpleCard title="Vendas Totais" :value="'R$ 2.450.000'" :color="'#1976d2'" icon="mdi-currency-usd"/>
      </v-col>
      <v-col cols="6" sm="3" md="3">
        <SimpleCard title="Meta Mensal" :value="'R$ 1.800.000'" :color="'#388e3c'" icon="mdi-target"/>
      </v-col>
      <v-col cols="6" sm="3" md="3">
        <SimpleCard title="Clientes Ativos" :value="'1.247'" :color="'#f57c00'" icon="mdi-account-group"/>
      </v-col>
      <v-col cols="6" sm="3" md="3">
        <SimpleCard title="Produtos Vendidos" :value="'8.569'" :color="'#7b1fa2'" icon="mdi-package-variant"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <ApexAreaChart title="Evolução de Vendas"/>
      </v-col>
      <v-col cols="12" md="4">
        <ApexDonutChart title="Meta vs Realizado"/>
      </v-col>
    </v-row>
    
    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarChart title="Vendas Totais"/>
      </v-col>
      <v-col cols="12" md="4">
        <ApexRadialChart title="Vendas Totais"/>
      </v-col>
    </v-row>
    
    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarAlternativeChart title="Top 10 Produtos Mais Vendidos"  />
      </v-col>
      <v-col cols="6" sm="3" md="4">
        <ApexAlternativeDonutChart title="Margem Bruta vs Margem Líquida" class="mb-6"/>
          <SimpleCard title="Ticket médio por cliente" :value="'R$ 1.200'" :color="'#fff'" icon="mdi-chart-line" colorIcon="black"/>

      </v-col>

    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexAreaAlternativeChart title="Margem Bruta x Margem Líquida"/>
      </v-col>
      <v-col cols="6" sm="3" md="4">
        <MapDrilldown />
      </v-col>

    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarBasicChart title="Faturamento por região"/>
      </v-col>
            <v-col cols="6" sm="3" md="4">
        <MapDrilldown />
      </v-col>
    </v-row>


  </div>
  
</template>

<script>
// Imports dos componentes utilizados no Dashboard
import ApexAreaChart from '../../components/Dashboard/Embeeded/ApexAreaChart.vue';
import ApexDonutChart from '../../components/Dashboard/Embeeded/ApexDonutChart.vue';
import ApexBarChart from '../../components/Dashboard/Embeeded/ApexBarChart.vue';
import ApexBarAlternativeChart from '../../components/Dashboard/Embeeded/ApexBarAlternativeChart.vue';
import ApexAreaAlternativeChart from '../../components/Dashboard/Embeeded/ApexAreaAlternativeChart.vue';
import ApexRadialChart from '../../components/Dashboard/Embeeded/ApexRadialChart.vue';
import SimpleCard from '../../components/Dashboard/Embeeded/SimpleCard.vue';
import ApexBarBasicChart from '../../components/Dashboard/Embeeded/ApexBarBasicChart.vue';
import ApexAlternativeDonutChart from '../../components/Dashboard/Embeeded/ApexAlternativeDonutChart.vue';
import MapDrilldown from '../../components/Dashboard/Embeeded/MapDrilldown.vue';

export default {
  name: 'Dashboard',
  components: {
    ApexAreaChart,
    ApexDonutChart,
    ApexBarChart,
    ApexBarAlternativeChart,
    ApexAreaAlternativeChart,
    ApexRadialChart,
    SimpleCard,
    ApexBarBasicChart,
    ApexAlternativeDonutChart,
    MapDrilldown
  },
  data() {
    return {
      toggleFiltersVisible: false,
      selectedFilter: null,
      dateRange: {
        from: '2024-01-01',
        to: '2024-12-31'
      }
    }
  },
  methods: {
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
