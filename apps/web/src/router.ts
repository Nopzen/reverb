import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import LandingPage from './pages/LandingPage.vue';
import LoginPage from './pages/LoginPage.vue';
import DashboardPage from './pages/DashboardPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: DashboardPage }
];

if (import.meta.env.DEV) {
  routes.push({
    path: '/playground',
    component: () => import('./pages/PlaygroundPage.vue')
  });
}

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
