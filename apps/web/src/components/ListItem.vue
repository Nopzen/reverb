<template>
  <li class="ui-list-item">
    <span v-if="$slots.icon" class="list-icon">
      <slot name="icon"></slot>
    </span>
    <slot></slot>
  </li>
</template>

<style scoped>
.ui-list-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-2) 0;
  font-size: var(--font-size-base);
  color: var(--color-foreground);
}

.list-icon {
  margin-right: var(--spacing-3);
  color: var(--color-secondary);
  display: inline-flex;
}
</style>
