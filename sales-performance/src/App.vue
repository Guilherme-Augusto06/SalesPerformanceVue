<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid class="pa-4">
        <Dashboard />
      </v-container>
    </v-main>
  </v-app>
</template>



<script>
import Navbar from './components/Navbar.vue'
import Dashboard from './modulos/Dashboard/Dashboard.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Dashboard
  }
}

</script>
