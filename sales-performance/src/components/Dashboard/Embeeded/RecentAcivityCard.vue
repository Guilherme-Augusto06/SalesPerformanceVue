<template>
<v-card elevation="2" rounded="lg" class="pa-4 mb-4">
    <h3 class="text-h6 font-weight-medium mb-3">Recent Activity</h3>
    <v-list dense class="pa-0">
    <v-list-item class="px-0">
        <v-list-item-avatar size="32" color="success">
        <v-icon small color="white">mdi-account-plus</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
        <v-list-item-title class="text-body-2">New customer registered</v-list-item-title>
        <v-list-item-subtitle class="text-caption">2 minutes ago</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
    
    <v-list-item class="px-0">
        <v-list-item-avatar size="32" color="primary">
        <v-icon small color="white">mdi-shopping</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
        <v-list-item-title class="text-body-2">Order #1234 completed</v-list-item-title>
        <v-list-item-subtitle class="text-caption">5 minutes ago</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
    
    <v-list-item class="px-0">
        <v-list-item-avatar size="32" color="warning">
        <v-icon small color="white">mdi-alert</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
        <v-list-item-title class="text-body-2">Stock alert: Product ABC</v-list-item-title>
        <v-list-item-subtitle class="text-caption">15 minutes ago</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
    </v-list>
</v-card>
</template>

<script>
export default {
  name: 'RecentActivityCard',
}

</script>