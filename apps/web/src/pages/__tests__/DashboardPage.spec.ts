import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DashboardPage from '../DashboardPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/dashboard', component: DashboardPage }],
});

describe('DashboardPage.vue', () => {
  it('renders the dashboard content', async () => {
    router.push('/dashboard');
    await router.isReady();

    const wrapper = mount(DashboardPage, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('h1').text()).toBe('Dashboard');
    expect(wrapper.find('p').text()).toBe('This is your dashboard.');
  });
});
