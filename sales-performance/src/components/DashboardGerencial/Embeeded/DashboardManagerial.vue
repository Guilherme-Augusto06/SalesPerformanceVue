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
      <v-col cols="12" md="12">
        <AreaChart title="Evolução de Vendas" />
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" md="12">
        <BarChart title="Vendas Totais" />
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" md="12">
        <AreaAlternativeChart title="Análise de Tendências" />
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" md="12">
        <BarBasicChart title="Faturamento por região" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <DonutChart title="Meta vs Realizado" />
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" sm="3" md="4">
        <SimpleCard
          title="Ticket médio"
          :value="'R$ 1.200'"
          color="deep-purple-accent-3"
          icon="mdi-chart-line"
          class="text-white"
          colorIcon="white"
        />
      </v-col>
      <v-col cols="12" md="4">
        <SimpleCard
          title="Margem Líquida"
          :value="'R$ 1.200'"
          color="green-accent-3"
          icon="mdi-cash-multiple"
          class="text-white"
          :colorIcon="cardColor"
        />
      </v-col>
      <v-col cols="12" md="4">
        <SimpleCard
          title="Margem Bruta"
          :value="'R$ 1.200'"
          color="teal-accent-3"
          icon="mdi-margin"
          class="text-white"
          :colorIcon="cardColor"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" sm="3" md="4">
        <MapDrilldown :enableNavigation="false" />
      </v-col>
      <v-col cols="12" md="4">
        <RadialChart title="Vendas Totais" />
      </v-col>
      <v-col cols="6" sm="4" md="4">
        <MapDrilldown :enableNavigation="false" />
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" md="12">
        <BarAlternativeChart title="Top 10 Produtos Mais Vendidos" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import AreaChart from "../../Scaffold/AreaChart.vue";
import DonutChart from "../../Scaffold/DonutChart.vue";
import BarChart from "../../Scaffold/BarChart.vue";
import BarAlternativeChart from "../../Scaffold/BarAlternativeChart.vue";
import AreaAlternativeChart from "../../Scaffold/AreaAlternativeChart.vue";
import RadialChart from "../../Scaffold/RadialChart.vue";
import BarBasicChart from "../../Scaffold/BarBasicChart.vue";
import AlternativeDonutChart from "../../Scaffold/AlternativeDonutChart.vue";
import MapDrilldown from "../../Scaffold/MapDrilldown.vue";
import SimpleCard from "../../Scaffold/SimpleCard.vue";

export default {
  name: "Dashboard",
  components: {
    AreaChart,
    DonutChart,
    BarChart,
    BarAlternativeChart,
    AreaAlternativeChart,
    RadialChart,
    BarBasicChart,
    AlternativeDonutChart,
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
  computed: {
    cardColor() {
      return this.$vuetify.theme.dark ? "#212121" : "";
    },
  },
};
</script>
