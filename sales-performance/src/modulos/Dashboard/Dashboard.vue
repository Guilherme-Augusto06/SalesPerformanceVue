<template>
  <div class="ml-16 pa-6">
    <!-- Título do Dashboard -->
    <div class="mb-6">
      <h1 class="text-h3 font-weight-light text-primary mb-2">Dashboard</h1>
      <p class="text-subtitle-1 text-grey">Sales Performance Overview</p>
    </div>
    <v-row>
      <v-col cols="12" md="8">
        <ApexAreaChart />
      </v-col>
            <v-col cols="12" md="4">
        <ApexDonutChart />
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarChart />
      </v-col>

    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarAlternativeChart />
      </v-col>

    </v-row>

    <!-- Quarta linha - Mapa de vendas por país -->
    <v-row class="mt-4">
      <v-col cols="12">
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SimpleCard from '../../components/Dashboard/Embeeded/SimpleCard.vue';
import GraphCard from '../../components/Dashboard/Embeeded/GraphCard.vue';
import RecentActivityCard from '../../components/Dashboard/Embeeded/RecentAcivityCard.vue';
import ApexAreaChart from '../../components/Dashboard/Embeeded/ApexAreaChart.vue';
import ApexDonutChart from '../../components/Dashboard/Embeeded/ApexDonutChart.vue';
import ApexBarChart from '../../components/Dashboard/Embeeded/ApexBarChart.vue';
import ApexBarAlternativeChart from '../../components/Dashboard/Embeeded/ApexBarAlternativeChart.vue';

export default {
  name: 'Dashboard',
  components: {
    SimpleCard,
    GraphCard,
    RecentActivityCard,
    ApexAreaChart,
    ApexDonutChart,
    ApexBarChart,
    ApexBarAlternativeChart,
  },
  data() {
    return {
      // Dados para possíveis funcionalidades futuras
    }
  }
};
</script>
