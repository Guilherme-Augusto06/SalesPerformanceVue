// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DashboardGerencial from '../modulos/Dashboard/DashboardGerencial.vue'

const routes = [
  { path: '/', name: 'DashboardGerencial', component: DashboardGerencial },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
