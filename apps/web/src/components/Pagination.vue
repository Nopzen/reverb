<template>
  <nav class="pagination">
    <Button size="small" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
      Previous
    </Button>
    <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
    <Button size="small" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
      Next
    </Button>
  </nav>
</template>

<script setup lang="ts">
import Button from './Button.vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits(['page-changed']);

const changePage = (page: number) => {
  if (page > 0 && page <= props.totalPages) {
    emit('page-changed', page);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);
  margin-top: var(--spacing-5);
}

.page-info {
  font-size: var(--font-size-sm);
  color: var(--color-muted);
}
</style>
