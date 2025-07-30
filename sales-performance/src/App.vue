<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid class="pa-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>



<script>
import Navbar from './components/Navbar.vue'
import DashboardGerencial from './modulos/Dashboard/DashboardGerencial.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    DashboardGerencial
  }
}

</script>
