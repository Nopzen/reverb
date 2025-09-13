<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: var(--spacing-6);
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 11px; /* Adjust to center with the dot */
  bottom: 0;
  width: 2px;
  background-color: var(--color-border);
}
</style>
