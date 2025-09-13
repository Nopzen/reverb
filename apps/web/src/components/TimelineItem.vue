<template>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-5);
}

.timeline-dot {
  position: absolute;
  top: 4px;
  left: -28px; /* Adjust to align with the line */
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 2px solid var(--color-background);
}

.timeline-content {
  padding-left: var(--spacing-2);
}
</style>
