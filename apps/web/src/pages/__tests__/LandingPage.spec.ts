import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LandingPage from '../LandingPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/login', component: { template: '<div>Login</div>' } },
    { path: '/dashboard', component: { template: '<div>Dashboard</div>' } },
  ],
});

describe('LandingPage.vue', () => {
  it('renders the welcome message', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(LandingPage, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('h1').text()).toBe('Welcome to Reverb');
  });
});
