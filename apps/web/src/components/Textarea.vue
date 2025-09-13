<template>
  <textarea class="ui-textarea"></textarea>
</template>

<style scoped>
.ui-textarea {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-foreground);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  transition: border-color 0.3s, box-shadow 0.3s;
  min-height: 80px;
}

.ui-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 20%, transparent);
}
</style>
