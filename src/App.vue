<script>
import TodoAppView from '@views/TodoAppView.vue';
import TodoAppLayout from './layout/TodoAppLayout.vue';

export default {
  components: {
    TodoAppLayout,
    TodoAppView
}
}
</script>

<template>
  <TodoAppLayout>
    <TodoAppView></TodoAppView>
  </TodoAppLayout>
</template>

<style scoped>

</style>
