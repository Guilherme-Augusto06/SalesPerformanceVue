<template>
  <div class="ml-16 pa-6">
    <!-- Título do Dashboard -->
    <div class="mb-6">
      <h1 class="text-h3 font-weight-light text-primary mb-2">Dashboard</h1>
      <p class="text-subtitle-1 text-grey">Sales Performance Overview</p>
    </div>

    <!-- Primeira linha - Cards de métricas principais -->
    <v-row class="mb-4">
      <SimpleCard
        title="Total Sales"
        :value="15000"
        smallValue="+5% from last month"
      />
      <SimpleCard
        title="New Customers"
        :value="120"
        smallValue="+10% from last week"
      />
      <SimpleCard
        title="Conversion Rate"
        :value="3.24"
        smallValue="2.5% increase"
      />


    </v-row>

    <!-- Segunda linha - Gráficos e informações detalhadas -->
    <v-row>
      <v-col cols="12" md="8">
        <GraphCard />
      </v-col>

      <v-col cols="12" md="4">
        <RecentActivityCard
          
        />


        <v-card elevation="2" rounded="lg" class="pa-4">
          <h3 class="text-h6 font-weight-medium mb-3">Quick Stats</h3>
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="text-body-2">Conversion Rate</span>
            <span class="text-h6 font-weight-bold text-success">3.24%</span>
          </div>
          <v-progress-linear color="success" value="32" height="6" rounded class="mb-3"></v-progress-linear>
          
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="text-body-2">Customer Satisfaction</span>
            <span class="text-h6 font-weight-bold text-primary">4.8/5</span>
          </div>
          <v-progress-linear color="primary" value="96" height="6" rounded class="mb-3"></v-progress-linear>
          
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="text-body-2">Active Users</span>
            <span class="text-h6 font-weight-bold text-info">1,250</span>
          </div>
          <v-progress-linear color="info" value="75" height="6" rounded></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SimpleCard from '../../components/Dashboard/Embeeded/SimpleCard.vue';
 import GraphCard from '../../components/Dashboard/Embeeded/GraphCard.vue';
import RecentActivityCard from '../../components/Dashboard/Embeeded/RecentAcivityCard.vue';
export default {
  name: 'Dashboard',
  components: {
    SimpleCard,
    GraphCard,
    RecentActivityCard
  },
  data() {
    return {
      // Dados para possíveis funcionalidades futuras
    }
  }
};
</script>
