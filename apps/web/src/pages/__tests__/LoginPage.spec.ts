import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginPage from '../LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/login', component: LoginPage }],
});

describe('LoginPage.vue', () => {
  it('renders the login form', async () => {
    router.push('/login');
    await router.isReady();

    const wrapper = mount(LoginPage, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('h1').text()).toBe('Login');
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Login');
  });
});
