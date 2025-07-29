// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
