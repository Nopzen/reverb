<template>
  <div class="login-page">
    <img src="@/assets/images/login-splash.png" alt="Login Splash Image" class="splash-image" />
    <div class="login-container">
      <h1>Reverb</h1>
      <p>Sign in to your account</p>
      <div class="sso-container">
        <input v-model="email" type="email" placeholder="Enter your work email" class="email-input" />
        <Button size="small" @click="handleContinue">Continue</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';

const email = ref('');

const handleContinue = () => {
  // Logic to determine identity provider based on email domain will go here
  console.log(`Email entered: ${email.value}`);
};
</script>

<style scoped>
.login-page {
  display: grid;
  grid-template-columns: 50vw 50vw;
  height: 100vh;
}

.splash-image {
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sso-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px auto;
  width: 100%;
  max-width: 300px;
}

.sso-button {
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.sso-button.azure-ad {
  background-color: var;
  color: white;
  border-color: #0078d4;
}

.email-input {
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-foreground);
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}

.email-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-soft);
}
</style>
