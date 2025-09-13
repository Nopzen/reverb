<template>
  <div class="playground-container">
    <h1>UI Component Playground</h1>

    <!-- Avatar -->
    <section>
      <h2>Avatar</h2>
      <div class="component-group">
        <Avatar name="Nop Zen" size="sm" />
        <Avatar name="John Doe" size="md" />
        <Avatar src="https://i.pravatar.cc/150?img=5" name="Jane Smith" size="lg" />
      </div>
    </section>

    <!-- Button -->
    <section>
      <h2>Button</h2>
      <div class="component-group">
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </div>
    </section>

    <!-- Input -->
    <section>
      <h2>Input</h2>
      <div class="component-group--vertical">
        <Input size="small" placeholder="Small input" />
        <Input size="medium" placeholder="Medium input" />
        <Input size="large" placeholder="Large input" />
      </div>
    </section>

    <!-- Textarea -->
    <section>
      <h2>Textarea</h2>
      <Textarea placeholder="This is a textarea" />
    </section>

    <!-- Switch -->
    <section>
      <h2>Switch</h2>
      <Switch v-model="isSwitchOn" />
      <p>The switch is: {{ isSwitchOn ? 'On' : 'Off' }}</p>
    </section>

    <!-- Spinner -->
    <section>
      <h2>Spinner</h2>
      <Spinner :size="50" />
    </section>

    <!-- Tabs -->
    <section>
      <h2>Tabs</h2>
      <Tabs v-model="activeTab" :tabs="['Tab 1', 'Tab 2', 'Tab 3']">
        <div v-if="activeTab === 0">Content for Tab 1</div>
        <div v-if="activeTab === 1">Content for Tab 2</div>
        <div v-if="activeTab === 2">Content for Tab 3</div>
      </Tabs>
    </section>

    <!-- List -->
    <section>
      <h2>List</h2>
      <List>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </section>

    <!-- Table -->
    <section>
      <h2>Table</h2>
      <Table :headers="['Name', 'Title', 'Email']">
        <tr v-for="user in tableData" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.title }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </Table>
    </section>

    <!-- Pagination -->
    <section>
      <h2>Pagination</h2>
      <Pagination :current-page="currentPage" :total-pages="10" @page-changed="handlePageChange" />
    </section>

    <!-- Steps -->
    <section>
      <h2>Steps</h2>
      <Steps :steps="['Step 1', 'Step 2', 'Step 3', 'Step 4']" :active-step="activeStep" />
      <Button @click="nextStep" size="small">Next Step</Button>
    </section>

    <!-- Timeline -->
    <section>
      <h2>Timeline</h2>
      <Timeline>
        <TimelineItem>
          <h3>Event 1</h3>
          <p>Something happened here.</p>
        </TimelineItem>
        <TimelineItem>
          <h3>Event 2</h3>
          <p>And then something else.</p>
        </TimelineItem>
        <TimelineItem>
          <h3>Event 3</h3>
          <p>This is the final event.</p>
        </TimelineItem>
      </Timeline>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
import Switch from '@/components/Switch.vue';
import Spinner from '@/components/Spinner.vue';
import Tabs from '@/components/Tabs.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
import Table from '@/components/Table.vue';
import Pagination from '@/components/Pagination.vue';
import Steps from '@/components/Steps.vue';
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';

const isSwitchOn = ref(false);
const activeTab = ref(0);
const currentPage = ref(1);
const activeStep = ref(0);

const tableData = [
  { id: 1, name: 'Jane Cooper', title: 'Regional Paradigm Technician', email: 'jane.cooper@example.com' },
  { id: 2, name: 'Cody Fisher', title: 'Product Directives Officer', email: 'cody.fisher@example.com' },
  { id: 3, name: 'Esther Howard', title: 'Forward Response Developer', email: 'esther.howard@example.com' },
];

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

const nextStep = () => {
  activeStep.value = (activeStep.value + 1) % 4;
};
</script>

<style scoped>
.playground-container {
  padding: var(--spacing-7);
  max-width: 900px;
  margin: auto;
}

section {
  margin-bottom: var(--spacing-7);
  padding-bottom: var(--spacing-6);
  border-bottom: 1px solid var(--color-border);
}

h2 {
  margin-bottom: var(--spacing-5);
}

.component-group {
  display: flex;
  gap: var(--spacing-4);
  align-items: center;
}

.component-group--vertical {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  max-width: 400px;
}
</style>
