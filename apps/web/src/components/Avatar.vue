<template>
  <div :class="['avatar', `avatar--${size}`]">
    <img v-if="src" :src="src" :alt="name" class="avatar-image" />
    <span v-else class="avatar-initials">{{ initials }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}>(), {
  size: 'md',
});

const initials = computed(() => {
  if (!props.name) return '';
  const names = props.name.split(' ');
  if (names.length > 1) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return names[0].substring(0, 2).toUpperCase();
});
</script>

<style scoped>
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background-color: var(--color-secondary);
  color: var(--btn-text);
  font-weight: 600;
  overflow: hidden;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar--sm {
  width: 32px;
  height: 32px;
  font-size: var(--font-size-xs);
}

.avatar--md {
  width: 48px;
  height: 48px;
  font-size: var(--font-size-base);
}

.avatar--lg {
  width: 64px;
  height: 64px;
  font-size: var(--font-size-lg);
}
</style>
