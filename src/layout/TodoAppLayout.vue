<template>
  <TodoAppHeader></TodoAppHeader>
  <slot></slot>
</template>
<script>
import TodoAppHeader from './TodoAppHeader.vue'

export default {
  components: { TodoAppHeader }
}
</script>
