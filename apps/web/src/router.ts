import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import LoginPage from './components/LoginPage.vue';
import DashboardPage from './components/DashboardPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: DashboardPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
