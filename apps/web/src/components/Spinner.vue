<template>
  <div class="spinner" :style="{ width: `${size}px`, height: `${size}px` }"></div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number;
}>(), {
  size: 40,
});
</script>

<style scoped>
.spinner {
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
