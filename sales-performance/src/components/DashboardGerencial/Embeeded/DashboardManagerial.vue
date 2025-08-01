<template>
  <div>
    <div>
      <h1 class="text-h3 font-weight-bold mb-2 text-primary">Dashboard</h1>
      <p class="text-subtitle-1 text-grey">Dashboard Gerencial</p>
    </div>
    <v-row class="mb-4">
      <v-col cols="6" sm="3" md="3">
        <SimpleCard
          title="Vendas Totais"
          :value="'R$ 2.450.000'"
          color="primary"
          icon="mdi-currency-usd"
        />
      </v-col>
      <v-col cols="6" sm="3" md="3">
        <SimpleCard
          title="Meta Mensal"
          :value="'R$ 1.800.000'"
          color="primary"
          icon="mdi-target"
        />
      </v-col>
      <v-col cols="6" sm="3" md="3">
        <SimpleCard
          title="Clientes Ativos"
          :value="'1.247'"
          color="primary"
          icon="mdi-account-group"
        />
      </v-col>
      <v-col cols="6" sm="3" md="3">
        <SimpleCard
          title="Produtos Vendidos"
          :value="'8.569'"
          color="primary"
          icon="mdi-package-variant"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <ApexAreaChart title="Evolução de Vendas" />
      </v-col>
      <v-col cols="12" md="4">
        <ApexDonutChart title="Meta vs Realizado" />
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarChart title="Vendas Totais" />
      </v-col>
      <v-col cols="12" md="4">
        <ApexRadialChart title="Vendas Totais" />
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarAlternativeChart title="Top 10 Produtos Mais Vendidos" />
      </v-col>
      <v-col cols="6" sm="3" md="4">
        <ApexAlternativeDonutChart
          title="Margem Bruta vs Margem Líquida"
          class="mb-6"
        />
        <SimpleCard
          title="Ticket médio"
          :value="'R$ 1.200'"
          :color="'#fff'"
          icon="mdi-chart-line"
          colorIcon="black"
        />
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexAreaAlternativeChart title="Margem Bruta x Margem Líquida" />
      </v-col>
      <v-col cols="6" sm="3" md="4">
        <MapDrilldown />
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <ApexBarBasicChart title="Faturamento por região" />
      </v-col>
      <v-col cols="6" sm="3" md="4">
        <MapDrilldown />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ApexAreaChart from "./ApexAreaChart.vue";
import ApexDonutChart from "./ApexDonutChart.vue";
import ApexBarChart from "./ApexBarChart.vue";
import ApexBarAlternativeChart from "./ApexBarAlternativeChart.vue";
import ApexAreaAlternativeChart from "./ApexAreaAlternativeChart.vue";
import ApexRadialChart from "./ApexRadialChart.vue";
import ApexBarBasicChart from "./ApexBarBasicChart.vue";
import ApexAlternativeDonutChart from "./ApexAlternativeDonutChart.vue";
import MapDrilldown from "./MapDrilldown.vue";
import SimpleCard from "./SimpleCard.vue";

export default {
  name: "Dashboard",
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
    SimpleCard,
  },
  data() {
    return {
      selectedFilter: null,
      dateRange: {
        from: "2024-01-01",
        to: "2024-12-31",
      },
    };
  },
};
</script>
