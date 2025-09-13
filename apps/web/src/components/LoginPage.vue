<template>
  <div class="login-page">
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <router-link to="/">Back to Landing</router-link>
  </div>
</template>

<script setup lang="ts">
// No script needed for basic login page
</script>

<style scoped>
.login-page {
  text-align: center;
  margin-top: 40px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px auto;
  max-width: 200px;
}
</style>
