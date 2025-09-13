<template>
  <input :class="['ui-input', `ui-input--${size}`]" />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'small' | 'medium' | 'large'
}>(), {
  size: 'medium',
});
</script>

<style scoped>
.ui-input {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-foreground);
  font-family: var(--font-family-body);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.ui-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 20%, transparent);
}

/* --- Sizes --- */
.ui-input--small {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
}

.ui-input--medium {
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
}

.ui-input--large {
  padding: var(--spacing-4) var(--spacing-5);
  font-size: var(--font-size-lg);
}
</style>
