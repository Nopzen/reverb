<template>
  <div class="landing-page">
    <h1>Welcome to Reverb</h1>
    <router-link to="/login">Login</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
</template>

<script setup lang="ts">
// No script needed for basic landing page
</script>

<style scoped>
.landing-page {
  text-align: center;
  margin-top: 40px;
  width: 100%;
}
</style>
