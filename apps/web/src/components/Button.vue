<template>
  <button :class="['ui-button', `ui-button--${size}`]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'small' | 'medium' | 'large'
}>(), {
  size: 'medium',
});
</script>

<style scoped>
.ui-button {
  font-family: var(--font-family);
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  transition: all 1s ease;
  border: 1px solid transparent;
  background: var(--btn-bg);
  color: var(--btn-text);
  box-shadow: 0 2px 8px var(--color-shadow);
}

.ui-button:hover {
  background: var(--btn-hover);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

/* --- Sizes --- */
.ui-button--small {
  padding: 8px 12px;
  font-size: 12px;
}

.ui-button--medium {
  padding: 12px 20px;
  font-size: 14px;
}

.ui-button--large {
  padding: 16px 28px;
  font-size: 16px;
}
</style>
