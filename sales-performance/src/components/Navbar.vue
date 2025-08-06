<template>
  <v-navigation-drawer expand-on-hover permanent rail color="grey-darken-4">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="guilherme@automatacustom.com"
        title="Guilherme Augusto"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard-variant"
        title="Dashboard"
        value="Dashboard"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
