<template>
    <v-card
      class="text-center pa-4"
      elevation="2"
      rounded="lg"
      :color="color"
    >
      <v-icon size="48" color="black" class="mb-3">{{ icon || 'mdi-trending-up' }}</v-icon>
      <h2 class="text-h4 font-weight-bold white--text mb-1">{{ value }}</h2>
      <p class="text-subtitle-2 white--text mb-2">{{ title }}</p>
      <v-chip small color="success" text-color="white" v-if="smallValue">
        <v-icon small left>mdi-arrow-up</v-icon>
        {{ smallValue }}
      </v-chip>
    </v-card>
</template>

<script>
export default {
    name: 'SimpleCard',
    props: {
        title: {
            type: String,
            required: true
        },
        value: {
            type: [String, Number],
            required: true
        },
        smallValue: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#fff'
        },
        icon: {
            type: String,
            default: 'mdi-trending-up'
        }
    }
}
</script>

<style scoped>
.v-card {
  transition: all 0.3s ease;
}

.v-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
}
</style>
