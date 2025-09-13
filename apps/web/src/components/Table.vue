<template>
  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  headers: string[];
}>();
</script>

<style scoped>
.table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}
.ui-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th, td {
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}

th {
  font-family: var(--font-family-heading);
  font-weight: 600;
  font-size: var(--font-size-sm);
  color: var(--color-muted);
  text-transform: uppercase;
  background-color: var(--color-surface);
}

tbody tr:last-child td {
  border-bottom: none;
}
</style>
