<template>
    <div class="position-absolute position-fixed top-0 right-0 m-2 d-flex flex-column ga-6 mt-14 mr-2">
        <v-btn class="" color="primary" elevation="2" >
            <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
        <v-btn class="" color="red-darken-3" elevation="2" >
            <v-icon>mdi-google-analytics</v-icon>
        </v-btn>
        <v-btn class="" color="purple-darken-4" elevation="2" >
            <v-icon>mdi-account-search</v-icon>
        </v-btn>
        <v-btn class="" color="deep-purple-darken-4" elevation="2" >
            <v-icon>mdi-table-filter</v-icon>
        </v-btn>
        <v-btn class="" color="teal-darken-3" elevation="2" >
            <v-icon>mdi-podium-gold</v-icon>
        </v-btn>
        <v-btn class="" color="blue-grey-darken-3" elevation="2" >
            <v-icon>mdi-map</v-icon>
        </v-btn>
        <v-btn class="" color="deep-orange-darken-4" elevation="2" >
            <v-icon>mdi-sine-wave</v-icon>
        </v-btn>
    </div>
</template>
<script>
export default {
  name: 'DashSelection',
  data() {
    return {
      selectedFilter: null,
      dateRange: {
        from: '2024-01-01',
        to: '2024-12-31'
      }
    };
  },
  methods: {
    onFilterChange(filter) {
      this.selectedFilter = filter;
    },
    onDateRangeChange(range) {
      this.dateRange = range;
    }
  }
};
</script>