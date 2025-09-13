<template>
  <div class="steps">
    <div
      v-for="(step, index) in steps"
      :key="index"
      :class="['step-item', { 'is-active': index === activeStep, 'is-complete': index < activeStep }]"
    >
      <div class="step-marker">
        <span v-if="index >= activeStep">{{ index + 1 }}</span>
        <span v-else>&#10003;</span>
      </div>
      <div class="step-title">{{ step }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  steps: string[];
  activeStep: number;
}>();
</script>

<style scoped>
.steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: var(--spacing-6);
}

.steps::before {
  content: '';
  position: absolute;
  top: 18px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-border);
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100px;
  text-align: center;
}

.step-marker {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--color-surface);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--color-muted);
  transition: all 0.4s ease;
}

.step-title {
  margin-top: var(--spacing-2);
  font-size: var(--font-size-sm);
  color: var(--color-muted);
}

.step-item.is-active .step-marker,
.step-item.is-complete .step-marker {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.step-item.is-active .step-title {
  color: var(--color-foreground);
  font-weight: 600;
}
</style>
