// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import DashboardGerencial from "..//modulos/Dashboard/DashboardGerencial.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout, // layout com Navbar
    children: [
      {
        path: "",
        name: "DashboardGerencial",
        component: DashboardGerencial,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
