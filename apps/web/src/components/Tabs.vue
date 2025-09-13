<template>
  <div>
    <div class="tabs-header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: modelValue === index }]"
        @click="modelValue = index"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tabs: string[];
}>();
const modelValue = defineModel<number>();
</script>

<style scoped>
.tabs-header {
  display: flex;
  border-bottom: 2px solid var(--color-border);
}

.tab-button {
  padding: var(--spacing-3) var(--spacing-4);
  cursor: pointer;
  background: none;
  border: none;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-base);
  color: var(--color-muted);
  position: relative;
  bottom: -2px;
  border-bottom: 2px solid transparent;
}

.tab-button.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.tab-content {
  padding: var(--spacing-5) 0;
}
</style>
