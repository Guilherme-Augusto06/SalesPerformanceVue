<template>
  <div class="ml-16 pa-6 mr-16">
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

    </div>


    <DashboardManagerial />
    <DashboardAnalisys />

    <DashSelection />
  </div>
</template>
<script>
// Imports dos componentes utilizados no Dashboard
import SimpleCard from '../../components/DashboardGerencial/Embeeded/SimpleCard.vue';
import DashboardManagerial from '../../components/DashboardGerencial/Embeeded/DashboardManagerial.vue';
import DashSelection from '../../components/DashboardGerencial/Embeeded/DashSelection.vue';
import DashboardAnalisys from '../../components/DashboardGerencial/Embeeded/DashboardAnalisys.vue';

export default {
  name: 'DashboardGerencial',
  components: {
    SimpleCard,
    DashboardManagerial,
    DashSelection,
    DashboardAnalisys
  },
  data() {
    return {
      selectDashboard: ['DashboardGerencial', 'DashboardAnalisys'],
      buttonDashboard: 'DashboardGerencial',
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
